import React from "react";
const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Card = (props) => {
  return (
    <div className="card-container">
      <div style={center}>
        <img className="thumbnail" src={props.imageurl} alt="image" />
      </div>
      <div style={center} className="title">
        <h3>{props.title}</h3>
      </div>
      <div style={center} className="description-container">
        <p className="description">{props.description}</p>
      </div>
      <div style={center} className="author-container">
        <p>
          <b>
            {props.rating}
            {props.author}
          </b>
        </p>
      </div>
    </div>
  );
};

export default Card;