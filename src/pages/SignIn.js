import undraw from "../assets/undraw_medicine.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [isRememberMe, setIsRememberMe] = useState(false);

  const navigator = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    navigator("/signup");
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse lg:p-7 lg:px-10 lg:gap-10">
      <div id="left" className="hidden lg:flex w-1/2">
        <img src={undraw} alt="medicine" />
      </div>
      <div id="right" className="lg:px-auto lg:w-1/2">
        <p className="text-4xl lg:text-5xl font-bold text-center my-10">
          اهلا بك مرة أخرى...
        </p>
        <div className="flex flex-col">
          <form className="flex flex-col items-center lg:items-stretch m-auto">
            <input
              className="w-80 lg:w-96 h-10 mb-5 bg-white border border-black pr-2 rounded-sm placeholder-primary"
              placeholder="اسم المستخدم"
              type="text"
            />
            <input
              className="w-80 lg:w-96 h-10 mb-1 bg-white border border-black pr-2 rounded-sm placeholder-primary"
              placeholder="كلمة المرور"
              type="password"
            />
            <div className="flex flex-row justify-between items-center gap-32 mb-8">
              <p className="text-primary hover:underline cursor-pointer">
                نسيت كلمة المرور؟
              </p>
              <label
                htmlFor="checkbox"
                className="text-primary cursor-pointer hover:underline"
              >
                <input
                  onClick={() => setIsRememberMe(!isRememberMe)}
                  className="w-5 h-5 cursor-pointer"
                  type="checkbox"
                  id="checkbox"
                />
                تذكرني
              </label>
            </div>
            <button className="text-white bg-primary w-72 lg:w-full h-12 mb-4 rounded-sm  hover:bg-green-800">
              تسجيل الدخول
            </button>
            <div className="flex flex-row items-center justify-center gap-6 mb-5">
              <hr className="h-[1px] w-28 lg:w-40 text-black bg-black" />
              <p>او</p>
              <hr className="h-[1px] w-28 lg:w-40 text-black bg-black" />
            </div>
            <button
              className="text-primary bg-white border border-primary w-72 lg:w-full h-12 rounded-sm hover:bg-secondary mb-5"
              onClick={handleSignup}
            >
              انشاء حساب
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
