import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Chatbot from "./components/Chatbot/Chatbot";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Quiz from "./components/Quiz/Quiz";
import Dashboard from "./components/Quiz/Dashboard";

function App() {
  const location = useLocation();
  
  // Pages where footer should NOT be shown
  const noFooterPages = ['/ChatBot', '/Quiz', '/Dashboard'];
  const showFooter = !noFooterPages.includes(location.pathname);

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChatBot" element={<Chatbot />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
