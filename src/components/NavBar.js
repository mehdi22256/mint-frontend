import searching from "../assets/search.png";
import mintNav from "../assets/mintNav.png";
import burger from "../assets/hamburger.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [Searching, setSearching] = useState("");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <div className="w-auto h-20 bg-primary ">
      <nav className="hidden lg:flex text-white">
        <ul className="flex flex-row-reverse justify-start items-center gap-x-24 p-2 text-xl">
          <li className="w-max h-10 px-2 pt-1 rounded-lg font-semibold bg-white text-primary cursor-pointer hover:bg-green-800 hover:text-secondary">
            <Link to={"/login"}> تسجيل الدخول</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to={"/about"}>حولنا</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to={"/articles"}>المقالات</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to={"/pharmacies"}>الصيدليات</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to={"/doctors"}>الاطباء</Link>
          </li>
          <li className="cursor-pointer relative">
            <form>
              <img
                src={searching}
                alt="search"
                onClick={() => setIsSearch(!isSearch)}
                className="z-30"
              />
              <input
                onChange={(e) => setSearching(e.target.value)}
                placeholder="بحث..."
                type="search"
                id="search"
                className={`${
                  isSearch ? `flex` : `hidden`
                }  absolute left-10 bottom-[5px] bg-secondary w-[500px] h-10 rounded-lg pr-3 text-black`}
              />
            </form>
          </li>
          <div className="flex items-center pl-[480px] pr-16">
            <Link to={"/"}>
              <img className="w-16 cursor-pointer" src={mintNav} alt="mint" />
            </Link>
          </div>
        </ul>
      </nav>

      {/* mobile */}
      <nav>
        <div className="lg:hidden relative flex flex-row-reverse justify-between px-3 pt-8 items-center h-10">
          <div>
            <img
              src={searching}
              alt="search"
              onClick={() => setIsSearch(!isSearch)}
              className="text-3xl cursor-pointer "
            />
          </div>
          <div>
            <img
              src={burger}
              alt="burger"
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              className="cursor-pointer"
            />
            <input
              id="searchMobile"
              type="search"
              placeholder="بحث..."
              className={`${
                isSearch ? `flex` : `hidden`
              }  absolute left-14 top-3 bg-white w-[270px] h-11 rounded-lg p-2`}
            />
          </div>
        </div>

        {isBurgerOpen ? (
          <div
            id="navbar"
            className="fixed opacity-90 bg-secondary top-20 z-10 flex flex-col w-screen justify-around  items-center self-end lg:hidden"
          >
            <ul
              className="flex text-center divide-y-2 divide-solid divide-black
          flex-col justify-center items-center text-2xl mb-[600px]"
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
                <Link to={"/doctors"}>الاطباء</Link>
              </li>

              <li
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5 w-screen "
              >
                <Link to={"/pharmacies"}>الصيدليات</Link>
              </li>

              <li
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5 w-screen "
              >
                <Link to={"/about"}>حولنا</Link>
              </li>

              {/* {isLogged ? (
                <Logout isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />
              ) : ( */}

              <li
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                className="cursor-pointer hover:bg-primary hover:text-black font-semibold py-5  w-screen "
              >
                <Link to={"/login"}>تسجيل الدخول</Link>
              </li>

              {/* )} */}
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default NavBar;
