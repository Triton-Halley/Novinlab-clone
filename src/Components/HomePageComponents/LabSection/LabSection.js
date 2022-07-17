import { useState } from "react";
import ShowDetail from "./ShowDetail";
// images
import Scanning from "../../assets/icons/screening.png";
import serum from "../../assets/icons/serum.png";
import biochemistry from "../../assets/icons/biochemistry.png";
import hormones from "../../assets/icons/hormones.png";
import microscope from "../../assets/icons/microscope-1.png";
import bloodCells from "../../assets/icons/bloodCells.png";

import pic1 from "../../assets/pics/emin-baycan-3FtypNvSPn0-unsplash.jpg";
import pic2 from "../../assets/pics/national-cancer-institute-DYQfoftWGXw-unsplash.jpg";
import pic3 from "../../assets/pics/reproductive-health-supplies-coalition-fgqLiOKNjU8-unsplash.jpg";

import classes from "./LabSection.module.css";
const DUMMY_DATA = [
  {
    id: "s1",
    title: "بخش غربال گری",
    description: "در این بخش تستهای  سلامت جنین خانم های باردار انجام می شود ",
    imgSrc: Scanning,
    imgSource: pic2,
  },
  {
    id: "s2",
    title: "بخش سرم",
    description:
      "در این بخش جدا سازی و آماده سازی سرم انجام شده و سرم برای تست ها در مابقی بخش آماده سازی می شود.",
    imgSrc: serum,
    imgSource: pic2,
  },
  {
    id: "s3",
    title: "بخش میکروب شناسی",
    description:
      "در این بخش انجام تست های ادرار و مدفوع و کشت آنها توسط کارشناس میکروب شناسی انجام می شود.",
    imgSrc: microscope,
    imgSource: pic3,
  },
  {
    id: "s4",
    title: "بخش هورمون شناسی",
    description:
      "در این بخش تست های تیروئید،هورمون های زنانه و مردانه و ... توسط دستگاه الایزا انجام می شود.",
    imgSrc: hormones,
    imgSource: pic2,
  },
  {
    id: "s5",
    title: "بخش هماتولوژی",
    description:
      "اندازه گیری سلول های  CBC   در این بخش روی نمونه های خونی انجام می شود.",
    imgSrc: bloodCells,
    imgSource: pic3,
  },
  {
    id: "s6",
    title: "بیو شیمی",
    description:
      "در این بخش انجام تعدادی از تست های بیوشیمیایی مثل اوره ، کراتین ، قند و چربی ، و ... توسط دستگاه هتیاچی انجام می شود.",
    imgSrc: biochemistry,
    imgSource: pic2,
  },
];

const LabSection = () => {
  const [detailObject, setDetailObject] = useState(DUMMY_DATA[0]);

  const clickHandler = (e) => {
    const data_id = e.target.dataset.id;
    const data_obj = DUMMY_DATA.find((item) => item.id === data_id);
    setDetailObject(data_obj);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.SectionContainer}>
          <div className={classes.detailContainer}>
            <ShowDetail detail={detailObject} />
          </div>
          <div className={classes.SectionGrid}>
            {DUMMY_DATA.map((data) => {
              return (
                <div
                  data-id={data.id}
                  className={classes.gridItem}
                  key={data.id}
                  onClick={clickHandler}
                >
                  <img data-id={data.id} src={data.imgSrc} alt={data.title} />
                  <strong data-id={data.id}>{data.title}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default LabSection;
