import React from "react";
import { CiSearch } from "react-icons/ci";

import xx from "../assets/22.png";
function Pharmacy() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-10 justify-center md:justify-evenly md:items-center  md:w-[70%]  pt-10">
        <div className=" flex  items-center  w-[350px] h-12   md:w-[400px]">
          <button className=" bg-primary rounded-r-lg  border-y-2 border-r-2 flex justify-center items-center w-[10%] h-12">
            <CiSearch className=" text-white" />
          </button>
          <input
            className="  rounded-l-lg h-12 border-y-2 border-l-2 w-[100%] "
            type="search"
            placeholder="ابحث عن الصيدلية"
          />
        </div>
        <div className=" flex justify-center items-center  h-12  w-[90%] md:w-[15%] ">
          <select
            name="الاحياء"
            className=" w-[100%] h-12 border-2 rounded-lg  "
          >
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

      <div className="flex justify-around  w-[100%] flex-wrap pt-10 pb-10">
        <div className="flex flex-wrap gap-5 gap-y-5 md:w-[83%] md:mr-4 justify-around mb-2">
          <div className="border-2 w-32 h-32 bg-secondary  flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:h-[150px] md:w-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2>صيدلية الكفاح</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:h-[150px] md:w-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2>صيدلية الكفاح</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:h-[150px] md:w-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2>صيدلية الكفاح</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:h-[150px] md:w-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2>صيدلية الكفاح</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:h-[150px] md:w-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2>صيدلية الكفاح</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:h-[150px] md:w-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2>صيدلية الكفاح</h2>
          </div>
          <div className="border-2 w-32 h-32 bg-secondary flex justify-center items-center flex-col md:w-60 md:h-60">
            <img
              className="w-24 h-20 md:h-[150px] md:w-[150px] rounded-2xl"
              src={xx}
              alt=""
            />
            <h2>صيدلية الكفاح</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmacy;
