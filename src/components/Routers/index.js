import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../Home";
import StudentManager from "../../containers/StudentManager";
import TransferClass from "../../containers/TransferClass";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="student-manager" element={<StudentManager />}/>
          <Route path="transfer-class" element={<TransferClass />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
