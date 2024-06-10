import React from "react";
import { CiSearch } from "react-icons/ci";

import xx from "../assets/12.png";
function Doctors() {
  return (
    <div className="flex  flex-col gap-5  ">
      <div className="flex  flex-wrap gap-10 justify-center md:justify-evenly md:items-center md:gap-0 md:w-[100%]   pt-10">
        <div className=" flex  items-center   h-12  w-[350px] md:w-[400px] md:mr-5 ">
          <button className=" bg-primary rounded-r-lg border-y-2 border-r-2 flex justify-center items-center w-[10%] h-12">
            <CiSearch className=" text-white" />
          </button>
          <input
            className="  rounded-l-lg h-12  border-y-2 border-l-2 w-[100%] "
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
              <option value="المحافظة"> المحافظة </option>
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
              <option value="التخصص"> التخصص </option>
              <option value="1">انف واذن وحنجرة</option>
              <option value="2 ">باطنية </option>
              <option value="3">قلبية </option>
              <option value="4">اطفال</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" flex justify-around  w-[100%]">
        <div className="flex flex-wrap gap-5 gap-y-5 md:w-[83%] md:mr-4 justify-around mb-2">
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:w-[150px] md:h-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2> الدكتور حمزة</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:w-[150px] md:h-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2> الدكتور حمزة</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:w-[150px] md:h-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2> الدكتور حمزة</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:w-[150px] md:h-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2> الدكتور حمزة</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:w-[150px] md:h-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2> الدكتور حمزة</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:w-[150px] md:h-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2> الدكتور حمزة</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:w-[150px] md:h-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2> الدكتور حمزة</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:w-[150px] md:h-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2> الدكتور حمزة</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
