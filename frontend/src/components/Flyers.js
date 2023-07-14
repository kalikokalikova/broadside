import React from "react";

function Flyers(props) {
  return (
    <div>
      {props.flyers.map((flyer) => {
        return (
          <>
            <div key={flyer.id}></div>
            <h2>{flyer.title}</h2>
            <p>{flyer.description}</p>
          </>
        );
      })}
    </div>
  );
}

export default Flyers;
