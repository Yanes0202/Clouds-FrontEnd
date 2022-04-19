import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import PostItem from "./PostItem";

export default function PostList(props) {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <div className={classes.divSearch}>
          <div className={classes.actions}>
            <Link to="/post/create">
              <button>Utwórz Post!</button>
            </Link>
          </div>
        </div>
      </li>
      {props.posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))}
    </ul>
  );
}
