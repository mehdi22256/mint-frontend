import searching from "../assets/search.png";
import mintNav from "../assets/Group.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogOut from "./LogOut";

const NavBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [Searching, setSearching] = useState("");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const isLogged = useSelector((state) => state?.user?.isLogged);
  return (
    <div className="w-auto h-14 lg:h-20 bg-primary lg:px-16 sticky top-0 z-50">
      <nav className="hidden lg:flex text-white">
        <ul className="flex flex-row-reverse justify-start items-center space-x-20 p-1 text-xl">
          {isLogged ? (
            <LogOut />
          ) : (
            <li className="w-max h-10 px-2 pt-1 rounded-lg font-semibold bg-white text-primary cursor-pointer hover:bg-green-800 hover:text-secondary">
              <Link to={"/signin"}> تسجيل الدخول</Link>
            </li>
          )}
          <li className="cursor-pointer hover:underline">
            <Link to={"/about"}>حولنا</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to={"/articles"}>المقالات</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to={"/pharmacy"}>الصيدليات</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to={"/doctor"}>الاطباء</Link>
          </li>

          <div className=" pl-96">
            <Link className="flex flex-row-reverse items-center" to={"/"}>
              <p className="text-3xl font-bold">نعناع</p>
              <img className="w-16 cursor-pointer" src={mintNav} alt="mint" />
            </Link>
          </div>
        </ul>
      </nav>

      {/* mobile */}
      <nav>
        <div className="lg:hidden relative flex flex-row justify-between px-3 pt-5 items-center h-10">
          {/* <div>
            <img
              src={searching}
              alt="search"
              onClick={() => setIsSearch(!isSearch)}
              className="w-7 cursor-pointer "
            />
          </div> */}
          <div>
            <label class="hamburger">
              <input
                type="checkbox"
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              />
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
            {/* <input
              id="searchMobile"
              type="search"
              placeholder="بحث..."
              className={`${
                isSearch ? `flex` : `hidden`
              }  absolute left-12 top-3 bg-white w-[250px] h-9 rounded-lg p-2`}
            /> */}
          </div>
        </div>

        {isBurgerOpen ? (
          <div
            id="navbar"
            className="fixed opacity-90 bg-secondary top-14 z-10 flex flex-col w-screen justify-around  items-center self-end lg:hidden"
          >
            <ul
              className="flex text-center
          flex-col justify-center items-center text-lل mb-[600px] divide-y-2 divide-black"
            >
              <li
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5 w-screen"
              >
                <Link to={"/"}>الصفحة الرئيسية </Link>
              </li>

              <li
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5 w-screen "
              >
                <Link to={"/articles"}>المقالات </Link>
              </li>

              <li
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5 w-screen "
              >
                <Link to={"/doctor"}>الاطباء</Link>
              </li>

              <li
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5 w-screen "
              >
                <Link to={"/Pharmacy"}>الصيدليات</Link>
              </li>

              <li
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5 w-screen "
              >
                <Link to={"/about"}>حولنا</Link>
              </li>

              {isLogged ? (
                <LogOut />
              ) : (
                <li
                  onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                  className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5  w-screen"
                >
                  <Link
                    className="bg-primary rounded-full text-white hover:bg-secondary hover:text-primary p-2"
                    to={"/signin"}
                  >
                    تسجيل الدخول
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default NavBar;
