import { useSelector } from "react-redux";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import signOutLogo from "../assets/sign-out.png"
import medPage from "../assets/medical-app.png"
const LogOut = () => {
    const navigate =useNavigate()
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
             <img onClick={() => setIsClicked(!isClicked)} className="w-full h-full rounded-full  cursor-pointer" src={`http://localhost:1000/${user?.image}`} alt="customer" />
             {isClicked && <div className="absolute top-[68px] rounded-lg border-[0.5px] border-black -left-10 h-56 w-56 bg-secondary text-black">
                <div className="flex flex-row justify-center items-center gap-5 pt-2">
                    <div className=" w-16 h-16">
                        <img className="rounded-full w-full h-full" src={`http://localhost:1000/${user?.image}`} alt="customer" />
                    </div>
                    <div className="flex flex-col">
                        <p>{`${user?.firstName} ${user?.familyName}`}</p>
                        <p>{user?.username}@</p>
                    </div>
                </div>
                 <hr className="h-[1px] mt-4 bg-black"/>
                 <div className="flex flex-col justify-center items-center gap-5 mt-5">
                    <div className="flex flex-row w-full h-full py-1 justify-center items-center gap-5 hover:bg-primary cursor-pointer">
                        <img className="w-7" src={medPage} alt="medPage" />
                    <p>صفحة العيادة</p> 
                    </div>
                    <div onClick={logOut} className="flex flex-row w-full h-full py-1 justify-center items-center gap-5 hover:bg-primary cursor-pointer">
                        <img className="w-7" src={signOutLogo} alt="signOutLogo" />
                    <p>تسجيل الخروج</p>
                    </div>       
                 </div>
          </div> }
      </div>

      {/* mobile */}

      <div onClick={logOut} className="lg:hidden">
        <li className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5  w-screen mt-36">تسجيل الخروج</li>
      </div>
    </div>
  )
}

export default LogOut