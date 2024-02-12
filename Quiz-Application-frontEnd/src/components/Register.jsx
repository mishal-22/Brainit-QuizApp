import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [gender, SetGender] = useState("");
  const role = "student";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { username, email, password, gender, role };
    fetch("http://localhost:8080/quizApp/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data == "User already Exist") {
          alert("Email already Registered ");
          SetUsername(" "), SetEmail(""), SetPassword(""), SetGender("");
          navigate("/login");
          return;
        } else {
          console.log("User registered Successfully", data);
          alert("Registration successfully completed");
          SetUsername(" "), SetEmail(""), SetPassword(""), SetGender("");
          navigate("/login");
        }
      });
  };
  return (
    <div className="user-registration">
      <form onSubmit={handleSubmit}>
        <label>Username : </label>
        <input
          type="text"
          name="usename"
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
          required
        />{" "}
        <br />
        <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          required
        />{" "}
        <br />
        <br />
        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          required
        />{" "}
        <br />
        <br />
        <label>
          Gender : {"      "}
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={(e) => SetGender(e.target.value)}
            checked={gender === "male"}
            required
          />
          {"   "}
          Male{"   "}
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={(e) => SetGender(e.target.value)}
            checked={gender === "female"}
            required
          />{" "}
          Female
        </label>
        <br />
        <br />
        <label>Role : </label>
        <select>
          <option value={"student"} name="role">
            Student
          </option>
        </select>
        <br />
        <input type="submit" value="REGISTER" />
      </form>
    </div>
  );
}

export default Register;
