import React from "react";



const Rating = ({count, onChangeRating}) =>  {
       let starsHtml = [];
for(let i = 0; i < 5; i++) {
    if(i < count) {
        starsHtml.push(<span onClick={()=>onChangeRating(i+1)} key={Math.random()}>★</span>)
    }
    else {
        starsHtml.push(<span onClick={()=>onChangeRating(i+1)} key={Math.random()}>☆</span>)
    }
}
return (
    <div style={{fontSize:'x-large', color:'gold',textShadow:'5px 0 0 rgb(39, 38, 38)'}}>{starsHtml}</div>
)
}

export default Rating;