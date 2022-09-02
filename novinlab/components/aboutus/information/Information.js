import Image from "next/image";
import IllusImage from "../../../assets/Illustrations/Medical-care-pana.png";
import classes from "./Information.module.css";
const Information = () => {
  return (
    <section className={classes.aboutUs}>
      <div className={classes.AboutUSContainer}>
        <div className={classes.AboutUsContent}>
          <h1>تجربه برترین خدمات با کلینیک ما</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد.
          </p>
        </div>
        <div className={classes.aboutUsImage}>
          <Image
            className={classes.Image}
            src={IllusImage}
            alt="Illustration-About-us"
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </section>
  );
};

export default Information;
