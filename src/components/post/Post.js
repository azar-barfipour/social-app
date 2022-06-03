import classes from "./Post.module.css";

const Post = ({ postData }) => {
  return (
    <div className={classes.post}>
      <p className={classes["post__text"]}>{postData.text}</p>
      {postData.images.map((image, inx) => (
        <img
          key={inx}
          src={image}
          alt="post"
          className={classes["post__img"]}
        ></img>
      ))}
    </div>
  );
};

export default Post;
