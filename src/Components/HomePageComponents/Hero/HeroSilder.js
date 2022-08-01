import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useRef } from "react";
import "@splidejs/splide/css";
import slideImage1 from "../../../assets/Illustrations/Researchers-bro.png";
import slideImage2 from "../../../assets/Illustrations/Hospital wheelchair-bro.png";
import location from "../../../assets/icons/location.png";
import arrowLeft from "../../../assets/icons/arrow-left.png";
import classes from "./HeroSlider.module.css";
const HeroSlider = () => {
  const sliderSplide = useRef();

  // const splide = new Splide(".splide");
  // console.log(splide);

  return (
    <Splide
      className={classes.sliderContainer}
      options={{
        rewind: true,
        gap: "1rem",
        autoplay: true,
        lazyLoad1: true,
        // autoWidth: true,
        arrows: false,
        pagination: false,
        // autoHeight: true,
      }}
      ref={sliderSplide}
      aria-label="My Favorite Images"
    >
      <SplideSlide className={classes.slide}>
        <div className={classes.sliderItemContainer}>
          <div className={classes.sliderImageContainer}>
            <img src={slideImage1} alt="Slider-1" />
          </div>
          <div className={classes.SliderContentContainer}>
            <div className={classes["content-slide1"]}>
              <p className={classes.title}>راحتی را </p>
              <p className={classes.title}>با آزمایشگاه نوین تجربه کنید</p>
              <div className={classes.address}>
                <span>
                  <img src={location} alt="location" />
                </span>
                <p>
                  آدرس: پاکدشت،خیابان شهید مطهری،نرسیده به میدان آزادگان
                  (شعبه)،کوچه صاحب الزمان،پ ۵
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
          </div>
        </div>
      </SplideSlide>

      <SplideSlide className={classes.slide}>
        <div className={classes.sliderItemContainer}>
          <div className={classes.sliderImageContainer}>
            <img src={slideImage2} alt="Slider-2" />
          </div>
          <div className={classes.SliderContentContainer}>
            <div className={classes["content-slide1"]}>
              <p className={classes.title}>آرامش را </p>
              <p className={classes.title}>با آزمایشگاه نوین تجربه کنید </p>
              <div className={classes.address}>
                <span>
                  <img src={location} alt="location" />
                </span>
                <p>
                  آدرس: پاکدشت،خیابان شهید مطهری،نرسیده به میدان آزادگان
                  (شعبه)،کوچه صاحب الزمان،پ ۵
                </p>
              </div>
              <div className={classes.btn}>
                <a href="https://novinlab.net/contact2-2/">تماس با ما</a>
                <span>
                  <img src={arrowLeft} alt="left arrow" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default HeroSlider;
