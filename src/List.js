import React from "react";
import Moviecard from "./movieCard";
import TheModal from "./Modal";
import HOC from './HOC'

const List = props => {
  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      > <br/>
        {props.Movie.map(el => (
          <Moviecard key={el.id} elt={el} /> 
        ))} 
        <div
          
          style={{
            justifyContent:'center',
            
            padding: "78px",
            fontSize: "4em"
          }}
        >
          <TheModal addNewmovie={props.add} />
        </div>
      </div>
    </div>
  );
};
export default HOC(List);
