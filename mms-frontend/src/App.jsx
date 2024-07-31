import "./App.css";
import Navigationbar from "./navigationbar.jsx";
import ListTeacherComponents from "./Components/ListTeacherComponents.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListStudentComponents from "./Components/ListStudentComponents.jsx";
import TeacherComponents from "./Components/TeacherComponents.jsx";
import StudentComponents from "./Components/StudentComponents.jsx";
import DashboardComponent from "./Components/DashboardComponent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/home" element={<DashboardComponent />}></Route>
          <Route path="/teacher" element={<ListTeacherComponents />}></Route>
          <Route path="/student" element={<ListStudentComponents />}></Route>
          <Route path="/add-teacher" element={<TeacherComponents />}></Route>
          <Route path="/add-student" element={<StudentComponents />}></Route>
          <Route
            path="/edit-teacher/:id"
            element={<TeacherComponents />}
          ></Route>
          <Route
            path="/edit-student/:id"
            element={<StudentComponents />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
