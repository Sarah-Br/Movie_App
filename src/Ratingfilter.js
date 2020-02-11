import React from "react";
import Rating from "./Rating";

export default function Ratingfilter({ fnRating, rate }) {
  return (
    <div>
      <div style={{padding:'20px'}}>
        <span style={{
            fontFamily: "Fascinate Inline",
            color: "gold",
            textShadow: "5px 0 0 rgb(39, 38, 38)", fontSize:'x-large'}}>Rate</span>
        <span>
          <Rating
            count={rate}
            onChangeRating={newRating => {
              fnRating(newRating);
            }}
          />
          
        </span>
      </div>
    </div>
  );
}
