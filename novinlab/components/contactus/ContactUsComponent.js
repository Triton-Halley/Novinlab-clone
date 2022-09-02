import classes from "./ContactUs.module.css";
import {
  WhatsApp,
  Call,
  Mail,
  LocationOn,
  Instagram,
} from "@mui/icons-material";
const ContactUsComponent = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.contactUs}>
          <ul>
            <li>
              <div className={classes.icon}>
                <Call className="text-5xl" />
              </div>
              <div>
                <strong>شماره تلفن</strong>
                <p>۳۶۰۲۹۷۹۶ - ۳۶۰۳۲۴۲۲ - ۳۶۰۲۰۲۴۸ - ۳۶۰۳۶۷۴۵</p>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <WhatsApp className="text-5xl" />
              </div>
              <div>
                <strong>واتساپ</strong>
                <p>۰۹۰۲۱۳۲۵۴۷۲</p>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <Mail className="text-5xl" />
              </div>
              <div>
                <strong>آدرس ایمیل</strong>
                <p>novinlab@outlook.com</p>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <LocationOn className="text-5xl" />
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
                <Instagram className="text-5xl" />
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
