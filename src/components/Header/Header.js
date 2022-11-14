/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../Images/Avatar";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </div>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a
              href="http://35.225.91.115:8080/srbit/login.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              SerB-it
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <div onClick={handleLogout} className="nav-link">
              Logout
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item">
            <div role="button">
              <a
                href="http://35.225.91.115:8080/srbit/login.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <img 
                  src="serbit.jpeg" 
                  alt="Logo"
                  width="40px"
                  height="70px"
                />
              </a>
            </div>
          </li> */}
          <li className="nav-item">
            <div className="nav-link" data-widget="fullscreen" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
