import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card({ firstName, lastName, id, image, contactNumber, email, dob, handleBtnClick }) {
  return (
    // <div>
    //   <CardHeading name={name} />
    //   <CardImg image={image} />
    //   <CardBody id={id} contactNumber={contactNumber} email={email} dob={dob} />
    //   {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    //   <CardBtn
    //     style={{ opacity: image ? 1 : 0 }}
    //     onClick={handleBtnClick}
    //     data-value="back"
    //   />
    //   <CardBtn
    //     style={{ opacity: image ? 1 : 0 }}
    //     onClick={handleBtnClick}
    //     data-value="next"
    //   />
    // </div>

  <div classname="card" style={{width: "18rem"}}>
      <div classname="card-body">
        <h5 classname="card-title">{firstName} {lastName}</h5>
        <img src={image} alt={firstName}></img>
        <p classname="card-text">{id}</p>
        <p classname="card-text">{contactNumber}</p>
        <p classname="card-text">{email}</p>
        <p classname="card-text">{dob}</p>
      </div>
      </div>
  );
}

export default Card;
