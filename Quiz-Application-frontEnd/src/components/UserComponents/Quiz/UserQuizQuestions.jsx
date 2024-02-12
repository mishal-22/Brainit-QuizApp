import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserQuizQuestions() {
  const [quiz, setQuiz] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedFlags, setSelectedFlags] = useState({});
  const [score, setScore] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  function showQuiz() {
    fetch(`http://localhost:8080/quiz/get/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setQuiz(data));
  }
  let count = 0;

  useEffect(() => {
    showQuiz();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const responses = Object.entries(selectedOptions).map(
      ([questionId, option]) => ({
        id: parseInt(questionId),
        response: option,
      })
    );

    fetch(`http://localhost:8080/quiz/submit/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responses),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Quiz submitted successfully. Result:", data);
        // alert(`Your Score is : ${data} `);
        setScore(data);
      })
      .catch((error) => {
        console.error("Error submitting quiz:", error);
      });
  };

  const handleChange = (questionId, option) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: option });
    setSelectedFlags({ ...selectedFlags, [questionId]: true });
  };
  const handleClear = (questionId) => {
    const updatedOptions = { ...selectedOptions };
    delete updatedOptions[questionId];
    setSelectedOptions(updatedOptions);
    setSelectedFlags({ ...selectedFlags, [questionId]: false });
  };

  let pass;
  return (
    <div className="custom-quiz-container">
      <form onSubmit={handleSubmit}>
        {quiz.map((q) => (
          <div key={q.id} className="question-container">
            <h1>
              Q{(count += 1)} :{q.questionTitle}
            </h1>
            <input
              type="radio"
              name={`question-${q.id}`}
              value={q.option1}
              onChange={() => handleChange(q.id, q.option1)}
              checked={selectedOptions[q.id] === q.option1}
            />{" "}
            <label>{q.option1}</label> <br />
            <br />
            <input
              type="radio"
              name={`question-${q.id}`}
              value={q.option2}
              onChange={() => handleChange(q.id, q.option2)}
              checked={selectedOptions[q.id] === q.option2}
            />{" "}
            <label>{q.option2}</label>
            <br />
            <br />
            <input
              type="radio"
              name={`question-${q.id}`}
              value={q.option3}
              onChange={() => handleChange(q.id, q.option3)}
              checked={selectedOptions[q.id] === q.option3}
            />{" "}
            <label>{q.option3}</label>
            <br />
            <br />
            <input
              type="radio"
              name={`question-${q.id}`}
              value={q.option4}
              onChange={() => handleChange(q.id, q.option4)}
              checked={selectedOptions[q.id] === q.option4}
            />{" "}
            <label>{q.option4}</label>
            <br />
            <br />
            {selectedFlags[q.id] && (
              <button
                className="clear-button"
                type="button"
                onClick={() => handleClear(q.id)}
              >
                Clear
              </button>
            )}
          </div>
        ))}
        <input type="submit" value="SUBMIT" />
      </form>
      {/* {(pass = score / count)} */}
      {score !== null && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              {(pass = score / count) >= 0.5
                ? `🎉 Congratulations❕ You passed the quiz 🎉`
                : `Sorry, you failed the quiz 😢 , Please try again❗`}
            </h2>
            <br />
            <h2 className="score">{`Score : ${score}`}</h2>
            <br />
            <br />
            <button onClick={() => navigate("..")}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserQuizQuestions;
