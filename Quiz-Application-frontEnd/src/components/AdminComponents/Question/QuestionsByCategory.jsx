import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function QuestionsByCategory() {
  const [categoryQuestions, setCategoryQuestions] = useState([]);
  const param = useParams();
  function fetchByCategory() {
    fetch(`http://localhost:8080/questions/showQuestions/${param.category}`)
      .then((res) => res.json())
      .then((data) => setCategoryQuestions(data));
  }
  useEffect(() => {
    fetchByCategory();
  }, [param.category]);
  if (!categoryQuestions) {
    return <h1>Loading.....</h1>;
  }
  function handleDelete(id) {
    fetch(`http://localhost:8080/questions/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      fetchByCategory();
    });
  }
  var count = 0;
  return (
    <div>
      <div className="all-questions-container">
        {categoryQuestions.map((question) => (
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
              <span>?</span> {question.questionTitle}
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
            <p>
              <span>Right Answer:</span>{" "}
              <span className="right-answer"> {question.rightAnswer}</span>
            </p>
            <div className="action-buttons">
              {/* <button onClick={() => handleUpdate(question.id)}>Update</button> */}
              <button onClick={() => handleDelete(question.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionsByCategory;
