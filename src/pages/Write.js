import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
// import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

import classes from "./Write.module.css";
import Home from "./Home";

const Write = () => {
  const [inputText, setInputText] = useState("");
  const [inputImages, setInputImages] = useState([]);
  const [ImagesURL, setImagesURL] = useState();
  const [postData, setPostData] = useState();
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    // get the url from images
    if (inputImages.length !== 0) {
      const newImagesUrl = [];
      inputImages.forEach((image) =>
        newImagesUrl.push(URL.createObjectURL(image))
      );
      setImagesURL(newImagesUrl);
    }
  }, [inputImages]);

  const inputTextHandler = (e) => {
    setIsEmpty(false);
    setInputText(e.target.value);
  };

  const inputImagesHandler = (e) => {
    setIsEmpty(false);
    setInputImages([...e.target.files]);
  };

  const postHandler = (e) => {
    e.preventDefault();
    if (inputText === "" && inputImages.length === 0) {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    setPostData([[ImagesURL], inputText]);
    // insert post data to the DB
    // ....
    setInputText("");
    setInputImages("");
    setImagesURL();
  };

  const removePreviewHandler = (e) => {
    e.preventDefault();
    setImagesURL();
  };

  const locationHandler = (e) => {
    e.preventDefault();
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
          {/* link to location page and search and submit the location 
          then redirect to the write page and have a preview of the location and post it 
          then in the posts page(Home) have a link of location to the google map
          */}
          {/* <Link to="/location">
            <FontAwesomeIcon icon={faLocationPin} />
          </Link> */}
          {ImagesURL ? (
            ImagesURL.map((imageURL, inx) => (
              <a
                key={inx}
                href={imageURL}
                rel="noreferrer"
                target="_blank"
                className={classes["image__link"]}
              >
                <img
                  src={imageURL}
                  alt="preview"
                  className={classes["preview-img"]}
                ></img>
                <FontAwesomeIcon
                  icon={faClose}
                  className={classes["remove__btn"]}
                  onClick={removePreviewHandler}
                />
              </a>
            ))
          ) : (
            <div></div>
          )}
        </div>
        {isEmpty && (
          <p className={classes["empty-validation"]}>
            <small>Please write or upload a photo</small>
          </p>
        )}
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
