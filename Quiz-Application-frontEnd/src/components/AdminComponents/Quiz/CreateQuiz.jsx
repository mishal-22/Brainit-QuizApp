import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuiz() {
  const [quizDetails, setQuizDetails] = useState({
    category: "",
    numQ: "",
    title: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const { category, numQ, title } = quizDetails;
      const url = `http://localhost:8080/quiz/create?category=${category}&numQ=${numQ}&title=${title}`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify(quizDetails),
      })
        .then((res) => res.text())
        .then((data) => {
          console.log("Quiz ceated successfully", data);
          setQuizDetails({
            category: "",
            numQ: 0,
            title: "",
          });
          navigate("..");
        });
    } catch (error) {
      console.error("Error creating quiz", error);
    }
  };
  return (
    <div className="create-quiz">
      <form onSubmit={handleSubmit}>
        <label>
          <span> Category:</span>
          <input
            type="text"
            name="category"
            value={quizDetails.category}
            onChange={handleChange}
            placeholder="category. . ."
            required
          />
        </label>
        <label>
          <span>Title:</span>
          <input
            type="text"
            name="title"
            value={quizDetails.title}
            onChange={handleChange}
            placeholder="title. . ."
            required
          />
        </label>
        <label>
          <span>Number of Questions</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="numQ"
            value={quizDetails.numQ}
            onChange={handleChange}
            placeholder="no.of questions. . ."
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateQuiz;
