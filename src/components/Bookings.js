import { useSelector } from "react-redux";

const Bookings = () => {
  const Booking = useSelector((state) => state.booking.data);
  const user = useSelector((state) => state.user.data);
  console.log("🚀 ~ Bookings ~ user:", user);
  const bookingFilter = Booking?.filter(
    (drbooking) => drbooking.doctor == user.id
  );

  return (
    <div>
      <div className="flex flex-row items-center justify-around m-auto gap-7 lg:gap-0 text-primary w-max lg:w-auto lg:text-xl font-bold mt-10 lg:pr-32">
        <p>اسم المريض</p>
        <p>جنس المريض</p>
        <p>وقت الحجز</p>
        <p>تاريخ الحجز</p>
      </div>
      <div className="flex flex-col-reverse lg:mt-10 gap-3">
        {bookingFilter?.map((item) => (
          <div>
            <div className="flex flex-row items-center justify-between m-auto text-sm lg:text-lg font-bold w-full lg:ml-16 lg:w-[900px] bg-secondary my-3 lg:my-auto px-9 lg:px-10 rounded-lg">
              <p>{item.name}</p>
              <p className="ml-8 lg:ml-10">{item.gender}</p>
              <p>{item.time}</p>
              <p>{item.date}</p>
            </div>
            <div className="hidden lg:flex flex-row-reverse items-center justify-center gap-5 pr-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
