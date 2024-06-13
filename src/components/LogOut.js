import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import signOutLogo from "../assets/sign-out.png";
import medPage from "../assets/medical-app.png";
import article from "../assets/article.png";

const LogOut = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.data);
  const [isClicked, setIsClicked] = useState(false);

  const logOut = () => {
    localStorage.removeItem("Token");
    sessionStorage.removeItem("Token");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <div className="hidden lg:flex relative w-14 h-14">
        <img
          onClick={() => setIsClicked(!isClicked)}
          className="w-full h-full rounded-full  cursor-pointer object-cover object-top"
          src={`http://localhost:1000/${user?.image}`}
          alt="customer"
        />
        {isClicked && (
          <div
            id="logOut"
            className="absolute top-[68px] rounded-lg border-[0.5px] border-black -left-10 h-72 w-56 bg-secondary text-black"
          >
            <div className="flex flex-row justify-center items-center gap-5 pt-2">
              <div className=" w-16 h-16">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={`http://localhost:1000/${user?.image}`}
                  alt="customer"
                />
              </div>
              <div className="flex flex-col">
                <p>{`${user?.firstName} ${user?.lastName}`}</p>
                <p>{user?.username}@</p>
              </div>
            </div>
            <hr className="h-[1px] mt-4 bg-black" />
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
              <div
                onClick={() => navigate("/dashboard/info")}
                className="flex flex-row w-full h-full py-1 justify-center items-center gap-5 hover:bg-primary cursor-pointer"
              >
                <img className="w-7" src={medPage} alt="medPage" />
                <p> الصفحة الرئيسية</p>
              </div>
              <div
                onClick={() => navigate("/newarticle")}
                className="flex flex-row w-full h-full py-1 pl-6 justify-center items-center gap-5 hover:bg-primary cursor-pointer"
              >
                <img className="w-7" src={article} alt="article" />
                <p>انشاء مقال</p>
              </div>
              <div
                onClick={logOut}
                className="flex flex-row w-full h-full py-1 justify-center items-center gap-5 hover:bg-primary cursor-pointer"
              >
                <img className="w-7" src={signOutLogo} alt="signOutLogo" />
                <p>تسجيل الخروج</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* mobile */}

      <div className="lg:hidden  divide-y-2 divide-black">
        <li className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5  w-screen ">
          <Link to={"/info"}>معلومات الحساب</Link>
        </li>
        <li className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5  w-screen ">
          <Link to={"/newarticle"}>انشاء مقال</Link>
        </li>
        <li className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5  w-screen">
          <Link to={"/booking"}>الحجوزات</Link>
        </li>
        <li
          onClick={logOut}
          className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5  w-screen"
        >
          تسجيل الخروج
        </li>
      </div>
    </div>
  );
};

export default LogOut;
