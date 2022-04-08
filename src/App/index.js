import React from "react";
import Routers from "../components/Routers";
import Dashboard from "../components/Dashboard";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Dashboard />
      <Routers />
    </>
  );
};
export default App;
