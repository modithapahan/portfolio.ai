import React from "react";
import "../App.css";

function QuestionsList({ questions, onQuestionClick }) {
  return (
    <div className="questions-list">
      <h2>Frequently Asked Questions:</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <button onClick={() => onQuestionClick(question)}>
              {question.question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionsList;
