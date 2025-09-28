// src/components/ResultsScreen.jsx
import React from "react";
import { useQuiz } from "../context/QuizContext";
import "./ResultsScreen.css";

const ResultsScreen = () => {
  const { answers, questions, startQuiz } = useQuiz();

  // Doğru cevapları kontrol et - mock data'daki 'answer' alanını kullan
  const correctCount = answers.filter((ans, idx) => {
    return ans === questions[idx].answer; // 'correct' yerine 'answer' kullan
  }).length;

  const wrongCount = answers.length - correctCount;
  const blankCount = answers.filter((ans) => ans === "" || !ans).length;
  const percentage = Math.round((correctCount / questions.length) * 100);

  const restartQuiz = () => {
    startQuiz();
  };

  return (
    <div className="results-screen">
      <div className="results-card">
        <h1>Quiz Completed!</h1>
        <p className="results-subtitle">Here are your results</p>

        <div className="score-circle">
          <div className="percentage">{percentage}%</div>
          <div className="score-label">Final Score</div>
        </div>

        <div className="stats-grid">
          <div className="stat-item correct">
            <div className="stat-number">{correctCount}</div>
            <div className="stat-label">Correct</div>
          </div>
          <div className="stat-item incorrect">
            <div className="stat-number">{wrongCount}</div>
            <div className="stat-label">Incorrect</div>
          </div>
          <div className="stat-item blank">
            <div className="stat-number">{blankCount}</div>
            <div className="stat-label">Blank</div>
          </div>
        </div>

        <div className="detailed-results">
          <h3>Detailed Results</h3>
          <div className="questions-list">
            {questions.map((question, idx) => {
              const userAnswer = answers[idx] || "No answer";
              const correctAnswer = question.answer; // 'answer' kullan
              const isCorrect = userAnswer === correctAnswer;

              return (
                <div key={idx} className="question-item">
                  <div className="question-header">
                    <span className="question-number">Q{idx + 1}</span>
                    <span className="question-text">
                      {question.question}
                    </span>{" "}
                    {/* 'text' yerine 'question' */}
                  </div>
                  <div className="answer-comparison">
                    <div className="answer-row">
                      <span className="answer-label">Your answer:</span>
                      <span
                        className={`user-answer ${
                          isCorrect ? "correct" : "wrong"
                        }`}
                      >
                        {userAnswer}
                      </span>
                    </div>
                    <div className="answer-row">
                      <span className="answer-label">Correct answer:</span>
                      <span className="correct-answer">{correctAnswer}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="restart-btn" onClick={restartQuiz}>
          Take Quiz Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
