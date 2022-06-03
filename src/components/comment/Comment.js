import { useState } from "react";

import classes from "./Comment.module.css";

const Comment = () => {
  const [inputComment, setInputComment] = useState("");
  const [commentData, setCommentData] = useState();

  const inputCommentHandler = (e) => {
    setInputComment(e.target.value);
  };

  const addCommentHandler = (e) => {
    e.preventDefault();
    setCommentData(inputComment);
    // post comment to DB
  };

  return (
    <>
      <form onSubmit={addCommentHandler}>
        <input
          placeholder="write a comment"
          type="text"
          className={classes.comment}
          onChange={inputCommentHandler}
        ></input>
      </form>
      {commentData && <p className={classes["comment__text"]}>{commentData}</p>}
    </>
  );
};

export default Comment;
