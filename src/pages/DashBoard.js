import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
      <div id="right" className="w-1/5 bg-secondary  h-auto">
        <div className="flex flex-col items-center justify-evenly gap-3 h-[500px]">
          <div className="h-32 w-32">
            <img
              className="w-full h-full rounded-full object-cover object-top"
              src={`http://localhost:1000/${user?.image}`}
              alt="user"
            />
          </div>
          <hr className="bg-black h-[2px] w-40" />
          <p
            onClick={() => navigate("info")}
            className="text-xl font-semibold hover:underline cursor-pointer"
          >
            معلومات الحساب
          </p>
          <p
            onClick={() => navigate("booking")}
            className="text-xl font-semibold hover:underline cursor-pointer"
          >
            الحجوزات
          </p>
          <p
            onClick={() => navigate("newarticle")}
            className="text-xl font-semibold hover:underline cursor-pointer"
          >
            انشاء مقالة
          </p>
          <p
            onClick={logOut}
            className="text-xl font-semibold cursor-pointer bg-red-500 hover:bg-red-800 p-3 rounded-xl"
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
