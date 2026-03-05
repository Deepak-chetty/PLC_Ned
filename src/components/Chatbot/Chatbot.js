import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hey there! How can I assist you today? 😊", sender: "bot" },
  ]);
  const [question, setQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const hasGeneratedRef = useRef(false); // Prevent multiple quiz messages
  const location = useLocation();
  const { score, total, quiz, selectedAnswers } = location.state || {};

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendToGemini = async (msg) => {
    setIsTyping(true);
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: msg }] }],
        }
      );

      const botReply =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Couldn't analyze quiz performance.";

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (err) {
      console.error("Gemini Error:", err);
      setMessages((prev) => [
        ...prev,
        { text: "Failed to get response from Gemini.", sender: "bot" },
      ]);
    }
    setIsTyping(false);
  };

  const generatePerformanceMessage = useCallback(() => {
    if (!quiz || !selectedAnswers || score == null || !total) return;

    const selectedList = Array.isArray(selectedAnswers)
      ? selectedAnswers
      : Object.values(selectedAnswers);

    const performancePrompt = `I completed a quiz and scored ${score} out of ${total}. Here's how I performed:\n\n` +
      quiz
        .map((q, index) => {
          const selected = selectedList[index] || "No Answer";
          return `Q${index + 1}: ${q.question}\nYour Answer: ${selected}\nCorrect Answer: ${q.correctAnswer}\n`;
        })
        .join("\n") +
      "\n\nBased on this, please give me feedback on my weak topics and improvement suggestions.";

    setMessages((prev) => [...prev, { text: performancePrompt, sender: "user" }]);
    sendToGemini(performancePrompt);
  }, [quiz, score, total, selectedAnswers]);

  useEffect(() => {
    if (
      quiz &&
      score != null &&
      total &&
      selectedAnswers &&
      !hasGeneratedRef.current
    ) {
      hasGeneratedRef.current = true;
      generatePerformanceMessage();
    }
  }, [quiz, score, total, selectedAnswers, generatePerformanceMessage]);

  async function generateAnswer() {
    if (!question.trim()) return;

    const userMessage = { text: question, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsTyping(true);

    try {
      let botReply = "";
      if (question.toLowerCase().includes("quiz")) {
        botReply = await generateQuiz();
      } else {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
          { contents: [{ parts: [{ text: question }] }] }
        );
        botReply =
          response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I couldn't get that, try again!";
      }
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Oops! Something went wrong. Try again.", sender: "bot" },
      ]);
    }

    setIsTyping(false);
  }

  async function generateQuiz() {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: "Generate a simple multiple-choice quiz question with options and the correct answer.",
                },
              ],
            },
          ],
        }
      );
      return (
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Couldn't generate a quiz question. Try again!"
      );
    } catch (error) {
      return "Oops! Quiz generation failed. Try again.";
    }
  }

  return (
    <div className="chat-container">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-wrapper ${msg.sender}`}
          >
            <div className={`message-bubble ${msg.sender}`}>
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <p {...props} />,
                  strong: ({ node, ...props }) => <strong {...props} />,
                  ul: ({ node, ...props }) => <ul {...props} />,
                  li: ({ node, ...props }) => <li {...props} />,
                  em: ({ node, ...props }) => <em {...props} />,
                  code: ({ node, ...props }) => <code {...props} />,
                }}
              >
                {msg.text}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="typing-indicator-wrapper">
            <div className="typing-bubble">
              <div className="typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      <div className="chat-input">
        <div className="chat-input-wrapper">
          <input
            type="text"
            placeholder="Ask me something... 💬"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !isTyping && generateAnswer()}
            disabled={isTyping}
          />
          <button 
            className="chat-send-btn" 
            onClick={generateAnswer}
            disabled={isTyping || !question.trim()}
          >
            <span>Send</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 10L18 2L10 18L8 11L2 10Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;