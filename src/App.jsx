import React from "react";
import { QuizProvider, useQuiz } from "./context/QuizContext";
import StartScreen from "./components/StartScreen";
import QuizQuestion from "./components/QuizQuestion";
import ResultsScreen from "./components/ResultsScreen";
import "./App.css";

function AppContent() {
  const { step, questions } = useQuiz();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "0",
        margin: "0",
      }}
    >
      {step === 0 && <StartScreen />}
      {step > 0 && step <= questions.length && <QuizQuestion />}
      {step > questions.length && <ResultsScreen />}
    </div>
  );
}

function App() {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
}

export default App;
