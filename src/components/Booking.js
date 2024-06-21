import React, { useEffect, useState } from "react";
import Calendar, { MonthView } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Booking({ booking, setbooking, drId }) {
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState();

  const disabledDates = [new Date(2024, 5, 21), new Date(2024, 5, 25)];

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year},${month},${day}`;
  };

  useEffect(() => {
    setDate(formatDate(value));
  }, [value]);

  // _________________

  const [time1, setTime1] = useState({
    hour: "4",
    minute: "12",
    period: "pm",
  });
  const [time2, setTime2] = useState({
    hour: "11",
    minute: "10",
    period: "pm",
  });
  const [interval, setInterval] = useState(25);
  const [resultTimes, setResultTimes] = useState([]);
  console.log("🚀 ~ Booking ~ resultTimes:", resultTimes);

  const formatTime = (time) => {
    return `${time.hour}:${time.minute} ${time.period}`;
  };

  const convertTo24Hour = (time) => {
    let hours = parseInt(time.hour, 10);
    if (time.period === "PM" && hours !== 12) {
      hours += 12;
    } else if (time.period === "AM" && hours === 12) {
      hours = 0;
    }
    return hours * 60 + parseInt(time.minute, 10);
  };

  const convertTo12Hour = (hours, minutes) => {
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    const minute = minutes.toString().padStart(2, "0");
    return { hour: hour12.toString(), minute, period };
  };

  const generateTimes = () => {
    const startMinutes = convertTo24Hour(time1);
    const endMinutes = convertTo24Hour(time2);
    const times = [];

    for (
      let minutes = startMinutes;
      minutes <= endMinutes;
      minutes += interval
    ) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const { hour, minute, period } = convertTo12Hour(hours, mins);
      times.push(`${hour}:${minute} ${period}`);
    }

    setResultTimes(times);
  };

  useEffect(() => {
    generateTimes();
  }, []);
  if (!booking) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-10 flex justify-center items-center ">
      <div className="  flex flex-col justify-center items-center md:mt-[5%]  bg-primary bg-opacity-20 p-3 rounded-md">
        <div className="m-3 mx-4">
          <input
            placeholder="الاسم "
            className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:text-black"
          />
          <input
            placeholder="العمر "
            className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:text-black"
          />{" "}
          <select className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:text-black">
            <option disabled hidden selected>
              الحنس
            </option>

            <option>ذكر</option>
            <option>انثئ</option>
          </select>
        </div>{" "}
        <Calendar
          className="m-auto text-xl mb-4 "
          onChange={setValue}
          value={value}
        />
        <div
          className="flex  justify-center gap-3 w-[400px] overflow-auto "
          id="scroll"
        >
          {resultTimes?.map((time) => (
            <button class=" border-2 border- rounded-lg  px-6 py-3 text-sm hover:border-primary cursor-pointer transition">
              {time}
            </button>
          ))}
        </div>{" "}
        <button
          onClick={() => {
            setbooking(!booking);
          }}
          className="bg-primary border-2 rounded-md border-primary w-96 my-5 text-xl text-white hover:bg-inherit  hover:border-2 hover:border-primary "
        >
          حجز
        </button>
      </div>
    </div>
  );
}

export default Booking;
