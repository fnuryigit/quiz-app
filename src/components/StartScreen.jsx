import React from "react";
import { useQuiz } from "../context/QuizContext";
import "./StartScreen.css";

const StartScreen = () => {
  const { startQuiz } = useQuiz();

  return (
    <div className="start-container">
      <div className="start-header">
        <h1>Knowledge Assessment Quiz</h1>
        <p>
          Test your knowledge with our comprehensive 10-question quiz. Each
          question has a 30-second time limit with answer options appearing
          after 4 seconds.
        </p>
      </div>

      <div className="content-wrapper">
        {/* TEST INFORMATION - ÜSTTE */}
        <div className="info-section">
          <h2>Test Information</h2>
          <p className="section-subtitle">
            Everything you need to know before starting the quiz
          </p>

          <div className="info-cards-horizontal">
            <div className="info-card">
              <div className="card-icon">📊</div>
              <h3>Total Questions</h3>
              <p>10 questions</p>
            </div>
            <div className="info-card">
              <div className="card-icon">⏱️</div>
              <h3>Time per Question</h3>
              <p>30 seconds maximum</p>
            </div>
          </div>
        </div>

        {/* IMPORTANT RULES - ALTINDA */}
        <div className="rules-section">
          <h3>Important Rules</h3>
          <div className="rules-list">
            <div className="rule-item">
              <span className="rule-number">1</span>
              <span>Answer options will appear after 4 seconds</span>
            </div>
            <div className="rule-item">
              <span className="rule-number">2</span>
              <span>Each question has a 30-second time limit</span>
            </div>
            <div className="rule-item">
              <span className="rule-number">3</span>
              <span>You cannot go back to previous questions</span>
            </div>
            <div className="rule-item">
              <span className="rule-number">4</span>
              <span>Your results will be shown at the end</span>
            </div>
          </div>
        </div>

        {/* START BUTTON - EN ALTTA */}
        <div className="start-action">
          <button className="start-test-btn" onClick={startQuiz}>
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
