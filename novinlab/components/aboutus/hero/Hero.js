import AboutusBanner from "../../../assets/AboutUs-banner.jpg";
import classes from "./Hero.module.css";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className={classes.hero}>
        <NavigationMenu />
        <Image
          src={AboutusBanner}
          alt="AboutUsBanner"
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
};
export default Hero;
