import classes from "./ShowDetail.module.css";
const ShowDetail = (props) => {
  return (
    <>
      <div className={classes.detailContainer}>
        <img src={props.detail.imgSource} alt={props.title} />
        <strong>{props.detail.title}</strong>
        <p>{props.detail.description}</p>
      </div>
    </>
  );
};
export default ShowDetail;
