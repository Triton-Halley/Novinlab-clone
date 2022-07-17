import IllusImage from "../../../assets/Illustrations/Medical care-pana.png";
import classes from "./AboutusSection.module.css";
const AboutUsSection = () => {
  return (
    <section className={classes.aboutUs}>
      <div className={classes.AboutUSContainer}>
        <div className={classes.AboutUsContent}>
          <h1>تجربه برترین خدماتبا کلینیک ما</h1>
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
          <img src={IllusImage} alt="Illustration-About-us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
