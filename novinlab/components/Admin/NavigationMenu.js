import classes from "./NavigationMenu.module.css";
import { useDispatch } from "react-redux";
import { dashboardAction } from "../../store/dashboardSlice";
import Link from "next/link";
import {
  GroupRounded,
  SettingsRounded,
  DashboardRounded,
} from "@mui/icons-material";
// import DashboardCustomizeRounded from "@mui/icons-material/DashboardCustomizeRounded";
const NavigationMenu = () => {
  const dispatch = useDispatch();
  // const onPageChangeHandler = (e) => {
  //   console.log(e.target.dataset);
  // };
  const onPageDashboardChangeHandler = (e) => {
    // console.log(e.target.dataset);
    dispatch(dashboardAction.updatePage({ page: "dashboard" }));
  };
  const onPageSettingChangeHandler = (e) => {
    // console.log(e.target.dataset);
    dispatch(dashboardAction.updatePage({ page: "setting" }));
  };
  const onPageUsersChangeHandler = (e) => {
    // console.log(e.target.dataset);
    dispatch(dashboardAction.updatePage({ page: "users" }));
  };
  // const onPageChangeHandler = (e) => {
  //   console.log(e.target.dataset);
  // };
  return (
    <div className="bg-cyan-800 text-white flex flex-col h-[96vh]">
      <nav className="my-16 mx-4">
        <ul className="flex flex-col-reverse gap-4">
          <li
            data-name={"users"}
            onClick={onPageUsersChangeHandler}
            className="flex justify-end rounded-md p-2 border-white w-full border-2"
          >
            <Link
              data-name={"users"}
              className="cursor-pointer"
              href={"/7&DBZf2R238UN6WHCn3"}
            >
              <div
                data-name={"users"}
                className="flex items-center space-x-4 text-3xl cursor-pointer"
              >
                <span data-name={"users"}>کاربران</span>
                <GroupRounded data-name={"users"} className="text-5xl" />
              </div>
            </Link>
          </li>
          <li
            onClick={onPageSettingChangeHandler}
            className="flex justify-end rounded-md p-2 border-white w-full border-2"
          >
            <Link className="cursor-pointer" href={"/7&DBZf2R238UN6WHCn3"}>
              <div className="flex items-center space-x-4 text-3xl cursor-pointer">
                <span>تنظیمات</span>
                <SettingsRounded className="text-5xl" />
              </div>
            </Link>
          </li>
          <li
            onClick={onPageDashboardChangeHandler}
            className="flex justify-end rounded-md p-2 border-white w-full border-2 "
          >
            <Link className="cursor-pointer" href={"/7&DBZf2R238UN6WHCn3"}>
              <div className="flex items-center space-x-4 text-3xl cursor-pointer">
                <span>داشبورد</span>
                <DashboardRounded className="text-5xl" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
