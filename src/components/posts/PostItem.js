import classes from "./Post.module.css";
import Post from "./Post"

export default function PostItem(props){

    return (
      <li className={classes.item}>
        <Post>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button>Polub to</button>
          </div>
        </Post>
      </li>
    );
}