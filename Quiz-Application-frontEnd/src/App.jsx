import "./App.css";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import AdminLayout from "./components/AdminLayout";
import QuestionLayout from "./components/AdminComponents/Question/QuestionLayout";
import ShowQuestions from "./components/AdminComponents/Question/ShowQuestions";
import AddQuestion from "./components/AdminComponents/Question/AddQuestion";
import QuestionsByCategory from "./components/AdminComponents/Question/QuestionsByCategory";
import QuizLayout from "./components/AdminComponents/Quiz/QuizLayout";
import ShowQuiz from "./components/AdminComponents/Quiz/ShowQuiz";
import CreateQuiz from "./components/AdminComponents/Quiz/CreateQuiz";
import ShowQuizQuestions from "./components/AdminComponents/Quiz/ShowQuizQuestions";
import UserLayout from "./components/UserLayout";
import UserQuiz from "./components/UserComponents/Quiz/UserQuiz";
import UserQuizQuestions from "./components/UserComponents/Quiz/UserQuizQuestions";
import Body from "./components/Body";

function App() {
  return (
    <div className="pages">
      <BrowserRouter>
        <Routes className="components">
          <Route element={<Layout />} path="/">
            <Route element={<Body />} index />
            <Route element={<Register />} path="register" />
            <Route element={<Login />} path="login" />
          </Route>
          <Route element={<AdminLayout />} path="/admin">
            <Route element={<QuestionLayout />} path="questions">
              <Route element={<ShowQuestions />} index />
              <Route
                element={<QuestionsByCategory />}
                path="byCategory/:category"
              />
              <Route element={<AddQuestion />} path="add" />
            </Route>
            <Route element={<QuizLayout />} path="quiz">
              <Route element={<ShowQuiz />} index />
              <Route element={<CreateQuiz />} path="create" />
              <Route element={<ShowQuizQuestions />} path=":id" />
            </Route>
          </Route>
          <Route element={<UserLayout />} path="/user/quiz">
            <Route element={<UserQuiz />} index />
            <Route element={<UserQuizQuestions />} path=":id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
