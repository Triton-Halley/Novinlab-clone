import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";
import "@splidejs/react-splide/css";
import slideImage1 from "../../assets/banner.jpg";
import slideImage2 from "../../assets/home4-1.jpg";
import location from "../../assets/icons/location.png";
import arrowLeft from "../../assets/icons/arrow-left.png";
import classes from "./HeroSlider.module.css";
const HeroSlider = () => {
  const sliderSplide = useRef();
  const splide = sliderSplide.current;

  // const splide = new Splide(".splide");
  // console.log(splide);

  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        autoplay: false,
        lazyLoad1: true,
      }}
      ref={sliderSplide}
      aria-label="My Favorite Images"
    >
      <SplideSlide className={classes.slide}>
        <img src={slideImage1} alt="Image 1" />
        <div className={classes["content-slide1"]}>
          <p className={classes.title}>راحتی را </p>
          <p className={classes.title}>با آزمایشگاه نوین تجربه کنید</p>
          <div className={classes.address}>
            <span>
              <img src={location} alt="location" />
            </span>
            <p>
              آدرس: پاکدشت،خیابان شهید مطهری،نرسیده به میدان آزادگان (شعبه)،کوچه
              صاحب الزمان،پ ۵
            </p>
          </div>
          <div className={classes.btn}>
            <a href="http://93.118.149.177:8086/Login">
              نوبت دهی و جواب دهی آنلاین
            </a>
            <span>
              <img src={arrowLeft} alt="left arrow" />
            </span>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={slideImage2} alt="Image 2" />
        <div className={classes["content-slide1"]}>
          <p className={classes.title}>آرامش را </p>
          <p className={classes.title}>با آزمایشگاه نوین تجربه کنید </p>
          <div className={classes.address}>
            <span>
              <img src={location} alt="location" />
            </span>
            <p>
              آدرس: پاکدشت،خیابان شهید مطهری،نرسیده به میدان آزادگان (شعبه)،کوچه
              صاحب الزمان،پ ۵
            </p>
          </div>
          <div className={classes.btn}>
            <a href="https://novinlab.net/contact2-2/">تماس با ما</a>
            <span>
              <img src={arrowLeft} alt="left arrow" />
            </span>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default HeroSlider;
