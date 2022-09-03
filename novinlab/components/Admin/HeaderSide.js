import { MenuRounded, LogoutRounded } from "@mui/icons-material";
const HeaderSide = () => {
  return (
    <div className="flex justify-between w-full py-6 px-4 shadow-lg">
      <div className="flex space-x-10 items-center">
        <div>
          <button className="cursor-pointer flex items-center space-x-4 text-xl bg-slate-300 p-4 rounded-md">
            <LogoutRounded className="text-2xl" />
            <span>خروج</span>
          </button>
        </div>
        <div>username</div>
      </div>
      <div>
        <MenuRounded className="text-5xl cursor-pointer" />
      </div>
    </div>
  );
};

export default HeaderSide;
