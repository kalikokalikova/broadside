import React from "react";

const Flyer = (props) => {
  console.log(props);
  return (
    <div>
      <div>{props.data.title}</div>
      <div>{props.data.description}</div>
      <div>Comments will go here</div>
    </div>
  );
};

export default Flyer;
