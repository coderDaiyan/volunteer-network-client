import React from "react";
import "./EventCard.css";

const EventCard = (props) => {
  const { img, description, eventName } = props.event;
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div style={{ borderRadius: "10px" }} className="card mt-5 mb-5">
        <img className="card-img-top w-100" src={img} alt=""></img>
        <div className="card-body">
          <h5 className="card-title">{eventName}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger">Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
