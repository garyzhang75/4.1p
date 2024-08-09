import React from "react";
const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const tutorial = (props) => {
  return (
    <div className="card-container">
      <div style={center}>
        <img className="thumbnail" src={props.imageurl1} alt="image" />
      </div>
      <div style={center} className="title">
        <h3>{props.title1}</h3>
      </div>
      <div style={center} className="description-container">
        <p className="description">{props.description1}</p>
      </div>
      
    </div>
  );
};

export default tutorial;