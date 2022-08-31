import { useState } from "react";
import Link from "next/link";
import classes from "./NavigationMenu.module.css";
import logo from "../../../assets/Novin-logo.png";
import menu from "../../../assets/icons/menu128-black.png";
import closeMenu from "../../../assets/icons/close64-white.png";
import Image from "next/image";
const NavigationMenu = () => {
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
            <Link href="/#">نوبت دهی و جواب دهی آنلاین </Link>
          </div>
          <div className={classes.menu}>
            <nav className={classes.nav}>
              <ul>
                <li>
                  <Link href="/survey">نظرسنجی</Link>
                </li>
                <li>
                  <Link href="/contact-us">تماس با ما</Link>
                </li>
                <li>
                  <Link href="/faq">سوالات متداول</Link>
                </li>
                <li>
                  <Link href="/about-us">درباره ما</Link>
                </li>
                <li>
                  <Link href="/">خانه</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={classes.logo}>
            <Image
              src={logo}
              alt="آیکون آزمایشگاه نوین"
              width={90}
              height={90}
            />
          </div>
          <div className={classes.menuButtons}>
            <button onClick={CloseMenuHandler} className={classes.closeMenuBtn}>
              <Image
                src={closeMenu}
                alt="Navbar closeMenu button"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
        <button onClick={OpenMenuHandler} className={classes.openMenuBtn}>
          <Image src={menu} alt="Navbar menu button" width={32} height={32} />
        </button>
      </header>
    </>
  );
};
export default NavigationMenu;
