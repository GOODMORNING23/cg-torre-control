import React from "react";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <strong>
        Copyright © 2022-2023{" "}
        <a href="http://35.225.91.115:8080/srbit/login.jsp">Control de Gestion</a>
        .
      </strong>
      All rights reserved.
      <a
          id="back-to-top"
          href="#"
          className="btn btn-primary back-to-top"
          role="button"
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up" />
        </a>
    </footer>
  );
};
