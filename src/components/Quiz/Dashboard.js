import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, quiz, selectedAnswers } = location.state || {};

  if (!quiz || !selectedAnswers) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <div className="no-data-state">
            <div className="no-data-icon">📊</div>
            <h2>No Quiz Data Found</h2>
            <p>It looks like you haven't taken a quiz yet. Start one to see your results here!</p>
            <button className="improve-btn" onClick={() => navigate("/Quiz")}>
              <span>Take a Quiz</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const percentage = Math.round((score / total) * 100);
  
  const getPerformanceBadge = () => {
    if (percentage >= 80) return { text: "Excellent! 🌟", class: "badge-excellent" };
    if (percentage >= 60) return { text: "Good Job! 👍", class: "badge-good" };
    if (percentage >= 40) return { text: "Keep Trying! 💪", class: "badge-average" };
    return { text: "Need Improvement 📚", class: "badge-poor" };
  };

  const badge = getPerformanceBadge();

  const handleImproveClick = () => {
    navigate("/ChatBot", {
      state: {
        score,
        total,
        quiz,
        selectedAnswers
      }
    });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Score Card */}
        <div className="score-card">
          <h2>Quiz Results</h2>
          <div className="score-display">
            <div className="score-circle">
              <div className="score-number">{score}/{total}</div>
              <div className="score-label">Score</div>
            </div>
            <div className="score-percentage">{percentage}%</div>
          </div>
          <div className={`performance-badge ${badge.class}`}>
            {badge.text}
          </div>
        </div>

        {/* Answer Breakdown */}
        <div className="answer-breakdown">
          <h3 className="breakdown-header">Answer Breakdown</h3>
          {quiz.map((q, index) => (
            <div key={index} className="question-block">
              <h4>Q{index + 1}: {q.question}</h4>
              <div className="answer-row">
                <div className="correct-answer">
                  <span>Correct: {q.correctAnswer}</span>
                </div>
                <div
                  className={`user-answer ${
                    selectedAnswers[index] === q.correctAnswer ? "correct" : "incorrect"
                  }`}
                >
                  <span>Your Answer: {selectedAnswers[index] || "Not Answered"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="dashboard-actions">
          <button onClick={handleImproveClick} className="improve-btn">
            <span>Get AI Suggestions</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3C10 3 15 5 15 10C15 15 10 17 10 17M10 3C10 3 5 5 5 10C5 15 10 17 10 17M10 3V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => navigate("/Quiz")} className="retake-btn">
            <span>Retake Quiz</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C8.34315 16 6.84315 15.3284 5.75736 14.2426" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 14V10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => navigate("/")} className="home-btn">
            <span>Go Home</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 10L10 3L17 10M5 8V17H8V13H12V17H15V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
