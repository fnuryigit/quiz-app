import React, { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";

const QuizQuestion = () => {
  const { step, questions, selectAnswer, timeLeft } = useQuiz();
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (step > 0 && step <= questions.length) {
      setShowOptions(false);
      const timer = setTimeout(() => setShowOptions(true), 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  if (step === 0 || step > questions.length) return null;

  const question = questions[step - 1];

  return (
    <div className="question-card">
      {/* KESİN ÇÖZÜM - INLINE STYLE */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          paddingBottom: "1rem",
          borderBottom: "2px solid #e2e8f0",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            color: "#6b7280",
            fontWeight: "500",
          }}
        >
          Question {step} of {questions.length}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: "600",
            color: timeLeft <= 10 ? "#dc2626" : "#4f46e5",
          }}
        >
          <span>⏱️</span>
          {timeLeft}s
        </div>
      </div>

      <img src={question.media} alt="question" className="question-image" />
      <h2 className="question-text">{question.question}</h2>

      <div className="options">
        {showOptions &&
          question.options.map((option, idx) => (
            <button
              key={idx}
              className="option-btn"
              onClick={() => selectAnswer(option)}
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
