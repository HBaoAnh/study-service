import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../Home";
import StudentManager from "../../containers/StudentManager";
import ScoreManager from "../../containers/ScoreManager";
import TransferStudentClass from '../../containers/StudentManager/TransferStudentClass';
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="student-manager" element={<StudentManager />} />
          <Route path="score-manager" element={<ScoreManager />} />
          <Route path="transfer-student-class" element={<TransferStudentClass />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
