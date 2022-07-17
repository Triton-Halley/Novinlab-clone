import { SplideSlide } from "@splidejs/react-splide";
import classes from "./Doctor.module.css";
const Doctor = (props) => {
  return (
    <SplideSlide className={classes.slide}>
      <div className={classes.slideBox}>
        <img src={props.image} alt={props.name} />
        <strong>{props.name}</strong>
        <p>{props.job}</p>
      </div>
    </SplideSlide>
  );
};

export default Doctor;
