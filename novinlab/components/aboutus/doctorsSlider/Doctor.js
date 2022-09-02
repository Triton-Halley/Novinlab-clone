import Image from "next/image";
import classes from "./Doctor.module.css";
const Doctor = (props) => {
  return (
    <div className={classes.slide}>
      <div className={classes.slideBox}>
        <Image
          className={classes.docImage}
          src={props.image}
          alt={props.name}
          width={600}
          height={600}
        />
        <strong>{props.name}</strong>
        <p>{props.job}</p>
      </div>
    </div>
  );
};

export default Doctor;
