import classes from "./ServiceBox.module.css";
import { Link } from "react-router-dom";

const ServiceBox = (props) => {
  return (
    <div className={classes.boxContainer}>
      <div className={classes.boxIcon}>
        <img src={props.imgSource} alt={props.title} />
      </div>
      <strong>{props.title}</strong>
      <p>{props.description}</p>
      <div className={classes.btnContainer}>
        <div className={classes.btn}>
          <Link to={`/${props.id}`}>بیشتر بدانید</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
