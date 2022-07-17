import React, { Component, createRef } from "react";
import classes from "./NavigationMenu.module.css";
import logo from "../../../assets/Novin-logo.png";
import { NavLink } from "react-router-dom";

class NavigationMenu1 extends Component {
  constructor() {
    super();
    this.myRef = createRef();
    this.headerClasses = [classes.header, classes.posAbsolute];
    this.state = {
      headerClassesArray: this.headerClasses,
    };
  }
  componentDidMount() {
    console.log(this.myRef);
    let observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        console.log(entry.isIntersecting);
        if (!entry.isIntersecting) {
          console.log("not see");
          this.setState({
            headerClassesArray: [classes.header, classes.posSticky],
          });
        } else {
          console.log("see");
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

    // console.log(this.myRef);
  }

  render() {
    return (
      <>
        <div ref={this.myRef} className={classes.navigationContainer}>
          <header className={this.state.headerClassesArray.join(" ")}>
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
            </div>
          </header>
        </div>
      </>
    );
  }
}
export default NavigationMenu1;
