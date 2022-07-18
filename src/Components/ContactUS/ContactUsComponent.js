import classes from "./ContactUs.module.css";
const ContactUsComponent = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.contactUs}>
          <ul>
            <li>
              <div className={classes.icon}>
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div>
                <strong>شماره تلفن</strong>
                <p>۳۶۰۲۹۷۹۶ - ۳۶۰۳۲۴۲۲ - ۳۶۰۲۰۲۴۸ - ۳۶۰۳۶۷۴۵</p>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>
              <div>
                <strong>واتساپ</strong>
                <p>۰۹۰۲۱۳۲۵۴۷۲</p>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div>
                <strong>آدرس ایمیل</strong>
                <p>novinlab@outlook.com</p>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div>
                <strong>آدرس</strong>
                <p>
                  پاکدشت،خیابان شهید مطهری،نرسیده به میدان آزادگان (شعبه)،کوچه
                  صاحب الزمان،پلاک ۵
                </p>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
              <div className={classes.instagram}>
                <strong>اینستاگرام</strong>
                <a href="https://www.instagram.com/Novinlabprofessional/">
                  Novinlabprofessional
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ContactUsComponent;
