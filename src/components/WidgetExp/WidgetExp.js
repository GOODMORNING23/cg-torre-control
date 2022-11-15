import React from "react";

export const WidgetExp = ({ children, nameCard, large, color }) => {
  return (
    <div className={large}>
      <div className={color}>
        <div className="card-header">
          <h3 className="card-title">{nameCard}</h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
        <div className="card-body row">
          {children}
        </div>
      </div>
    </div>
  );
};
