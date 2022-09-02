import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import classes from "./DoctorsSlider.module.css";
import doctor1 from "../../../assets/Doctors/doc_1.jpg";
import doctor2 from "../../../assets/Doctors/doc_2.jpg";
import doctor3 from "../../../assets/Doctors/doc_3.jpg";
import doctor4 from "../../../assets/Doctors/doc_4.jpg";
import doctor6 from "../../../assets/Doctors/doc_6.jpg";
import doctor7 from "../../../assets/Doctors/doc_7.jpg";
import doctor8 from "../../../assets/Doctors/doc_8.jpg";
import doctor9 from "../../../assets/Doctors/doc_9.jpg";
import Doctor from "./Doctor";

const DUMMY_DATA = [
  {
    id: "D1",
    name: "دکتر مسعود کاظمی",
    job: "عصب شناسی",
    image: doctor1,
  },
  {
    id: "D2",
    name: "دکتر شادی بیاتی",
    job: "دارو",
    image: doctor2,
  },
  {
    id: "D3",
    name: "دکتر علی بیاتی",
    job: "دندان پزشک",
    image: doctor3,
  },
  {
    id: "D4",
    name: "دکتر فاطمه رضایی",
    job: "زنان",
    image: doctor4,
  },
  {
    id: "D6",
    name: "دکتر محمد حامدی",
    job: "اورولوژی",
    image: doctor6,
  },
  {
    id: "D7",
    name: "دکتر رضا کیانی",
    job: "چشم پزشک",
    image: doctor7,
  },
  {
    id: "D8",
    name: "دکتر محمد حیدری",
    job: "قلب و عروق",
    image: doctor8,
  },
  {
    id: "D9",
    name: "دکتر علی محمدی",
    job: "ارتوپدی",
    image: doctor9,
  },
];

const DoctorsSlider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>پزشکان متخصص ما</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className={classes.sliderContainer}
        breakpoints={{
          1300: {
            slidesPerView: 4,
          },
          995: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >
        {DUMMY_DATA.map((doctor) => {
          return (
            <SwiperSlide key={doctor.id} className={classes.PerSlider}>
              <Doctor
                name={doctor.name}
                job={doctor.job}
                image={doctor.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default DoctorsSlider;
