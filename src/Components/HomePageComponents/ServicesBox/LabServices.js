import ServiceBox from "./ServiceBox";
import classes from "./LabServices.module.css";
import ChemicalIcon from "../../../assets/icons/chemical.png";
import BabyIcon from "../../../assets/icons/baby.png";
import BloodIcon from "../../../assets/icons/blood.png";
import ChemicalTestIcon from "../../../assets/icons/chemicalTest.png";
import MicroscopeIcon from "../../../assets/icons/microscope.png";
import ReproductionIcon from "../../../assets/icons/reproduction.png";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "تست UBT - UST یا اوره آز",
    description:
      "این تست با توجه به سرعت و دقت خوبی که دارد برای افراد مشکوک به مشکلات معده و برای سنجش پایه توصیه می شود.",
    imgSrc: ChemicalIcon,
  },
  {
    id: "d2",
    title: "تست بیلی روبین",
    description:
      "تست بیلی روبین یا زردی نوزادان با دستگاه از طریق  اندازه گیری زردی پوست بدون نیاز به خون گیری یا حتی لمس نوزاد صورت می پذیرد",
    imgSrc: BabyIcon,
  },
  {
    id: "d3",
    title: "ونوجکت",
    description:
      "آزمایشگاه نوین برای کاهش درد ، راحتی و بهبود نمونه گیری افراد مراجعه کننده از وسایل ونوجکت جهت خونگیری افراد استفاده می نماید.",
    imgSrc: BloodIcon,
  },
  {
    id: "d4",
    title: "تست عرق",
    description:
      "کسانی که مشکوک به مشکلات گوارشی مانند سو تغذیه یا عفونت های مکرر مجاری تنفسی یا عرق شور هستند با سنجش مقدار سدیم و کلر موجود در عرق آنها میتوان به جواب اولیه دست پیدا کرد.",
    imgSrc: ChemicalTestIcon,
  },
  {
    id: "d5",
    title: "کولپوسکوپی بایوپسی",
    description:
      "انجام کولپوسکوپی برای افرادی که نیاز به بررسی بیشتر در مشکلات زنان دارند.",
    imgSrc: MicroscopeIcon,
  },
  {
    id: "d6",
    title: "روش IUI",
    description:
      "انجام روش IUI برای افرادی که مشکلات نازائی دارند یا اینکه می خواهند جنسیت فرزندشان را خودشان انتخاب کنند.",
    imgSrc: ReproductionIcon,
  },
];

const LabServices = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <div className={classes.SectionHeaderContainer}>
            <div className={classes.SectionHeader}>
              <h3>خدمات ویژه آزمایشگاه</h3>
              <div className={classes.line}>
                <div></div>
                <p>
                  آزمایشگاه نوین علاوه بر تست های معمول آزمایشگاهی ،تست ها و
                  خدمات خاص و ویژه ای نیز ارائه می دهد :
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
