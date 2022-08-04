import { useRef } from "react";
import classes from "./ThumbnailSlider.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image1 from "../../assets/pics/Hospital-beds.jpg";
import image2 from "../../assets/pics/Lobby.jpg";
import image3 from "../../assets/pics/medic.jpg";
import image4 from "../../assets/pics/surgery room.jpg";
import image5 from "../../assets/pics/Medical.jpg";
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
    console.log("hey");
  }
  return (
    <>
      <div className={classes.slider}>
        <Splide
          className={classes.TopSlider}
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            gap: "1rem",
            pagination: false,
            width: "80%",
            arrows: false,
            autoplay: true,
          }}
          onMove={handler}
          ref={MainSliderRef}
        >
          <SplideSlide className={classes.slide}>
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
              <img src={image1} alt="image1" />
            </div>
          </SplideSlide>
          <SplideSlide className={classes.slide}>
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
              <img src={image2} alt="image2" />
            </div>
          </SplideSlide>
          <SplideSlide className={classes.slide}>
            <div className={classes.ImageSlider}>
              <div className={classes.overlay}>
                <div className={classes.overlayInside}>
                  <div className={classes.overlayContent}>
                    <strong>Image Title</strong>
                    <p>This is Image description</p>
                  </div>
                </div>
              </div>
              <img src={image3} alt="image3" />
            </div>
          </SplideSlide>
          <SplideSlide className={classes.slide}>
            <div className={classes.ImageSlider}>
              <div className={classes.overlay}>
                <div className={classes.overlayInside}>
                  <div className={classes.overlayContent}>
                    <strong>Image Title</strong>
                    <p>This is Image description</p>
                  </div>
                </div>
              </div>
              <img src={image4} alt="image4" />
            </div>
          </SplideSlide>
          <SplideSlide className={classes.slide}>
            <div className={classes.ImageSlider}>
              <div className={classes.overlay}>
                <div className={classes.overlayInside}>
                  <div className={classes.overlayContent}>
                    <strong>Image Title</strong>
                    <p>This is Image description</p>
                  </div>
                </div>
              </div>
              <img src={image5} alt="image5" />
            </div>
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
