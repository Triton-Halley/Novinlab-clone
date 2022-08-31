import classes from "./MainFeature.module.css";
import laboratoryIcon from "../../../assets/icons/BlackAndWhite/hygiene-white.png";
import bloodSampleIcon from "../../../assets/icons/BlackAndWhite/blood-test-white.png";
import doctorIcon from "../../../assets/icons/BlackAndWhite/doctors-white.png";
import Image from "next/image";

const MainFeature = () => {
  return (
    <>
      <section className={classes.Features}>
        <header className={classes.FeaturesHeader}>
          <div className={classes.strong}>
            <strong>ویژگی ها</strong>
          </div>
          <div className={classes.HeaderTitle}>
            <h2>ویژگی های اصلی ما</h2>
          </div>
          <div>
            <p>
              یکسری ویژگی ها خاص برای راحتی شما ایجاد شده که با این ویژگی ها از
              خدمات ما به راحتی بهره ببرید
            </p>
          </div>
        </header>
        <div className={classes.BoxSection}>
          <div className={classes.containerBoxResponsive}>
            <div className={classes.container}>
              <div className={classes.BoxContainer}>
                <div className={classes.ContentContainer}>
                  <strong>نمونه گیری راحت نوزادان</strong>
                  <p>
                    آزمایشگاه نوین با داشتن افراد با سابقه و مجرب و دستگاه های
                    اختصاصی ، نمونه گیری نوزادان و خردسالان و همچنین افراد مسن و
                    کم توان را به شکلی ساده و با کم ترین احساس ناراحتی انجام می
                    دهد.
                  </p>
                </div>
                <div
                  className={[classes.IconContainer, classes.DoctorsColor].join(
                    " "
                  )}
                >
                  <Image
                    src={doctorIcon}
                    alt="افراد متخصص"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className={classes.BoxContainer}>
                <div className={classes.ContentContainer}>
                  <strong>نمونه گیری بی دغدغه در منزل و محل کار</strong>
                  <p>
                    آزمایشگاه نوین برای رفاه حال شما عزیزان سیستم نمونه گیری در
                    منزل و محل کار را در نظر گرفته است و شما می توانید بدون
                    مراجعه حضوری پذیرش شده و از شما درمحل نمونه گیری خواهد شد.
                  </p>
                </div>
                <div
                  className={[
                    classes.IconContainer,
                    classes.SamplingColor,
                  ].join(" ")}
                >
                  <Image
                    src={bloodSampleIcon}
                    alt="نمونه گیری"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className={classes.BoxContainer}>
                <div className={classes.ContentContainer}>
                  <strong>محیطی امن و بهداشتی</strong>
                  <p>
                    محیط آزمایشگاه نوین محیطی کاملاً بهداشتی و دارای دستگاه های
                    پیشرفته تصفیه هوا و ضدعفونی برای حفظ سلامت شما عزیزان در
                    مراجعه حضوری می باشد. &nbsp; &nbsp;
                    <br />
                  </p>
                </div>
                <div
                  className={[
                    classes.IconContainer,
                    classes.hygienicColor,
                  ].join(" ")}
                >
                  <Image
                    src={laboratoryIcon}
                    alt="آزمایشگاه"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainFeature;
