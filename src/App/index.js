import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
const App = () => {
  return (
    <div>
      <Menu />
      <div className="container">
        {/* contents */}
        <Outlet />
      </div>
      {/* footer */}
      <div style={{ height: 100 }}></div>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "grey",
            height: 50,
            textAlign: "center",
          }}
        >
          Footer contents
        </div>
        <div
          style={{
            backgroundColor: "darkgrey",
            textAlign: "center",
            padding: "5px",
          }}
        >
          @copyright
        </div>
      </div>
    </div>
  );
};
export default App;
