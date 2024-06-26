import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Doctorimg from "../assets/pearson.jpg";
import Loading from "../components/Loading";
import Booking from "../components/Booking";
import Chat from "../components/Chat";
import Comment from "../components/Comment";
import HomeMap from "../components/HomeMap";
import PageMap from "../components/PageMap";

function DoctorsLocation() {
  const { _id } = useParams();
  const [booking, setBooking] = useState(false);
  const [isChating, setIsChating] = useState(false);
  const [getDoctor, setGetDoctor] = useState(null);
  console.log("🚀 ~ DoctorsLocation ~ getDoctor:", getDoctor);

  const allDoctors = useSelector((state) => state.user?.users);

  useEffect(() => {
    const doctor = allDoctors?.find((dr) => dr._id === _id);
    setGetDoctor(doctor);
  }, [_id, allDoctors]);

  if (!getDoctor) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="h-full w-full pt-8 gap-5 flex flex-col items-center justify-center">
      <div className="w-[90%] h-auto pt-2 bg-secondary rounded-2xl flex flex-col items-center justify-center lg:hidden">
        <div className="w-full h-[40%]">
          <img
            className="w-[50%] mx-auto rounded-2xl"
            alt={getDoctor?.firstName}
            src={getDoctor?.image ? `${getDoctor?.image}` : Doctorimg}
          />
        </div>
        <div className="w-full text-center text-lg h-[60%] pt-4 text-black font-semibold leading-[50px]">
          <p>
            الدكتور: {getDoctor?.firstName} {getDoctor?.lastName}
          </p>
          <p className="break-words">
            المكان: {getDoctor?.governorate}/{getDoctor?.clinicLocation}
          </p>
          <p className="break-words">أوقات الدوام: حسب المزاج</p>
          <p className="break-words pb-5">رقم الهاتف: 000777555</p>
          <button
            onClick={() => setIsChating(!isChating)}
            className=" bg-primary text-white  px-6 rounded-md ml-3 hover:bg-white hover:text-primary border-2 border-primary "
          >
            مراسلة
          </button>
          <button
            onClick={() => setBooking(!booking)}
            className=" bg-primary text-white  px-6 rounded-md ml-3 hover:bg-white hover:text-primary border-2 border-primary "
          >
            حجز
          </button>
          <Booking booking={booking} setbooking={setBooking} drId={_id} />
        </div>
      </div>

      <div className="w-full flex items-center justify-center pb-8 lg:hidden">
        <img
          src={getDoctor?.image ? `${getDoctor?.image}` : Doctorimg}
          className="w-[87%]"
          alt={getDoctor?.firstName}
        />
        <div className="w-[90%] flex items-center justify-center pb-8 lg:hidden">
          <PageMap id={_id} />
        </div>

        <div className="hidden lg:flex lg:w-[70%] lg:mx-auto lg:bg-secondary pl-1 lg:h-auto lg:py-2 mb-14 lg:rounded-2xl">
          <div className="lg:flex lg:flex-col lg:gap-6 lg:items-center lg:justify-center lg:w-[40%] lg:text-2xl lg:text-center lg:font-medium ">
            <img
              src={getDoctor?.image ? `${getDoctor?.image}` : Doctorimg}
              className="w-[60%] rounded-2xl"
              alt={getDoctor?.firstName}
            />
            <p>
              الدكتور: {getDoctor?.firstName} {getDoctor?.lastName}
            </p>
            <p className="break-words">
              المكان: {getDoctor?.governorate}/{getDoctor?.clinicLocation}
            </p>
            <p className="break-words">أيام الإجازة: {getDoctor?.holidays}</p>
            <p className="break-words pb-5">
              أرقام الهاتف: {getDoctor?.phoneNumber}
            </p>
            <div className="flex flex-row gap-2">
              <button
                onClick={() => setIsChating(!isChating)}
                className="w-32 px-5 h-12 hover:px-5 hover:py-2 rounded-xl font-semibold text-white bg-primary hover:bg-green-100 hover:text-primary hover:border-2 hover:border-primary"
              >
                مراسلة
              </button>
              <button
                onClick={() => setBooking(!booking)}
                className="w-32 px-5 h-12 hover:px-5 hover:py-2 rounded-xl font-semibold text-white bg-primary hover:bg-green-100 hover:text-primary hover:border-2 hover:border-primary"
              >
                حجز
              </button>
            </div>
          </div>
          <div className="-z-0 lg:w-[100%] lg:h-auto order-2 flex items-center justify-center">
            <PageMap id={_id} />
          </div>
          <div className="z-10">
            <Booking booking={booking} setbooking={setBooking} drId={_id} />
          </div>
        </div>

        <Chat
          isChating={isChating}
          setIsChating={setIsChating}
          doctor={getDoctor}
        />
        <Comment _id={_id} />
      </div>
    </div>
  );
}

export default DoctorsLocation;
