import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../../assets/Novin-logo.png";
const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.btn}>
          <Link to="/#">نوبت دهی و جواب دهی آنلاین </Link>
        </div>
        <div className={classes.menu}>
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink
                  className={(NavData) =>
                    NavData.isActive ? classes.active : ""
                  }
                  to="/survey"
                >
                  نظرسنجی
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(NavData) =>
                    NavData.isActive ? classes.active : ""
                  }
                  to="/contact-us"
                >
                  تماس با ما
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(NavData) =>
                    NavData.isActive ? classes.active : ""
                  }
                  to="/faq"
                >
                  سوالات متداول
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(NavData) =>
                    NavData.isActive ? classes.active : ""
                  }
                  to="/about-us"
                >
                  درباره ما
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(NavData) =>
                    NavData.isActive ? classes.active : ""
                  }
                  to="/"
                >
                  خانه
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.logo}>
          <img src={logo} alt="آیکون آزمایشگاه نوین" />
        </div>
      </header>
    </>
  );
};
export default MainNavigation;
