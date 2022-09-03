import { useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardView from "./AdminView/dashboard";
import SettingView from "./AdminView/setting";
import UsersView from "./AdminView/users";
import HeaderSide from "./HeaderSide";
import NavigationMenu from "./NavigationMenu";
import classes from "./Panel.module.css";
const Panel = () => {
  const page = useSelector((state) => state.dashboard);
  console.log(page);
  let currentPage = <DashboardView />;
  switch (page.currentPage) {
    case "dashboard": {
      currentPage = <DashboardView />;
      break;
    }
    case "setting": {
      currentPage = <SettingView />;
      break;
    }
    case "users": {
      currentPage = <UsersView />;
      break;
    }
    default: {
      currentPage = <DashboardView />;
      break;
    }
  }
  // useEffect(() => {
  //   // document.querySelectorAll("*").forEach(item=>{
  //   // });
  //   document.getElementsByTagName('html').
  // });
  return (
    <>
      <HeaderSide />
      <div className={[classes.dashboard, "grid"].join(" ")}>
        {currentPage}
        <div className="">
          <NavigationMenu />
        </div>
      </div>
    </>
  );
};

export default Panel;
