import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, getBooking } from "../store/booking/bookingSlice";
import { toast, ToastContainer } from "react-toastify";

function Booking({ booking, setbooking, drId, setisbooking }) {
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState();
  const [disabledTimes, setDisabledTimes] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();
  const bookingDate = useSelector((state) => state.booking.data);
  const drfilter = bookingDate.filter((dr) => dr.doctor === drId);
  console.log("🚀 ~ Booking ~ drfilter:", drfilter);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setDate(formatDate(value));
  }, [value]);

  useEffect(() => {
    if (date) {
      const filteredBookings = drfilter?.filter(
        (booking) => booking.date === date
      );
      const bookedTimes = filteredBookings?.map((booking) => booking.time);
      setDisabledTimes(bookedTimes);
    }
  }, [date, bookingDate, refresh]);

  useEffect(() => {
    dispatch(getBooking(drId));
  }, [dispatch, drId]);

  const [time1, setTime1] = useState({
    hour: "4",
    minute: "12",
    period: "PM",
  });
  const [time2, setTime2] = useState({
    hour: "11",
    minute: "10",
    period: "PM",
  });
  const [interval, setInterval] = useState(25);
  const [resultTimes, setResultTimes] = useState([]);

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
  }, [time1, time2, interval]);

  useEffect(() => {
    const updateResultTimes = () => {
      if (disabledTimes?.length > 0) {
        const newResultTimes = resultTimes.filter(
          (time) => !disabledTimes.includes(time)
        );
        setResultTimes(newResultTimes);
      } else {
        generateTimes();
      }
    };
    updateResultTimes();
  }, [disabledTimes, date, refresh]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [valueTime, setValueTime] = useState("");
  const token =
    localStorage.getItem("Token") || sessionStorage.getItem("Token");
  const info = {
    time: valueTime,
    date: date,
    doctor: drId,
    age: age,
    gender: gender,
    name: name,
  };

  const handleBooking = () => {
    setbooking(!booking);
    dispatch(addBooking({ info, token })).then(() => {
      setRefresh(!refresh);
    });
  };

  if (!booking) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-10 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center md:mt-[5%] bg-secondary p-3 rounded-lg">
        <div className="m-3 mx-4">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="الاسم"
            className="border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50 placeholder:text-black"
          />
          <input
            onChange={(e) => setAge(e.target.value)}
            placeholder="العمر"
            className="border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50 placeholder:text-black"
          />
          <select
            onChange={(e) => setGender(e.target.value)}
            className="border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50 placeholder:text-black"
          >
            <option disabled hidden selected>
              الجنس
            </option>
            <option value={"ذكر"}>ذكر</option>
            <option value={"أنثى"}>أنثى</option>
          </select>
        </div>
        <Calendar
          className="m-auto text-xl mb-4"
          onChange={setValue}
          value={value}
        />
        <div
          className="flex justify-center gap-3 w-[400px] overflow-auto"
          id="scroll"
        >
          {resultTimes.map((time) =>
            disabledTimes?.includes(time) ? (
              <span
                key={time}
                className="border-2 rounded-lg px-6 py-3 text-sm border-red-500 cursor-not-allowed"
              >
                {time}
              </span>
            ) : (
              <button
                key={time}
                value={time}
                onClick={(e) => setValueTime(e.target.value)}
                disabled={disabledTimes.includes(time)}
                className={`border-2 rounded-lg px-6 py-3 text-sm hover:border-primary cursor-pointer transition ${
                  disabledTimes.includes(time) ? " cursor-not-allowed" : ""
                }`}
              >
                {time}
              </button>
            )
          )}
        </div>
        <button
          onClick={handleBooking}
          className="bg-primary border-2 rounded-md border-primary w-96 my-5 text-xl text-white hover:bg-inherit hover:text-primary hover:border-2 hover:border-primary"
        >
          حجز
        </button>
        <button
          onClick={() => {
            setbooking(!booking);
            setisbooking(true);
          }}
          className="bg-primary border-2 rounded-md border-primary w-96 my- text-xl text-white hover:bg-inherit hover:text-primary hover:border-2 hover:border-primary"
        >
          رجوع
        </button>
      </div>
    </div>
  );
}

export default Booking;
