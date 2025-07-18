import React from "react";
import "../App.css";

function Answer({ answer }) {
  return (
    <div className="answer">
      <h3>Answer:</h3>
      <p>{answer}</p>
    </div>
  );
}

export default Answer;
