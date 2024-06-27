import React from "react";
import img1 from "../assets/444.png";
import img2 from "../assets/555.png";
import mustafa from "../assets/2.jpg";
import ameer from "../assets/ameerimg.png";
import moh from "../assets/moh.jpg";
import { MdEmail } from "react-icons/md";
import mehdi from "../assets/frame.jpg";
function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-14 md:pt-12 md:pb-36 ">
      <div className="md:flex w-[90%] items-center gap-10  ">
        <div className="flex flex-col  md:w-[70%] ">
          <h1 className="text-primary m-4 font-bold text-4xl  md:text-7xl">
            نعناع
          </h1>
          <p className="lg:m-4 text-lg text-[20px] text-justify md:text-2xl  md:leading-[60px]">
            هو موقع للحجز مع الاطباء والطلب من الصيدليات ومعرفة الصيدليات
            القريبه منك وبعض النصائح والارشادات الطبية
          </p>
        </div>
        <div className="w-[300px] h-[300px] md:w-[30%] md:pt-10 flex items-center justify-end">
          <img src={img1} alt="" className="md:w-[100%]" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-10  w-[90%]">
        <div className="lg:w-[30%] lg:pr-5">
          <img className="w-full h-full  md:w-[100%] " src={img2} alt="" />
        </div>
        <div className="lg:w-[70%] ">
          <p className="text-[20px] text-justify md:w-[90%] md:leading-[60px] md:text-2xl ">
            هذا الموقع يعالج الزخم الموجود عند الطبيب او عدم معرفة مكانه
            ومساعدته في الحجز للمريض الذي يحتاج للمراجعة ا ضافه الى التحدث مع
            الصيدليات للاستفسار عن علاج وطلبة اذا كان متوفر واوقات دوام الصيدلية
            هناك بعض النصائح الطبية من قبل اطباء مختصين في حال احتجت الى شي{" "}
          </p>
        </div>
      </div>
      <div className="p-5 md:w-[90%]  ">
        <div className="flex  flex-col md:flex-row justify-between gap-5 ">
          {/* <div className="border-2 flex flex-col items-center pt-4 border-primary bg-primary w-72 h-[350px] rounded-2xl">
          <div className="w-44 rounded-[50%] ">
          <img className="rounded-[50%] w-44 h-44 " src={mustafa} alt="" />
          </div>
          <div className="text-white text-center  ">
          <h1 className="text-2xl font-bold">Mustafa Ahmed</h1>
          <h4 className="text-xl">full wep stack dev</h4>
          <h2>Email : mustafa123@gmail.com</h2>
          </div>
          </div> */}
          <div className="border-2 flex flex-col items-center pt-4 border-[#CEEBD8] bg-[#CEEBD8] w-72 h-[350px] rounded-2xl">
            <div>
              <img
                className="rounded-[50%] w-44 h-44 object-cover "
                src={ameer}
                alt=""
              />
            </div>
            <div className=" text-center leading-10 ">
              <h1 className="text-[24px] font-bold">Ameer Ahmed</h1>
              <h4 className="text-[20px]">Full Stack Developer</h4>
              <a
                className="flex justify-center"
                href="mailto:ameerahmed202397@gmail.com"
              >
                <MdEmail className="w-20 h-10" />
              </a>
            </div>
          </div>
          <div className="border-2 flex flex-col items-center pt-4 border-[#CEEBD8] bg-[#CEEBD8] w-72 h-[350px] rounded-2xl">
            <div>
              <img
                className="rounded-[50%] w-44 h-44 object-cover "
                src={mehdi}
                alt=""
              />
            </div>
            <div className=" text-center leading-10 ">
              <h1 className="text-[24px] font-bold"> Mehdi Salih</h1>
              <h4 className="text-[20px]">Full Stack Developer</h4>
              <a
                className="flex justify-center"
                href="mailto:mehdi22256@gmail.com"
              >
                <MdEmail className="w-20 h-10" />
              </a>
            </div>
          </div>
          <div className="border-2 flex flex-col items-center pt-4 border-[#CEEBD8] bg-[#CEEBD8] w-72 h-[350px] rounded-2xl">
            <div>
              <img
                className="rounded-[50%] w-44 h-44 object-cover "
                src={mustafa}
                alt=""
              />
            </div>
            <div className=" text-center leading-10 ">
              <h1 className="text-[24px] font-bold">Mustafa Ahmed</h1>
              <h4 className="text-[20px]">Full Stack Developer</h4>
              <a
                className="flex justify-center"
                href="mailto:mustafa0780500@gmail.com"
              >
                <MdEmail className="w-20 h-10" />
              </a>
            </div>
          </div>
          <div className="border-2 flex flex-col items-center pt-4 border-[#CEEBD8] bg-[#CEEBD8] w-72 h-[350px] rounded-2xl">
            <div>
              <img
                className="rounded-[50%] w-44 h-44 object-cover "
                src={moh}
                alt=""
              />
            </div>
            <div className=" text-center leading-10 ">
              <h1 className="text-[24px] font-bold">mohamed ali alhelo</h1>
              <h4 className="text-[20px]">Full Stack Developer</h4>
              <a
                className="flex justify-center"
                href="mohamedalhelo909@gmail.com"
              >
                <MdEmail className="w-20 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
