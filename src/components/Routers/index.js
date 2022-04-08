import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import StudentManager from "../../containers/StudentManager";
import ScoreManager from "../../containers/ScoreManager";
import InternalManager from "../../containers/InternalManager";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="student-manager" element={<StudentManager />} />
      <Route path="score-manager" element={<ScoreManager />} />
      <Route path="internal-manager" element={<InternalManager />} />
    </Routes>
  );
};
export default Routers;
