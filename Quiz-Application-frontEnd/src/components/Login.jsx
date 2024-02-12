import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:8080/quizApp/login?email=${email}&password=${password}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.text())
      .then((data) => {
        if (data === "admin") {
          // alert("Admin login successful");
          navigate("/admin/questions");

          setEmail(""), setPassword("");
        } else if (data === "student") {
          // alert("Student login successful");
          navigate("/user/quiz");
        } else {
          alert("Invalid email or password");
          setEmail(""), setPassword("");
        }
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label> Email</label>{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <br />
        <label> Password</label>{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <br />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}

export default Login;
