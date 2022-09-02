import React, { Component, createRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./NavigationMenu.module.css";
import logo from "../../../assets/Novin-logo.png";
import menu from "../../../assets/icons/menu128-black.png";
import closeMenu from "../../../assets/icons/close64-white.png";

class NavigationMenu1 extends Component {
  constructor() {
    super();
    this.myRef = createRef();
    this.headerClasses = [classes.header, classes.posAbsolute];
    this.displayMenuClasses = [classes.container];
    this.state = {
      headerClassesArray: this.headerClasses,
      displayMenu: this.displayMenuClasses,
    };
  }
  componentDidMount() {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          this.setState({
            headerClassesArray: [classes.header, classes.posSticky],
          });
        } else {
          this.setState({
            headerClassesArray: [classes.header, classes.posAbsolute],
          });
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.5,
      }
    );
    observer.observe(this.myRef.current);
  }
  OpenMenuHandler() {
    console.log(this);
    this.setState({
      displayMenu: [classes.container, classes.displayMenu],
    });
  }
  CloseMenuHandler() {
    this.setState({
      displayMenu: [classes.container],
    });
  }
  render() {
    return (
      <>
        <div ref={this.myRef} className={classes.navigationContainer}>
          <header className={this.state.headerClassesArray.join(" ")}>
            <div className={this.state.displayMenu.join(" ")}>
              <div className={classes.menu}>
                <nav className={classes.nav}>
                  <ul>
                    <li>
                      <Link
                        // className={(NavData) =>
                        //   NavData.isActive ? classes.active : ""
                        // }
                        href="/survey"
                      >
                        نظرسنجی
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className={(NavData) =>
                        //   NavData.isActive ? classes.active : ""
                        // }
                        href="/contact-us"
                      >
                        تماس با ما
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className={(NavData) =>
                        //   NavData.isActive ? classes.active : ""
                        // }
                        href="/faq"
                      >
                        سوالات متداول
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className={(NavData) =>
                        //   NavData.isActive ? classes.active : ""
                        // }
                        href="/about-us"
                      >
                        درباره ما
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className={(NavData) =>
                        //   NavData.isActive ? classes.active : ""
                        // }
                        href="/"
                      >
                        خانه
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className={classes.logo}>
                  <Image
                    src={logo}
                    alt="آیکون آزمایشگاه نوین"
                    width={90}
                    height={90}
                  />
                </div>
                <div className={classes.menuButtons}>
                  <button
                    onClick={this.CloseMenuHandler.bind(this)}
                    className={classes.closeMenuBtn}
                  >
                    <Image
                      className={classes.icon}
                      src={closeMenu}
                      alt="Navbar closeMenu button"
                      width={64}
                      height={64}
                    />
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={this.OpenMenuHandler.bind(this)}
              className={classes.openMenuBtn}
            >
              <Image
                className={classes.icon}
                src={menu}
                alt="Navbar menu button"
                width={64}
                height={64}
              />
            </button>
          </header>
        </div>
      </>
    );
  }
}
export default NavigationMenu1;
