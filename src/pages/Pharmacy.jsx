import React from "react";
import { CiSearch } from "react-icons/ci";

import xx from "../assets/22.png";
function Pharmacy() {
  return (
    <div className="flex flex-col gap-5">
      <div className="md:flex md:justify-center md:items-center md:w-[60%]">
        <div className=" flex justify-center items-center  w-[100%] h-16  md:w-[60%]">
          <button className=" bg-primary rounded-r-lg border-y-2 border-r-2 flex justify-center items-center w-[10%] h-10">
            <CiSearch className=" text-white" />
          </button>
          <input
            className="  rounded-l-lg h-10 border-y-2 border-l-2 w-[60%] "
            type="search"
            placeholder="ابحث عن الصيدلية"
          />
        </div>
        <div className=" flex justify-center   md:w-[25%]">
          <select name="الاحياء" className=" w-[70%] border-2 rounded-lg  ">
            <option value="الحي"> الحي</option>
            <option value="الامير">الامير</option>
            <option value="القادسية ">القادسية </option>
            <option value="الزهراء">الزهراء</option>
            <option value="الحنانة">الحنانة</option>
            <option value="المكرمة">المكرمة</option>
            <option value="المعلمين ">المعلمين</option>
            <option value="السعد"> السعد</option>
            <option value="الانصار">الانصار</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-around mb-2">
        <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-48">
          <img
            className="w-24 h-20 md:w-48 md:h-36 rounded-2xl"
            src={xx}
            alt=""
          />
          <h2>صيدلية الكفاح</h2>
        </div>
        <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-48">
          <img
            className="w-24 h-20 md:w-48 md:h-36 rounded-2xl"
            src={xx}
            alt=""
          />
          <h2>صيدلية الكفاح</h2>
        </div>
        <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-48">
          <img
            className="w-24 h-20 md:w-48 md:h-36 rounded-2xl"
            src={xx}
            alt=""
          />
          <h2>صيدلية الكفاح</h2>
        </div>
        <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-48">
          <img
            className="w-24 h-20 md:w-48 md:h-36 rounded-2xl"
            src={xx}
            alt=""
          />
          <h2>صيدلية الكفاح</h2>
        </div>
        <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-48">
          <img
            className="w-24 h-20 md:w-48 md:h-36 rounded-2xl"
            src={xx}
            alt=""
          />
          <h2>صيدلية الكفاح</h2>
        </div>
        <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-48">
          <img
            className="w-24 h-20 md:w-48 md:h-36 rounded-2xl"
            src={xx}
            alt=""
          />
          <h2>صيدلية الكفاح</h2>
        </div>
        <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-48">
          <img
            className="w-24 h-20 md:w-48 md:h-36 rounded-2xl"
            src={xx}
            alt=""
          />
          <h2>صيدلية الكفاح</h2>
        </div>
      </div>
    </div>
  );
}

export default Pharmacy;
