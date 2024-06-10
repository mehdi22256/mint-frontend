import React from "react";
import img1 from "../assets/111.png";
import img2 from "../assets/bro.png";

function About() {
  return (
    <div>
      <div className="md:flex md:justify-evenly items-center gap-10 ">
        <div className="flex flex-col  md:w-[50%]">
          <h1 className="text-primary m-4 font-bold text-2xl md:text-6xl ">
            نعناع
          </h1>
          <p className="m-4 text-lg md:text-2xl">
            هو موقع للحجز مع الاطباء والطلب من الصيدليات ومعرفة الصيدليات
            القريبه منك وبعض النصائح والارشادات الطبية
          </p>
        </div>
        <div className="w-[350px] h-[350px] md:w-[450px] md:pt-10 ">
          <img src={img1} alt="" />
        </div>
      </div>

      <div className="flex flex-col-reverse m-4 md:flex-row justify-around items-center gap-10 ">
        <img className="w-[350px] h-[350px] md:w-[450px] " src={img2} alt="" />
        <p className="text-lg md:w-[50%] md:text-2xl">
          هذا الموقع يعالج الزخم الموجود عند الطبيب او عدم معرفة مكانه ومساعدته
          في الحجز للمريض الذي يحتاج للمراجعة ا ضافه الى التحدث مع الصيدليات
          للاستفسار عن علاج وطلبة اذا كان متوفر واوقات دوام الصيدلية هناك بعض
          النصائح الطبية من قبل اطباء مختصين في حال احتجت الى شي{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
