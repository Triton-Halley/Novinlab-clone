import React, { useState } from "react";
import { FreeMode, Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import classes from "./ThumbnailSlider.module.css";
import image1 from "../../../assets/pics/Hospital-beds.jpg";
import image2 from "../../../assets/pics/Lobby.jpg";
import image3 from "../../../assets/pics/medic.jpg";
import image4 from "../../../assets/pics/surgeryRoom.jpg";
import image5 from "../../../assets/pics/Medical.jpg";
import Image from "next/image";
const ThumbnailSlider = () => {
  // store controlled swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <>
      <div className={classes.slider}>
        <Swiper
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className={classes.TopSlider}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Thumbs, Autoplay]}
        >
          <SwiperSlide className={classes.slide}>
            <div className={classes.ImageSlider}>
              <div className={classes.overlay}>
                <div className={classes.overlayInside}>
                  <div className={classes.overlayContent}>
                    <strong>Image Title</strong>
                    <p>This is Image description</p>
                  </div>
                </div>
              </div>
              <Image src={image1} alt="image1" width={1920} height={1080} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.ImageSlider}>
              <div className={classes.overlay}>
                {" "}
                <div className={classes.overlayInside}>
                  <div className={classes.overlayContent}>
                    <strong>Image Title</strong>
                    <p>This is Image description</p>
                  </div>
                </div>
              </div>
              <Image src={image2} alt="image2" width={1920} height={1080} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.ImageSlider}>
              <div className={classes.overlay}>
                <div className={classes.overlayInside}>
                  <div className={classes.overlayContent}>
                    <strong>Image Title</strong>
                    <p>This is Image description</p>
                  </div>
                </div>
              </div>
              <Image src={image3} alt="image3" width={1920} height={1080} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.ImageSlider}>
              <div className={classes.overlay}>
                <div className={classes.overlayInside}>
                  <div className={classes.overlayContent}>
                    <strong>Image Title</strong>
                    <p>This is Image description</p>
                  </div>
                </div>
              </div>
              <Image src={image4} alt="image4" width={1920} height={1080} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.ImageSlider}>
              <div className={classes.overlay}>
                <div className={classes.overlayInside}>
                  <div className={classes.overlayContent}>
                    <strong>Image Title</strong>
                    <p>This is Image description</p>
                  </div>
                </div>
              </div>
              <Image src={image5} alt="image5" width={1920} height={1080} />
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Autoplay]}
          className={classes.SecondSlider}
          breakpoints={{
            995: {
              slidesPerView: 5,
            },
            850: {
              slidesPerView: 4,
            },
            500: {
              slidesPerView: 3,
            },

            320: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className={classes.ThumbSlide}>
            <Image src={image1} alt="image1" width={1920} height={1080} />
          </SwiperSlide>
          <SwiperSlide className={classes.ThumbSlide}>
            <Image src={image2} alt="image2" width={1920} height={1080} />
          </SwiperSlide>
          <SwiperSlide className={classes.ThumbSlide}>
            <Image src={image3} alt="image3" width={1920} height={1080} />
          </SwiperSlide>
          <SwiperSlide className={classes.ThumbSlide}>
            <Image src={image4} alt="image4" width={1920} height={1080} />
          </SwiperSlide>
          <SwiperSlide className={classes.ThumbSlide}>
            <Image src={image5} alt="image5" width={1920} height={1080} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ThumbnailSlider;
