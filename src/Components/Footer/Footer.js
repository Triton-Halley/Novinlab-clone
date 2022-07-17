import classes from "./Footer.module.css";
import logo from "../../assets/Novin-logo.png";
const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.socialMedia}>
        <strong>شبکه های اجتماعی</strong>
        <div>
          <a href="https://www.instagram.com/Novinlabprofessional/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="https://wa.me/09021325472">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>
      </div>
      <div className={classes.map}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6497.991821520684!2d51.689125!3d35.479645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c9ac377dcac838!2z2KfYstmF2KfbjNi02q_Yp9mHINiq2K7Ytdi124wg2b7Yp9iq2YjYqNuM2YjZhNmI2pjbjCDZhtmI24zZhg!5e0!3m2!1sen!2sus!4v1658059582323!5m2!1sen!2sus"
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </div>
      <div className={classes.information}>
        <img src={logo} alt="آزمایشگاه نوین" />
        <strong>آزمایشگاه نوین</strong>
        <div className={classes.address}>
          <ion-icon name="location-outline"></ion-icon>
          <p>
            پاکدشت،خیابان شهید مطهری،نرسیده به میدان آزادگان (شعبه)،کوچه صاحب
            الزمان،پ ۵
          </p>
        </div>
        <div>
          <ion-icon name="call-outline"></ion-icon>
          <p>۰۲۱-۳۶۰۲۹۷۹۶</p>
        </div>
        <div>
          <ion-icon name="mail-outline"></ion-icon>
          <a href="mailto:novinlab@outlook.com">novinlab@outlook.com</a>
        </div>
        <div>
          <ion-icon name="logo-whatsapp"></ion-icon>
          <a href="https://wa.me/09021325472">۰۹۰۲۱۳۲۵۴۷۲</a>
        </div>
        <div>
          <ion-icon name="time-outline"></ion-icon>
          <p>۰۶:۳۰ صبح الی ۲۰:۰۰</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
