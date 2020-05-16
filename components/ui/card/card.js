import React from "react";

const Card = ({ children, ...props }) => {
  return (
    <div className="card" {...props}>
      <div className="card-content pb-0">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default Card;
