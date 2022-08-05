import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../../assets/Novin-logo.png";
import menu from "../../../assets/icons/menu128-black.png";
import closeMenu from "../../../assets/icons/close64-white.png";
const MainNavigation = () => {
  const [displayMenu, setDisplayMenu] = useState([classes.container]);
  const OpenMenuHandler = () => {
    // setOpenMenuBtn([]);
    setDisplayMenu([classes.container, classes.displayMenu]);
  };
  const CloseMenuHandler = () => {
    setDisplayMenu([classes.container]);
  };
  return (
    <>
      <header className={classes.header}>
        <div className={displayMenu.join(" ")}>
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
          <div className={classes.menuButtons}>
            <button onClick={CloseMenuHandler} className={classes.closeMenuBtn}>
              <img src={closeMenu} alt="Navbar closeMenu button" />
            </button>
          </div>
        </div>
        <button onClick={OpenMenuHandler} className={classes.openMenuBtn}>
          <img src={menu} alt="Navbar menu button" />
        </button>
      </header>
    </>
  );
};
export default MainNavigation;
