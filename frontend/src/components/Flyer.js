import React from "react";
import Comment from "./Comment";

const Flyer = (props) => {
  if (!props.data.comments) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>{props.data.title}</div>
      <div>{props.data.description}</div>
      <div>Comments will go here</div>
      {props.data.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Flyer;
