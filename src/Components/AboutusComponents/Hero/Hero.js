import AboutusBanner from "../../../assets/AboutUs-banner.jpg";
import classes from "./Hero.module.css";
import NavigationMenu from "../MainNavigation/NavigationMenu";
const Hero = () => {
  return (
    <>
      <div className={classes.hero}>
        <NavigationMenu />
        <img src={AboutusBanner} alt="AboutUsBanner" />
      </div>
    </>
  );
};
export default Hero;
