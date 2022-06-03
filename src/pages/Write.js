import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

import classes from "./Write.module.css";
import Home from "./Home";

const Write = () => {
  const [inputText, setInputText] = useState("");
  const [inputImages, setInputImages] = useState([]);
  const [ImagesURL, setImagesURL] = useState([]);
  const [postData, setPostData] = useState();

  useEffect(() => {
    // get the url from images
    if (inputImages.length !== 0) {
      const newImagesUrl = [];
      inputImages.forEach((image) =>
        newImagesUrl.push(URL.createObjectURL(image))
      );
      console.log(newImagesUrl);
      setImagesURL(newImagesUrl);
    }
  }, [inputImages]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputImagesHandler = (e) => {
    console.log(e.target.files);
    setInputImages([...e.target.files]);
  };

  const postHandler = (e) => {
    e.preventDefault();
    setPostData({
      images: [ImagesURL],
      text: inputText,
    });
    // insert post data to the DB
    setInputText("");
    setInputImages("");
  };

  return (
    <>
      <form onSubmit={postHandler} className={classes.form}>
        <div className={classes["form__section"]}>
          <textarea
            className={classes["form__text"]}
            type="text"
            name="post"
            value={inputText}
            placeholder="write here"
            onChange={inputTextHandler}
          ></textarea>
          <label className={classes["custom-file-upload"]}>
            <input
              type="file"
              name="file"
              multiple
              onChange={inputImagesHandler}
            />
            <FontAwesomeIcon icon={faPhotoVideo} />
          </label>
          {ImagesURL.map((imageURL, inx) => (
            <a href={imageURL} rel="noreferrer" target="_blank">
              <img
                key={inx}
                src={imageURL}
                alt="preview"
                className={classes["preview-img"]}
              ></img>
            </a>
          ))}
        </div>

        <button type="submit" className={classes["form__btn"]}>
          Post
        </button>
      </form>
      {/* this one should be remove later */}
      <Home postData={postData} />
    </>
  );
};

export default Write;
