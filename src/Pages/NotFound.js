import classes from "./NOTFound.module.css";
import Notfound from "../assets/404 Error Page not Found.png";
import MainNavigation from "../Components/HomePageComponents/MainNavigation/MainNavigation";
const NotFound = () => {
  return (
    <>
      <MainNavigation />
      <div className={classes.container}>
        <img src={Notfound} alt="Not Found 404" />
      </div>
    </>
  );
};
export default NotFound;
