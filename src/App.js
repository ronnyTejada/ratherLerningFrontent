import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import AddCourse from "./pages/addCourse/addCourse";
import CourseDetails from "./pages/courseDetails/courseDetails";
import AddStudents from "./pages/addStudent/addStudent";
import { useContext } from "react";
import MyContext from "./context/Context";
import StudentDetails from "./pages/studentDetails/studenDetails";

const Privated = ({ logged, to, children }) => {
  if (!logged) {
    return <Navigate to={`/${to}`} replace />;
  } else {
    return children;
  }
};

function App() {
  const { logged } = useContext(MyContext);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Privated logged={!logged} to="dashboard">
              <Login />
            </Privated>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Privated logged={logged} to="">
              <Dashboard />
            </Privated>
          }
        />
        <Route
          path="/add-course"
          element={
            <Privated logged={logged} to="">
              <AddCourse />
            </Privated>
          }
        />
         <Route
          path="/edit-course/:id"
          element={
            <Privated logged={logged} to="">
              <AddCourse />
            </Privated>
          }
        />
        <Route
          path="/add-student/:id"
          element={
            <Privated logged={logged} to="">
              <AddStudents />
            </Privated>
          }
        />

        <Route
          path="/course/:id"
          element={
            <Privated logged={logged} to="">
              <CourseDetails />
            </Privated>
          }
        />

        <Route
          path="/student/:id"
          element={
            <Privated logged={logged} to="">
              <StudentDetails />
            </Privated>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
