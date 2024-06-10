import React from "react";
import img1 from "../assets/111.png";
import img2 from "../assets/bro.png";

function About() {
  return (
    <div>
      <div className="  flex justify-around h-[45vh] pt-10">
        <div className=" flex flex-col gap-10 w-[50%]">
          <h1 className="text-6xl mt-4 font-bold text-primary">نعناع </h1>
          <p className="text-2xl ">
            هو موقع للحجز مع الاطباء والطلب من الصيدليات ومعرفة الصيدليات
            القريبه منك وبعض النصائح والارشادات الطبية
          </p>
        </div>
        <div className="w-[350px] h-[350px]">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="h-[40vh] flex justify-around items-center">
        <img src={img2} alt="" />
        <p className="text-2xl w-[50%]">
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
