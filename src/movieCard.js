import React from "react";
import Rating from "./Rating";
const movieCard = props => {
  return (
    <div style={{ opacity: "0.85", filter: "alpha(opacity=10)" }}>
      <div
        className="rating"
        style={{ display: "flex", padding: "10px", justifyContent: "center" }}
      >
        <span
          style={{
            fontSize: "x-large",
            color: "gold",
            textShadow: "5px 0 0 rgb(39, 38, 38)"
          }}
        >
          <Rating count={props.elt.isRating} />
        </span>
      </div>

      <img
        style={{
          width: "32em",
          height: "22em",
          margin: "10px",
          borderRadius: "5px"
        }}
        src={props.elt.srcImage}
        className="card-img-top "
        alt={props.elt.altImage}
      />
      <div className="card-body">
        <h5
          style={{
            fontFamily: "Fascinate Inline",
            color: "rgb(106, 251, 244)",
            textShadow: "5px 0 0 rgb(39, 38, 38)"
          }}
        >
          {props.elt.title} <br /> {props.elt.year}
        </h5>
      </div>
    </div>
  );
};
export default movieCard;
