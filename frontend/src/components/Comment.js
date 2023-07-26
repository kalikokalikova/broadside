import React from "react";

function Comment(props) {
  console.log(props);
  return <div>{props.comment.body}</div>;
}

export default Comment;
