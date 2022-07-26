import classes from "./Boxs.module.css";
import laboratoryIcon from "../../../../assets/icons/laboratory.png";
import bloodSampleIcon from "../../../../assets/icons/‌blood-sample.png";
import doctorIcon from "../../../../assets/icons/doctor.png";

const BoxContent = () => {
  return (
    <>
      <section className={classes.BoxSection}>
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
              <div>
                <img src={doctorIcon} alt="افراد متخصص" />
              </div>
            </div>
            <div className={classes.BoxContainer}>
              <div className={classes.ContentContainer}>
                <strong>نمونه گیری بی دغدغه در منزل و محل کار</strong>
                <p>
                  آزمایشگاه نوین برای رفاه حال شما عزیزان سیستم نمونه گیری در
                  منزل و محل کار را در نظر گرفته است و شما می توانید بدون مراجعه
                  حضوری پذیرش شده و از شما درمحل نمونه گیری خواهد شد.
                </p>
              </div>
              <div>
                <img src={bloodSampleIcon} alt="نمونه گیری" />
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
              <div>
                <img src={laboratoryIcon} alt="آزمایشگاه" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoxContent;
