import React from "react";
import "./Card.css";

const Card = ({ employeeInfo }) => {
  return (
    <div className={"employee-card-container"}>
      <div className={"photo-container"}>
        <img src={employeeInfo.avatar} alt={"avatar"} />
      </div>
      <div className={"card-info-container"}>
        <span>
          {employeeInfo.firstName} {employeeInfo.lastName}
        </span>
        <p>{employeeInfo.bio}</p>
      </div>
    </div>
  );
};

export default Card;
