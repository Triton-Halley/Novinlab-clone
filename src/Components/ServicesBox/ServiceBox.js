import classes from "./ServiceBox.module.css";

const ServiceBox = (props) => {
  return (
    <div className={classes.boxContainer}>
      <div className={classes.boxIcon}>
        <img src={props.imgSource} alt={props.title} />
      </div>
      <strong>{props.title}</strong>
      <p>{props.description}</p>
    </div>
  );
};

export default ServiceBox;
