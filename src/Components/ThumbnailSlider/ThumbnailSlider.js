import { useRef } from "react";
import classes from "./ThumbnailSlider.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image1 from "../../assets/Doctors/doc_1.jpg";
import image2 from "../../assets/Doctors/doc_2.jpg";
import image3 from "../../assets/Doctors/doc_3.jpg";
import image4 from "../../assets/Doctors/doc_4.jpg";
import image5 from "../../assets/Doctors/doc_9.jpg";
const ThumbnailSlider = () => {
  const ThumbnailRef = useRef();
  const MainSliderRef = useRef();

  if (
    ThumbnailRef.current &&
    ThumbnailRef.current.splide &&
    MainSliderRef.current
  ) {
    MainSliderRef.current.sync(ThumbnailRef.current.splide);
  }
  function handler() {
    console.log(ThumbnailRef);
  }
  return (
    <>
      <div className={classes.slider}>
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            gap: "1rem",
            pagination: false,
            height: "100%",
            width: "50%",
            arrows: false,
          }}
          ref={MainSliderRef}
        >
          <SplideSlide>
            <img src={image1} alt="image1" />
          </SplideSlide>
          <SplideSlide>
            <img src={image2} alt="image2" />
          </SplideSlide>
          <SplideSlide>
            <img src={image3} alt="image3" />
          </SplideSlide>
          <SplideSlide>
            <img src={image4} alt="image4" />
          </SplideSlide>
          <SplideSlide>
            <img src={image5} alt="image5" />
          </SplideSlide>
        </Splide>
        <Splide
          options={{
            type: "slide",
            rewind: true,
            gap: "1rem",
            pagination: false,
            fixedWidth: 110,
            fixedHeight: 70,
            cover: true,
            focus: "center",
            isNavigation: true,
            arrows: false,
          }}
          ref={ThumbnailRef}
        >
          <SplideSlide>
            <img src={image1} alt="image1" />
          </SplideSlide>
          <SplideSlide>
            <img src={image2} alt="image2" />
          </SplideSlide>
          <SplideSlide>
            <img src={image3} alt="image3" />
          </SplideSlide>
          <SplideSlide>
            <img src={image4} alt="image4" />
          </SplideSlide>
          <SplideSlide>
            <img src={image5} alt="image5" />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default ThumbnailSlider;
