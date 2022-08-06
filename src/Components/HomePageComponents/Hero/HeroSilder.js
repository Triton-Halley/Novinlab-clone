// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";

import slideImage1 from "../../../assets/Illustrations/Researchers-bro.png";
import slideImage2 from "../../../assets/Illustrations/Hospital wheelchair-bro.png";
import location from "../../../assets/icons/location.png";
import arrowLeft from "../../../assets/icons/arrow-left.png";
import classes from "./HeroSlider.module.css";
const HeroSlider = () => {
  return (
    <Swiper
      className={classes.sliderContainer}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide className={classes.slide}>
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
      </SwiperSlide>

      <SwiperSlide className={classes.slide}>
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
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
