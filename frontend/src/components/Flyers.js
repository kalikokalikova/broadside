import React from "react";

function Flyers(props) {
  return (
    <div>
      {props.flyers.map((flyer) => {
        return (
          <>
            <div key={flyer.id}></div>
            <h2>
              {flyer.id} {flyer.attributes.title}
            </h2>
            <p>{flyer.attributes.description}</p>
          </>
        );
      })}
    </div>
  );
}

export default Flyers;
