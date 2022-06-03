import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import classes from "./Post.module.css";
import Comment from "../comment/Comment";

const Post = ({ postData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState(false);

  const likeHandler = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    // set it into DB
  };

  const commentHandler = (e) => {
    e.preventDefault();
    setComment(!comment);
  };

  const removePostHandler = (e) => {
    e.preventDefault();
    // setPostData.postData.filter(post => post.postId !== id)
  };

  return (
    <div className={classes.post}>
      <p className={classes["post__text"]}>{postData[1]}</p>
      {postData[0][0] !== undefined ? (
        postData[0].map((image, inx) => (
          <img
            key={inx}
            src={image}
            alt="post"
            className={classes["post__img"]}
          ></img>
        ))
      ) : (
        <div></div>
      )}
      <div className={classes["reacts-btn"]}>
        <button type="button" className={classes["btn"]} onClick={likeHandler}>
          <div className={classes["btn__wrapper"]}>
            <FontAwesomeIcon
              icon={faHeart}
              className={isLiked ? classes["btn__isLiked"] : ""}
            />
            <p className={classes["btn__text"]}>Like</p>
          </div>
        </button>
        <button
          type="button"
          className={classes["btn"]}
          onClick={commentHandler}
        >
          <div className={classes["btn__wrapper"]}>
            <FontAwesomeIcon icon={faComment} />
            <p className={classes["btn__text"]}>Comment</p>
          </div>
        </button>
        <button
          type="button"
          className={classes["btn"]}
          onClick={removePostHandler}
        >
          <div className={classes["btn__wrapper"]}>
            <FontAwesomeIcon icon={faTrash} />
            <p className={classes["btn__text"]}>Remove</p>
          </div>
        </button>
      </div>
      {comment && <Comment />}
    </div>
  );
};

export default Post;
