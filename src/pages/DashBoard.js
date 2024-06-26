import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.data);
  const logOut = () => {
    localStorage.removeItem("Token");
    sessionStorage.removeItem("Token");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="hidden lg:flex flex-row">
      <div id="right" className="w-1/5 bg-secondary h-auto ">
        <div
          id="dashBoard"
          className="flex flex-col items-center justify-evenly gap-3 h-[500px] w-full"
        >
          <div className="h-32 w-32">
            <img
              className="w-full h-full rounded-full object-cover object-top"
              src={`${user?.image}`}
              alt="user"
            />
          </div>
          <hr className="bg-black h-[2px] w-40" />
          <NavLink to={"info"}>
            <p className="text-xl font-semibold hover:underline cursor-pointer p-3">
              معلومات الحساب
            </p>
          </NavLink>
          <NavLink to={"messages"}>
            <p className="text-xl font-semibold hover:underline cursor-pointer p-3">
              الرسائل
            </p>
          </NavLink>

          <NavLink to={"booking"}>
            <p className="text-xl font-semibold hover:underline cursor-pointer p-3">
              الحجوزات
            </p>
          </NavLink>
          <NavLink to={"newarticle"}>
            <p className="text-xl font-semibold hover:underline cursor-pointer p-3">
              انشاء مقالة
            </p>
          </NavLink>
          <p
            onClick={logOut}
            className="text-xl font-semibold cursor-pointer bg-secondary hover:bg-primary p-3 rounded-xl"
          >
            تسجيل الخروج
          </p>
        </div>
      </div>
      <div id="left" className=" w-4/5  h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
