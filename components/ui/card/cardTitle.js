import React from "react";

const CardTitle = ({ children, ...props }) => {
  return (
    <div className="card card-tabs" {...props}>
      <div className="card-content">
        <div className="row">
          <div className="col s12 m6">
            <div className="card-title">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
