import React from "react";
import Doctorimg from "../assets/pearson.jpg";
import mapimg from "../assets/map 1.png";
function DoctorsLocation() {
  return (
    <div className="h-full w-full pt-8 pb-4 gap-5  flex flex-col items-center justify-center">
      <div className="w-[90%] h-auto pt-2 bg-secondary rounded-2xl flex flex-col items-center justify-center lg:hidden">
        <div className="w-full h-[40%]">
          <img src={Doctorimg} className="w-[50%] mx-auto rounded-2xl" alt="" />
        </div>
        <div className="w-full text-center text-lg h-[60%] pt-4 pb-5 text-black font-semibold leading-[50px]">
          <p>الدكتور:امير الميساني</p>
          <p className="break-words"> المكان :الكريد لاين - ارخبيل شابوندي</p>
          <p className="break-words"> اوقات الدوام: حسب المزاج</p>
          <p className="break-words pb-5"> رقم الهاتف : 000777555</p>

          <button className="w-36 h-12 rounded-xl font-semibold text-white bg-primary hover:bg-green-100 hover:text-primary hover:border-2 hover:border-primary">
            مراسلة
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center pb-8 lg:hidden">
        <img src={mapimg} className="w-[87%]" alt="" />
      </div>

      <div className="hidden lg:flex  lg:w-[70%] lg:mx-auto lg:bg-secondary pl-1 lg:h-auto lg:py-2 mb-14 lg:rounded-2xl">
        <div className="lg:flex lg:flex-col lg:gap-6 lg:items-center lg:justify-center lg:w-[40%] lg:text-2xl lg:text-center lg:font-medium ">
          <img src={Doctorimg} className="w-[60%] rounded-2xl" alt="" />
          <p>الدكتور:امير الميساني</p>
          <p className="break-words"> المكان :الكريد لاين - ارخبيل شابوندي</p>
          <p className="break-words"> اوقات الدوام: حسب المزاج</p>
          <p className="break-words pb-5"> رقم الهاتف : 000777555</p>
          <button className="w-52 px-5 h-12 hover:px-5 hover:py-2 hover:w-52 rounded-xl font-semibold text-white bg-primary hover:bg-green-100 hover:text-primary hover:border-2 hover:border-primary">
            مراسلة
          </button>
        </div>
        <div className="lg:w-[60%] lg:h-auto order-2 flex items-center justify-center">
          <img src={mapimg} className="w-[100%]" alt="" />
        </div>
      </div>

      <div className="w-full h-[3px] bg-black ">-</div>
    </div>
  );
}

export default DoctorsLocation;
