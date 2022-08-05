import React, { Component, createRef } from "react";
import classes from "./NavigationMenu.module.css";
import logo from "../../../assets/Novin-logo.png";
import { NavLink } from "react-router-dom";
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
                <div className={classes.logo}>
                  <img src={logo} alt="آیکون آزمایشگاه نوین" />
                </div>
                <div className={classes.menuButtons}>
                  <button
                    onClick={this.CloseMenuHandler.bind(this)}
                    className={classes.closeMenuBtn}
                  >
                    <img src={closeMenu} alt="Navbar closeMenu button" />
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={this.OpenMenuHandler.bind(this)}
              className={classes.openMenuBtn}
            >
              <img src={menu} alt="Navbar menu button" />
            </button>
          </header>
        </div>
      </>
    );
  }
}
export default NavigationMenu1;
