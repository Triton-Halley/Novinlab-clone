import classes from "./Footer.module.css";
import logo from "../../assets/Novin-logo.png";
import Image from "next/image";
import {
  WhatsApp,
  Call,
  Mail,
  LocationOn,
  AccessTimeFilled,
  Instagram,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.socialMedia}>
        <strong>ما را در اینستاگرام دنبال کنید</strong>
        <div>
          <a href="https://www.instagram.com/Novinlabprofessional/">
            <Instagram className="text-5xl" />
          </a>
        </div>
      </div>
      {/* <div className={classes.map}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6497.991821520684!2d51.689125!3d35.479645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c9ac377dcac838!2z2KfYstmF2KfbjNi02q_Yp9mHINiq2K7Ytdi124wg2b7Yp9iq2YjYqNuM2YjZhNmI2pjbjCDZhtmI24zZhg!5e0!3m2!1sen!2sus!4v1658059582323!5m2!1sen!2sus"
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </div> */}
      <div className={classes.information}>
        <Image src={logo} alt="آزمایشگاه نوین" width={325} height={90} />
        <strong>آزمایشگاه نوین</strong>
        <div className={classes.address}>
          <LocationOn className="text-5xl" />
          <p>
            پاکدشت،خیابان شهید مطهری،نرسیده به میدان آزادگان (شعبه)،کوچه صاحب
            الزمان،پ ۵
          </p>
        </div>
        <div>
          <Call className="text-5xl" />
          <p>۰۲۱-۳۶۰۲۹۷۹۶</p>
        </div>
        <div>
          <Mail className="text-5xl" />
          <a href="mailto:novinlab@outlook.com">novinlab@outlook.com</a>
        </div>
        <div>
          <WhatsApp className="text-5xl" />
          <a href="https://wa.me/09021325472">۰۹۰۲۱۳۲۵۴۷۲</a>
        </div>
        <div>
          <AccessTimeFilled className="text-5xl" />
          <p>۰۶:۳۰ صبح الی ۲۰:۰۰</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
