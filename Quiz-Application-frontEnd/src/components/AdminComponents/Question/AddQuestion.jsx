import React from "react";
import { useState } from "react";

function AddQuestion() {
  const [formData, setFormData] = useState({
    category: "",
    difficultyLevel: "",
    questionTitle: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    rightAnswer: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/questions/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("Question added successfully", data);
        alert("Question added successfully");
        setFormData({
          category: "",
          difficultyLevel: "",
          questionTitle: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          rightAnswer: "",
        });
      });
  };
  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <label>
          <span> Category:</span>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="category. . ."
            required
          />
        </label>
        <label>
          <span> Difficulty:</span>
          <input
            type="text"
            name="difficultyLevel"
            value={formData.difficultyLevel}
            onChange={handleChange}
            placeholder="difficuly level. . ."
            required
          />
        </label>
        <label>
          <span> Question:</span>
          <input
            type="text"
            name="questionTitle"
            value={formData.questionTitle}
            onChange={handleChange}
            placeholder="question. . ."
            required
          />
        </label>
        <label>
          <span> Option 1:</span>
          <input
            type="text"
            name="option1"
            value={formData.option1}
            onChange={handleChange}
            placeholder="option 1. . ."
            required
          />
        </label>
        <label>
          <span> Option 2:</span>
          <input
            type="text"
            name="option2"
            value={formData.option2}
            onChange={handleChange}
            placeholder="option 2. . ."
            required
          />
        </label>
        <label>
          <span> Option 3:</span>
          <input
            type="text"
            name="option3"
            value={formData.option3}
            onChange={handleChange}
            placeholder="option 3. . ."
            required
          />
        </label>
        <label>
          <span> Option 4:</span>
          <input
            type="text"
            name="option4"
            value={formData.option4}
            onChange={handleChange}
            placeholder="option 4. . ."
            required
          />
        </label>
        <label>
          <span> Answer :</span>
          <input
            type="text"
            name="rightAnswer"
            value={formData.rightAnswer}
            onChange={handleChange}
            placeholder="answer. . ."
            required
          />
        </label>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
}

export default AddQuestion;
