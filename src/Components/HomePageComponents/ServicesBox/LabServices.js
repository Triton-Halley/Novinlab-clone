import ServiceBox from "./ServiceBox";
import classes from "./LabServices.module.css";
import urea from "../../../assets/icons/blood-urea-nitrogen.png";
import BabyIcon from "../../../assets/icons/newborn.png";
import bloodTube from "../../../assets/icons/test-tube.png";
import Sweat from "../../../assets/icons/sweat.png";
import ColposCope from "../../../assets/icons/colposcope.png";
import IUI from "../../../assets/icons/ivf.png";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "تست UBT - UST یا اوره آز",
    description:
      "این تست با توجه به سرعت و دقت خوبی که دارد برای افراد مشکوک به مشکلات معده و ...",
    imgSrc: urea,
  },
  {
    id: "d2",
    title: "تست بیلی روبین",
    description:
      "تست بیلی روبین یا زردی نوزادان با دستگاه از طریق  اندازه گیری زردی پوست بدون نیاز به ...",
    imgSrc: BabyIcon,
  },
  {
    id: "d3",
    title: "ونوجکت",
    description:
      "آزمایشگاه نوین برای کاهش درد ، راحتی و بهبود نمونه گیری افراد مراجعه کننده از وسایل ...",
    imgSrc: bloodTube,
  },
  {
    id: "d4",
    title: "تست عرق",
    description:
      "کسانی که مشکوک به مشکلات گوارشی مانند سو تغذیه یا عفونت های مکرر مجاری تنفسی یا  ...",
    imgSrc: Sweat,
  },
  {
    id: "d5",
    title: "کولپوسکوپی بایوپسی",
    description:
      "انجام کولپوسکوپی برای افرادی که نیاز به بررسی بیشتر در مشکلات زنان دارند ...",
    imgSrc: ColposCope,
  },
  {
    id: "d6",
    title: "روش IUI",
    description:
      "انجام روش IUI برای افرادی که مشکلات نازائی دارند یا اینکه می خواهند جنسیت فرزندشان را ...",
    imgSrc: IUI,
  },
];

const LabServices = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <div className={classes.SectionHeaderContainer}>
            <div className={classes.SectionHeader}>
              <div className={classes.strong}>
                <strong>خدمات ویژه</strong>
              </div>

              <div className={classes.line}>
                <p>
                  آزمایشگاه نوین علاوه بر تست های معمول آزمایشگاهی تست ها و
                  خدمات خاص و ویژه ای نیز ارائه می دهد
                </p>
              </div>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <div className={classes.ServiceBoxContainer}>
              {DUMMY_DATA.reverse().map((val) => {
                return (
                  <ServiceBox
                    key={val.id}
                    boxID={val.id}
                    title={val.title}
                    description={val.description}
                    imgSource={val.imgSrc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabServices;
