import mintHome from "../assets/mintHome.svg";
import pic1 from "../assets/pic1Home.png";
import pic2 from "../assets/pic2Home.png";
import blogLogo from "../assets/blog.png";
import drugLogo from "../assets/drug.png";
import medicineLogo from "../assets/medicine.png";
import search from "../assets/search.png";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Map } from "leaflet";
import HomeMap from "../components/HomeMap";

const Home = () => {
  const blogs = useSelector((state) => state?.blog?.data);
  const navigate = useNavigate();

  const [showMap, setShowMap] = useState(false);

  return (
    <div className="w-full p-3 lg:p-14">
      {/* hero */}
      <div className="lg:h-[750px]">
        <div className="w-full h-[600px] lg:h-[667px]">
          <div className="bg-secondary rounded-xl h-3/4 flex flex-row-reverse justify-center gap-64 lg:items-center lg:p-20 pb-40">
            <div id="left" className="hidden lg:flex">
              <img src={pic1} alt="logo" className="w-96" />
            </div>
            <div
              id="right"
              className="flex flex-col items-start lg:items-stretch gap-14 lg:pr-20 p-5 lg:p-0"
            >
              <div className="flex flex-col lg:gap-5">
                <div className="flex flex-row-reverse lg:flex-row items-center">
                  <img className="w-40 lg:w-auto" src={mintHome} alt="mint" />
                  <p className="text-7xl lg:text-6xl text-primary lg:font-extrabold">
                    نعناع
                  </p>
                </div>
                <p className="text-4xl lg:text-2xl font-semibold lg:font-normal">
                  بوابتك الصحية الموثوقة
                </p>
              </div>
              <form className="flex flex-row-reverse">
                <input
                  className="pr-2 rounded-bl-lg rounded-tl-lg w-64 md:w-96 lg:w-96 h-12 border border-black"
                  type="search"
                  placeholder="ابحث عن طبيبك..."
                />
                <img
                  className="rounded-br-lg rounded-tr-lg bg-primary h-12 w-12 p-2 cursor-pointer"
                  src={search}
                  alt="search"
                />
              </form>
            </div>
          </div>

          {/* Cards */}
          <div className="relative bottom-10 lg:bottom-12 flex flex-row-reverse md:justify-center lg:items-center gap-x-2 lg:gap-14 p-2 lg:p-0">
            <div
              onClick={() => navigate("/articles")}
              className="flex flex-col justify-center items-center text-center gap-2 p-3 lg:gap-5 border-2 border-gray-300 w-1/3 md:w-[25%] lg:w-56 lg:h-72 bg-white rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300"
            >
              <img
                className="w-[50px] h-[50px] lg:h-auto lg:w-auto"
                src={blogLogo}
                alt="article"
              />
              <p className="text-sm lg:text-3xl text-primary">المقالات</p>
              <p className="text-xs">اقرأ احدث المقالات الطبية</p>
            </div>

            <div
              onClick={() => navigate("/pharmacy")}
              className="flex flex-col justify-center items-center text-center gap-2 p-3 lg:gap-5 border-2 border-gray-300 w-1/3 md:w-[25%] lg:w-56 lg:h-72 bg-white rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300"
            >
              <img
                className="w-[50px] h-[50px] lg:h-auto lg:w-auto"
                src={drugLogo}
                alt="drug"
              />
              <p className="text-sm lg:text-3xl text-primary">الصيدليات</p>
              <p className="text-xs">اكتشف اقرب الصيدليات في منطقتك</p>
            </div>

            <div
              onClick={() => navigate("/doctors")}
              className="flex flex-col justify-center items-center text-center gap-2 p-3 lg:gap-5 border-2 border-gray-300 w-1/3 md:w-[25%] lg:w-56 lg:h-72 bg-white rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300"
            >
              <img
                className="w-[50px] h-[50px] lg:h-auto lg:w-auto"
                src={medicineLogo}
                alt="medicine"
              />
              <p className="text-sm lg:text-3xl text-primary">الأطباء</p>
              <p className="text-xs"> احجز موعد عند طبيبك من منزلك</p>
            </div>
          </div>
        </div>
      </div>

      {/* pharmacies */}

      <div className="flex flex-row justify-center lg:items-center bg-secondary py-4 lg:py-16 rounded-xl lg:mt-10">
        {showMap ? (
          <div className="z-40 w-[100%] h-[100%] transform">
            <HomeMap />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="hidden lg:flex w-1/3">
              <img src={pic2} alt="pharmacy" />
            </div>
            <div className="flex flex-col justify-center items-center gap-10 lg:w-1/2 text-center">
              <p className="text-primary text-3xl font-semibold lg:text-5xl">
                لعرض الصيدليات المتواجدة في منطقتك اضغط على الزر
              </p>
              <button
                onClick={() => setShowMap(!showMap)}
                className="bg-primary text-white w-max p-3 px-5 rounded-lg hover:bg-green-800 hover:-translate-y-1 hover:scale-110 delay-150 duration-300"
              >
                عرض الصيدليات
              </button>
            </div>
          </div>
        )}
      </div>

      {/* articles */}
      <div className="flex flex-row items-center gap-5 text-  lg:text-3xl mt-10 lg:mt-20">
        <p className="text-xl lg:text-4xl">المقالات الاكثر قراءة</p>
        <hr className="h-[2px] w-32 lg:w-40 bg-primary" />
      </div>

      {/* article Card */}
      <div className="flex flex-row flex-wrap justify-around items-center gap-5 my-5 lg:my-0 lg:mt-10">
        {blogs?.slice(0, 3)?.map((blog) => (
          <div
            onClick={() => navigate(`/articles/${blog?._id}`)}
            className="flex flex-col justify-center gap-5 w-96 px-5 h-[550px] border shadow-lg drop-shadow-xl rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300"
          >
            <div
              className="h-56 bg-cover bg-center bg-no-repeat text-sm rounded-3xl border"
              style={{
                backgroundImage: `url(${`http://localhost:1000/${blog?.image}`})`,
              }}
            ></div>
            <p className="font-[500]">{blog?.title} </p>
            <div className="flex flex-row gap-2 text-right text-gray-400">
              <p>{blog?.category?.name}</p>
              <p>.</p>

              <p>{blog?.timeOfReading} </p>
            </div>
            <hr className="h-1 w-36 bg-primary" />
            <p className="text-sm line-clamp-3">{blog?.description}</p>
            <div className="flex flex-row justify-end items-center gap-2">
              <p
                onClick={() => navigate(`/articles/${blog?._id}`)}
                className="hover:underline cursor-pointer"
              >
                اقرأ المزيد{" "}
              </p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
