import React, { createContext, useContext, useState, useEffect } from "react";
import { questions } from "../data/mock";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  const startQuiz = () => {
    console.log("startQuiz çalıştı"); // <- bunu ekle test için
    setStep(1);
    setTimeLeft(30);
    setAnswers([]);
  };

  const selectAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  useEffect(() => {
    if (step === 0 || step > questions.length) return;

    setTimeLeft(30);
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          selectAnswer("");
          return 30;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [step]);

  return (
    <QuizContext.Provider
      value={{ step, questions, selectAnswer, answers, timeLeft, startQuiz }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
