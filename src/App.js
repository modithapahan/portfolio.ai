import { useState } from "react";
import "./App.css";
import Answer from "./components/Answer";
import AnimatedFace from "./components/AnimatedFace";
import { motion } from "framer-motion";
import QuestionsList from "./components/QuestionsList";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import BackgroundEffect from "./components/BackgroundEffect";

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is your favorite ML project?",
      answer:
        "My favorite project is a deep learning model for image classification using CNNs. It was a great learning experience working with TensorFlow.",
    },
    {
      id: 2,
      question: "What tools do you use for Machine Learning?",
      answer:
        "I mostly work with Python, using libraries like TensorFlow, Keras, and PyTorch. I also work with Scikit-learn and Pandas for data processing.",
    },
    {
      id: 3,
      question: "Can you explain a bit about your research in AI?",
      answer:
        "My research focuses on reinforcement learning and its applications in robotics. I have built some models for autonomous navigation.",
    },
  ];

  return (
    <div className="App">
      <BackgroundEffect />

      <Header />
      <motion.div
        className="intro-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="cursor typewriter-animation">
          Hey there, I'm Moditha👋
        </p>
        <h1 className="main-title">AI Portfolio</h1>
      </motion.div>

      <AnimatedFace />

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <QuestionsList
          questions={questions}
          onQuestionClick={setSelectedQuestion}
        />
      </motion.div>
      {selectedQuestion && <Answer answer={selectedQuestion.answer} />} */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <NavMenu />
      </motion.div>
    </div>
  );
}

export default App;
