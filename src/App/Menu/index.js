import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            STUDY SERVICE
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li className="dropdown">
            <Link className="dropdown-toggle" data-toggle="dropdown" to="/">
              Năm - Lớp - HS <span className="caret"></span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/">Năm Học</Link>
              </li>
              <li>
                <Link to="/">Lớp Học</Link>
              </li>
              <li>
                <Link to="/">Học Sinh</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="student-manager">Quản Lý HS</Link>
          </li>
          <li>
            <Link to="/score-manager">Quản Lý Điểm</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">
              <span className="glyphicon glyphicon-user"></span> Sign Up
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
