import React, { useState } from "react";
import axios from "axios";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  async function generateQuiz() {
    if (!topic.trim()) {
      alert("Please enter a topic for your quiz.");
      return;
    }

    console.log("Generating quiz for topic:", topic);
    console.log("API Key loaded:", process.env.REACT_APP_GEMINI_API_KEY ? "Yes" : "No");

    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `Generate a 10-question multiple choice quiz on the topic of "${topic}".
Each question should have:
- a question string
- four options
- one correct answer

Return the output as a valid JSON object in the following format:
{
  "questions": [
    {
      "question": "What is the main concept of ${topic}?",
      "options": [
        "A. Option 1",
        "B. Option 2",
        "C. Option 3",
        "D. Option 4"
      ],
      "correctAnswer": "C. Option 3"
    }
  ]
}
Only return the JSON object. No explanation. No code blocks.`
                }
              ]
            }
          ]
        }
      );

      let quizText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      // Clean out ```json fences if they appear
      quizText = quizText.replace(/```json|```/g, "").trim();

      const jsonStart = quizText.indexOf("{");
      const jsonEnd = quizText.lastIndexOf("}");
      if (jsonStart === -1 || jsonEnd === -1) throw new Error("No JSON found");

      const jsonString = quizText.slice(jsonStart, jsonEnd + 1);
      const parsed = JSON.parse(jsonString);

      if (!parsed.questions || !Array.isArray(parsed.questions)) {
        throw new Error("Invalid quiz format.");
      }

      setQuiz(parsed.questions);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setQuizCompleted(false);
    } catch (error) {
      console.error("Quiz generation failed:", error);
      console.error("Error details:", error.response?.data || error.message);
      console.error("API Key present:", !!process.env.REACT_APP_GEMINI_API_KEY);
      
      let errorMessage = "Failed to generate quiz. ";
      if (error.response) {
        errorMessage += `Server error: ${error.response.status}. `;
        if (error.response.data?.error?.message) {
          errorMessage += error.response.data.error.message;
        }
      } else if (error.request) {
        errorMessage += "No response from server. Check your internet connection.";
      } else {
        errorMessage += error.message;
      }
      
      alert(errorMessage);
    }

    setLoading(false);
  }

  function handleOptionSelect(option) {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option
    }));
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  }

  function handleSubmit() {
    let score = 0;
    quiz.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score++;
      }
    });

    navigate("/dashboard", {
      state: {
        score,
        total: quiz.length,
        quiz,
        selectedAnswers
      }
    });
  }

  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        {!quiz.length && (
          <div className="quiz-input">
            <div className="quiz-header">
              <h2>Generate Your Quiz</h2>
              <p>Enter any topic you want to learn about and we'll create a personalized quiz for you!</p>
            </div>
            
            <div className="topic-input-container">
              <label htmlFor="topic-input" className="topic-label">
                What do you want to learn today?
              </label>
              <input
                id="topic-input"
                type="text"
                className="topic-input"
                placeholder="e.g., Python Programming, World History, Biology, Mathematics..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !loading && generateQuiz()}
                disabled={loading}
              />
              
              <div className="popular-topics">
                <p className="popular-topics-label">Popular Topics:</p>
                <div className="topic-chips">
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("Python Programming")}
                    disabled={loading}
                  >
                    Python Programming
                  </button>
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("Machine Learning")}
                    disabled={loading}
                  >
                    Machine Learning
                  </button>
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("World History")}
                    disabled={loading}
                  >
                    World History
                  </button>
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("Mathematics")}
                    disabled={loading}
                  >
                    Mathematics
                  </button>
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("Biology")}
                    disabled={loading}
                  >
                    Biology
                  </button>
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("Chemistry")}
                    disabled={loading}
                  >
                    Chemistry
                  </button>
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("Physics")}
                    disabled={loading}
                  >
                    Physics
                  </button>
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("English Literature")}
                    disabled={loading}
                  >
                    English Literature
                  </button>
                  <button 
                    className="topic-chip" 
                    onClick={() => setTopic("Business Analytics")}
                    disabled={loading}
                  >
                    Business Analytics
                  </button>
                </div>
              </div>
            </div>
            
            <button 
              className="generate-quiz-btn" 
              onClick={generateQuiz} 
              disabled={loading || !topic.trim()}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  <span>Generating Your Quiz...</span>
                </>
              ) : (
                <>
                  <span>Generate Quiz</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4L10 16M4 10L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        {quiz.length > 0 && !quizCompleted && (
          <div className="quiz-content">
            <div className="quiz-progress">
              <span className="progress-text">
                Question {currentQuestionIndex + 1} of {quiz.length}
              </span>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="quiz-chat">
              <div className="question-block">
                <h3>{quiz[currentQuestionIndex].question}</h3>
                <div className="options-scroll">
                  {quiz[currentQuestionIndex].options.map((option, i) => (
                    <label key={i} className="quiz-option">
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        checked={selectedAnswers[currentQuestionIndex] === option}
                        onChange={() => handleOptionSelect(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="quiz-footer">
              <button 
                onClick={handleNextQuestion}
                disabled={!selectedAnswers[currentQuestionIndex]}
              >
                {currentQuestionIndex < quiz.length - 1 ? "Next Question →" : "Submit Quiz"}
              </button>
            </div>
          </div>
        )}

        {quizCompleted && (
          <div className="quiz-complete">
            <div className="completion-icon">🎉</div>
            <h3>Quiz Completed!</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
              Great job! Let's see how you performed.
            </p>
            <button onClick={handleSubmit}>View Results</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
