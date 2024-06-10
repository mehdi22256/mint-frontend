import { useState } from "react";
import pharamacyimg from "../assets/pharmacy 1.png";
import mapimg from "../assets/map 1.png";
import abohamzaimg from "../assets/pearson.jpg";
function Pharamacypage() {
  const [comment, setcomment] = useState("");

  function handelcomment(e) {
    setcomment(e.target.value);
  }

  return (
    <div className="h-full w-full pt-8 pb-4 gap-5  flex flex-col items-center justify-center">
      <div className="w-[90%] h-auto pt-2 bg-secondary rounded-2xl flex flex-col items-center justify-center lg:hidden">
        <div className="w-full h-[40%]">
          <img src={pharamacyimg} className="w-[50%] mx-auto" alt="" />
        </div>
        <div className="w-full text-center text-lg h-[60%] pt-4 pb-5 text-black font-semibold leading-[50px]">
          <p>صيدلية الكفاح </p>
          <p className="break-words">
            {" "}
            المكان :النجف الاشرف - مجمع الاميرات السكني
          </p>
          <p className="break-words"> اوقات الدوام: حسب المزاج</p>
          <p className="break-words pb-5"> رقم الهاتف : 000777555</p>

          <button className="w-36 rounded-xl font-semibold text-white bg-primary hover:bg-green-100 hover:text-primary hover:border-2 hover:border-primary">
            مراسلة
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center pb-8 lg:hidden">
        <img src={mapimg} className="w-[87%]" alt="" />
      </div>

      <div className="hidden lg:flex  lg:w-[70%] lg:mx-auto lg:bg-secondary pl-1 lg:h-auto lg:py-2 mb-14 lg:rounded-2xl">
        <div className="lg:flex lg:flex-col lg:gap-6 lg:items-center lg:justify-center lg:w-[40%] lg:text-2xl lg:text-center lg:font-medium ">
          <img src={pharamacyimg} className="w-[60%]" alt="" />
          <p>صيدلية الكفاح </p>
          <p className="break-words">
            {" "}
            المكان :النجف الاشرف - مجمع الاميرات السكني
          </p>
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

      <div className="w-full h-[2px] bg-black">-</div>

      <div className="h-auto w-full flex flex-col gap-5  md:gap-9 lg:gap-11 xl:gap-14 relative  mb-5 pb-6">
        <div className=" w-full h-auto flex justify-end">
          <div className="w-[20%] flex items-center justify-center absolute right-0">
            <img
              src={abohamzaimg}
              className="w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] mt-2 rounded-full"
              alt="ابو حمزة"
            />
          </div>
          <div className=" h-20 w-[80%] xl:ml-20 flex flex-col justify-center">
            <p className="h-9 font-bold text-lg text-primary">ابو حمزة</p>
            <p className="text-xs font-semibold break-words pl-3 overflow-hidden">
              حلووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووو
            </p>
          </div>
        </div>

        <div className=" w-full h-auto flex justify-end">
          <div className="w-[20%] flex items-center justify-center absolute right-0">
            <img
              src={abohamzaimg}
              className="w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] mt-2 rounded-full"
              alt="ابو حمزة"
            />
          </div>
          <div className=" h-20 w-[80%] xl:ml-20 flex flex-col justify-center">
            <p className="h-9 font-bold text-lg text-primary">ابو حمزة</p>
            <p className="text-xs font-semibold break-words pl-3 overflow-hidden">
              حلووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووو
            </p>
          </div>
        </div>

        <div className=" w-full h-auto flex justify-end">
          <div className="w-[20%] flex items-center justify-center absolute right-0">
            <img
              src={abohamzaimg}
              className="w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] mt-2 rounded-full"
              alt="ابو حمزة"
            />
          </div>
          <div className="h-20 w-[80%] xl:ml-20 flex flex-col justify-center">
            <p className="h-9  font-bold text-lg text-primary">ابو حمزة</p>
            <p className="text-xs font-semibold break-words pl-3 overflow-hidden ">
              حلووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووو
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end pt-10 gap-4 relative">
          <img
            className="absolute right-5 top-8 md:absolute md:right-10 lg:right-12 w-[10%] lg:w-[5%] mt-2 rounded-full"
            src={abohamzaimg}
            alt=""
          />
          <textarea
            value={comment}
            onChange={handelcomment}
            className="text-primary bg-secondary w-[80%] lg:w-[70%]  ml-auto mr-20  md:w-[70%] md:mr-40 h-36 rounded-2xl p-4 placeholder:font-semibold placeholder:text-primary"
            placeholder="اكتب تعليقك هنا..."
            name=""
            id=""
          ></textarea>
          <button className="w-[80%] h-12 py-2 font-bold text-lg ml-auto mr-20 md:w-[70%]  lg:w-[70%] text-white bg-primary rounded-2xl hover:bg-green-100 hover:text-primary hover:border-2 hover:border-primary ">
            نشر
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pharamacypage;
