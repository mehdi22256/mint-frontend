const Bookings = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-around m-auto gap-7 lg:gap-0 text-primary w-max lg:w-auto lg:text-xl font-bold mt-10 lg:pr-32">
        <p>اسم المريض</p>
        <p>جنس المريض</p>
        <p>وقت الحجز</p>
      </div>
      <div className="flex flex-row-reverse lg:mt-10">
        <div className="flex flex-row items-center justify-between m-auto text-sm lg:text-lg font-bold w-full lg:w-[900px] bg-secondary my-3 lg:my-auto px-9 lg:px-10 rounded-lg">
          <p>جاسم الجاسمي</p>
          <p className="ml-8 lg:ml-10">ذكر</p>
          <p>12:00</p>
        </div>
        <div className="hidden lg:flex flex-row-reverse items-center justify-center gap-5 pr-3">
          <button className="bg-green-700 p-1 text-white hover:bg-green-800 rounded-lg">
            موافقة
          </button>
          <button className="bg-red-700 p-1 text-white hover:bg-red-800 rounded-lg">
            رفض
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
