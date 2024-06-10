import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import xx from "../assets/12.png";
import jasem from "../assets/doctor-j.jpg";
function Doctors() {
  return (
    <div className="flex flex-col justify-between mx-10 ">
      <div className="md:flex md:justify-around md:items-center  md:w-[100%]">
        <div className=" flex justify-center items-center  w-[100%] h-16  md:w-[48%]">
          <button className=" bg-primary rounded-r-lg border-y-2 border-r-2 flex justify-center items-center w-[50px] h-10">
            <CiSearch className=" text-white text-xl " />
          </button>
          <input
            className="  rounded-l-lg h-10 border-y-2 border-l-2 w-[70%] md:w-[60%] placeholder:px-6 "
            type="search"
            placeholder="ابحث عن اسم الدكتور "
          />
        </div>
        <div className="flex  justify-between  w-[90%] md:w-[42%] ">
          <div className="  w-[45%] ">
            <select
              name="المحافظة"
              className="w-[100%] md:h-10 border-2 rounded-lg  "
            >
              <option value="المحافظة" disabled>
                {" "}
                المحافظة{" "}
              </option>
              <option value="النجف"> النجف </option>
              <option value="الديوانية">الديوانية</option>
              <option value="الحلة  ">الحلة </option>
              <option value="كربلاء">كربلاء</option>
              <option value="الناصرية">الناصرية</option>
              <option value="السماوة">السماوة</option>
              <option value="بغداد ">بغداد</option>
              <option value="البصرة"> البصرة</option>
              <option value="الفلوجة">الفلوجة</option>
            </select>
          </div>
          <div className=" w-[45%] ">
            <select
              name="المحافظة"
              className="w-[100%] md:h-10 border-2 rounded-lg  "
            >
              <option value="التخصص" disabled>
                {" "}
                التخصص{" "}
              </option>
              <option value="1">انف واذن وحنجرة</option>
              <option value="2 ">باطنية </option>
              <option value="3">قلبية </option>
              <option value="4">اطفال</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex  flex-wrap gap-24 justify-center mt-20 mb-10 ">
        <div className="w-[220px] h-[220px] bg-secondary rounded-md flex  justify-center relative  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300">
          <div className="w-[170px] h-[170px] rounded-full overflow-hidden absolute top-[-65px] shadow-lg">
            <img src={xx} className="w-full h-full object-cover object-top " />
          </div>
          <div className="mt-[55%] ">
            <h1 className="text-lg font-bold">الدكتور حمزة الحامزي</h1>
            <p className="text-center flex justify-center items-center">
              <FaLocationDot className="text-xs mx-1 text-primary " />
              النجف حي السلام{" "}
            </p>
          </div>
        </div>
        <div className="w-[220px] h-[220px] bg-secondary rounded-md flex  justify-center relative  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300">
          <div className="w-[170px] h-[170px] rounded-full overflow-hidden absolute top-[-65px] shadow-lg">
            <img
              src={jasem}
              className="w-full h-full object-cover object-top "
            />
          </div>
          <div className="mt-[55%] ">
            <h1 className="text-lg font-bold"> الدكتور جاسم الحاسمي</h1>
            <p className="text-center flex justify-center items-center">
              <FaLocationDot className="text-xs mx-1 text-primary " />
              النجف حي الاسكان{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
