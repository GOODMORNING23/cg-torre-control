import React from "react";

export const Select = ({children}) => {
  
  return (
      <div className="nav p-1">
        <div className="nav-item dropdown">
          <a
            className="nav-link bg-primary dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Seleccione
          </a>
          <div className="dropdown-menu mt-0">
            {children}
          </div>
        </div>
      </div>
  );
};

