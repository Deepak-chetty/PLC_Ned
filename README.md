# 🎓 PLC - Personalized Learning Companion

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.0_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **An AI-powered learning platform that helps you master any topic with personalized quizzes and instant intelligent feedback.**

![PLC Banner](https://img.shields.io/badge/AI_Powered-Learning_Platform-blueviolet?style=for-the-badge)

---

## 🌟 Features

### 🤖 **AI Chatbot**
- **Real-time AI assistance** powered by Google's Gemini 2.0 Flash
- **Instant answers** to your learning queries
- **Interactive conversations** with intelligent context awareness
- **Markdown support** for formatted responses

### 🧠 **Smart Quiz Generator**
- **AI-generated quizzes** on any topic you choose
- **10 multiple-choice questions** per quiz
- **Popular topic suggestions** including:
  - Python Programming
  - Machine Learning
  - Business Analytics
  - World History
  - Mathematics
  - Biology, Chemistry, Physics
  - English Literature
- **Real-time quiz generation** with loading states
- **Progress tracking** with visual progress bars
- **Instant results** with detailed performance analysis

### 📊 **Intelligent Dashboard**
- **Performance analytics** with score visualization
- **AI-powered feedback** based on your quiz results
- **Personalized recommendations** for improvement
- **Detailed answer review** with correct/incorrect highlighting
- **Topic-specific insights** to guide your learning

### 🔐 **Privacy First**
- **Zero data storage** - no user accounts required
- **No tracking** - your learning stays private
- **Secure API key management** using environment variables
- **100% client-side** quiz generation and feedback

### 🎨 **Modern UI/UX**
- **Responsive design** that works on all devices
- **Smooth animations** with Animate.css
- **Gradient aesthetics** with glassmorphism effects
- **Intuitive navigation** with React Router
- **Accessible components** following best practices

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Google Gemini API Key** ([Get one here](https://ai.google.dev/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deepak-chetty/PLC_Ned.git
   cd PLC_Ned
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   > ⚠️ **Important:** Never commit your `.env` file to version control!

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
PLC/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Chatbot/
│   │   │   ├── Chatbot.js
│   │   │   └── Chatbot.css
│   │   ├── Quiz/
│   │   │   ├── Quiz.js
│   │   │   ├── Quiz.css
│   │   │   ├── Dashboard.js
│   │   │   └── Dashboard.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── Topbar.js
│   │   ├── Topbar.css
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   └── NotFound.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── API_KEY_SETUP.md
├── UI_TRANSFORMATION_SUMMARY.md
└── README.md
```

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.0.0** - UI library
- **React Router DOM 7.4.0** - Client-side routing
- **Axios 1.8.4** - HTTP client for API requests
- **Animate.css 4.1.1** - CSS animations
- **AOS 2.3.4** - Scroll animations
- **React Markdown 10.1.0** - Markdown rendering

### **AI/ML**
- **Google Gemini 2.0 Flash** - AI model for chatbot and quiz generation
- **Generative Language API** - Content generation

### **Styling**
- **CSS3** with custom properties
- **Flexbox & Grid** layouts
- **Glassmorphism** effects
- **Gradient animations**

---

## 🎯 Usage Guide

### **Using the Chatbot**

1. Navigate to the **Chatbot** page from the navigation menu
2. Type your question in the input field
3. Press **Enter** or click **Send**
4. Receive instant AI-powered responses
5. Continue the conversation naturally

### **Taking a Quiz**

1. Go to the **Quiz** page
2. Either:
   - Type a custom topic in the input field, OR
   - Click on a **popular topic** chip
3. Click **Generate Quiz**
4. Answer all 10 questions
5. Submit and view your results on the Dashboard

### **Viewing Results**

1. After completing a quiz, you'll be redirected to the **Dashboard**
2. See your **score** and **performance percentage**
3. Review **each question** with correct/incorrect indicators
4. Read **AI-generated feedback** tailored to your performance
5. Get **personalized recommendations** for improvement

---

## 🔧 Configuration

### **Environment Variables**

The application uses environment variables for secure API key management:

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_GEMINI_API_KEY` | Your Google Gemini API key | ✅ Yes |

> 📖 See [API_KEY_SETUP.md](./API_KEY_SETUP.md) for detailed setup instructions

### **API Configuration**

The app uses the following Gemini API endpoint:
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent
```

---

## 📱 Responsive Design

PLC is fully responsive and optimized for:
- 📱 **Mobile devices** (320px and up)
- 📱 **Tablets** (768px and up)
- 💻 **Laptops** (1024px and up)
- 🖥️ **Desktops** (1440px and up)

---

## 🎨 UI Highlights

- **Gradient backgrounds** with animated orbs
- **Glassmorphism cards** with backdrop blur
- **Smooth transitions** and hover effects
- **Loading states** with spinners
- **Progress indicators** for quiz navigation
- **Responsive navigation** with mobile menu
- **Accessible forms** with proper labels
- **Dark mode ready** color scheme

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📝 Available Scripts

In the root directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation!** Ejects from Create React App

---

## 🐛 Troubleshooting

### **Quiz not generating?**
- Check your API key in `.env`
- Ensure you have internet connectivity
- Verify the API key is valid and has quota remaining

### **Chatbot not responding?**
- Check browser console for errors
- Verify API key configuration
- Try refreshing the page

### **Styles not loading?**
- Clear browser cache
- Restart the development server
- Check for CSS import errors

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Deepak Chetty**

- GitHub: [@Deepak-chetty](https://github.com/Deepak-chetty)
- Repository: [PLC_Ned](https://github.com/Deepak-chetty/PLC_Ned)

---

## 🙏 Acknowledgments

- **Google Gemini AI** for powering the intelligent features
- **React Team** for the amazing framework
- **Animate.css** for beautiful animations
- **All contributors** who help improve this project

---

## 🔮 Future Enhancements

- [ ] User authentication and progress tracking
- [ ] Backend API for data persistence
- [ ] More quiz formats (true/false, fill-in-the-blank)
- [ ] Spaced repetition learning system
- [ ] Study groups and collaborative learning
- [ ] Mobile app (React Native)
- [ ] Offline mode support
- [ ] Multi-language support
- [ ] Voice input for chatbot
- [ ] Export quiz results as PDF

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/Deepak-chetty/PLC_Ned?style=social)
![GitHub forks](https://img.shields.io/github/forks/Deepak-chetty/PLC_Ned?style=social)
![GitHub issues](https://img.shields.io/github/issues/Deepak-chetty/PLC_Ned)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ and ☕ by Deepak Chetty**

</div>
