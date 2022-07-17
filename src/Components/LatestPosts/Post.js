import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.image}>
        <img src={props.imageSource} alt={props.title} />
      </div>
      <div className={classes.content}>
        <strong>{props.title}</strong>
        <p>{props.description}</p>
        <a href={props.link}>بیشتر بدانید</a>
      </div>
    </div>
  );
};
export default Post;
