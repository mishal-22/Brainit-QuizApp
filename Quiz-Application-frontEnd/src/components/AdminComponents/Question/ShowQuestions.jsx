import React, { useState, useEffect } from "react";

function ShowQuestions() {
  const [questions, setQuestions] = useState([]);
  function fetchAllQuestions() {
    fetch("http://localhost:8080/questions/showQuestions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }
  useEffect(() => {
    fetchAllQuestions();
  }, []);
  function handleDelete(id) {
    fetch(`http://localhost:8080/questions/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      fetchAllQuestions();
    });
  }

  var count = 0;
  var qCount = 0;
  return (
    <div className="all-questions-container">
      {questions.map((question) => (
        <div key={question.id} className="allQuestions">
          <p>
            <span>Question:{(count += 1)} </span>
          </p>
          <p>
            <span>Category: </span>
            {question.category}
          </p>
          <p>
            <span>Difficulty Level :</span> {question.difficultyLevel}
          </p>
          <p className="question">
            <span>Q{(qCount += 1)} : </span> {question.questionTitle}
          </p>
          <p>
            <span>Option 1:</span> {question.option1}
          </p>
          <p>
            <span>Option 2:</span> {question.option2}
          </p>
          <p>
            <span>Option 3:</span> {question.option3}
          </p>
          <p>
            <span>Option 4:</span> {question.option4}
          </p>
          <p >
            <span>Right Answer:</span> <span className="right-answer">{question.rightAnswer}</span>
          </p>
          <div className="action-buttons">
            {/* <button onClick={() => handleUpdate(question.id)}>Update</button> */}
            <button onClick={() => handleDelete(question.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowQuestions;
