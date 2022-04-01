import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
const App = () => {
  return (
    <div>
      <Menu />
      <div className="container">
        {/* contents */}
        <div className="mainContens">
          <Outlet />
        </div>
        {/* footer */}
        <div></div>
      </div>
    </div>
  );
};
export default App;
