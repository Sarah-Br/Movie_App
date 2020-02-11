import React from "react";

export default function Filmfilter({ value, Changetitle = () => {} }) {
  return (
    <div>
      <div className="name-filter">
        <input
          style={{
            fontSize: "large",
            fontFamily: "Sofia",
            opacity: "0.3",
            border: "2px solid lightblue",
            padding: "10px",
            width: "90%",
            marginTop: "80px",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
          type="text"
          value={value}
          onChange={e => {
            Changetitle(e.target.value);
          }}
        />
        <input
          style={{
            padding: "7px 10px  ",
            borderRadius: "6px",
            backgroundColor: "lightblue",
            fontFamily: "Sofia",
            fontSize: "18px",
            color: "blue"
          }}
          type="button"
          value="Search"
        />
      </div>
    </div>
  );
}
