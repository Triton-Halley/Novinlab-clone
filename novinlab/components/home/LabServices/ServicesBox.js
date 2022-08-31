import classes from "./ServicesBox.module.css";
import Link from "next/link";
import Image from "next/image";

const ServiceBox = (props) => {
  return (
    <div className={classes.boxContainer}>
      <div className={classes.boxIcon}>
        <Image src={props.imgSource} alt={props.title} width={64} height={64} />
      </div>
      <strong>{props.title}</strong>
      <p>{props.description}</p>
      <div className={classes.btnContainer}>
        <div className={classes.btn}>
          <Link href={`/${props.id}`}>بیشتر بدانید</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
