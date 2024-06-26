import undraw from "../assets/undraw_medicine.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInReducer } from "../store/user/userSlice";
import Loading from "../components/Loading";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInUser, setSignInUser] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const isLogged = useSelector((state) => state?.user?.isLogged);

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  const signIn = (e) => {
    setIsLoading(true);
    e.preventDefault();
    let userInfo = {
      username: signInUser,
      password: signInPassword,
    };
    dispatch(signInReducer({ userInfo, isRemember: isRememberMe })).finally(
      () => {
        setIsLoading(false);
      }
    );
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
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
          <form
            onSubmit={signIn}
            className="flex flex-col items-center lg:items-stretch m-auto"
          >
            <input
              onChange={(e) => setSignInUser(e.target.value)}
              className="w-80 lg:w-96 h-10 mb-5 bg-white border border-black pr-2 rounded-sm placeholder-primary"
              placeholder="اسم المستخدم"
              type="text"
            />
            <input
              onChange={(e) => setSignInPassword(e.target.value)}
              className="w-80 lg:w-96 h-10 mb-1 bg-white border border-black pr-2 rounded-sm placeholder-primary"
              placeholder="كلمة المرور"
              type="password"
            />
            <div className="flex flex-row justify-between items-center gap-32 mb-8">
              {/* <p className="text-primary hover:underline cursor-pointer">
                نسيت كلمة المرور؟
              </p> */}
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
            <button
              type="submit"
              className="text-white bg-primary w-72 lg:w-full h-12 mb-4 rounded-sm  hover:bg-green-800"
            >
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
