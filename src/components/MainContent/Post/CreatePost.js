import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./CreatePost.module.css";

export default function CreatePost(){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();
    const history = useHistory();
    function submitHandler(event) {
      event.preventDefault();

      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      const postData = {
        title: enteredTitle,
        image: enteredImage,
        description: enteredDescription,
      };

      fetch("http://localhost:8080/api/post/create", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(()=>{
          history.replace('/')
      });
    }
    
return (
  <div className={classes.card}>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id="image" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </div>
);
}