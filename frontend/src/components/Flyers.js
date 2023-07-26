import React from "react";
import { Link } from "react-router-dom";

function Flyers(props) {
  return (
    <div>
      {props.flyers.map((flyer) => {
        return (
          <>
            <div key={flyer.id}></div>
            <Link to={`/flyers/${flyer.id}`}>
              <h2>
                {flyer.id} {flyer.title}
              </h2>
            </Link>
            <p>{flyer.description}</p>
          </>
        );
      })}
    </div>
  );
}

export default Flyers;
