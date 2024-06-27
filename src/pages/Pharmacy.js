import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { getPharmacist } from "../store/user/userSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

function Pharmacy() {
  const navigate = useNavigate();
  const [gov, setGov] = useState("null");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const value = event.target.value === "null" ? null : event.target.value;
    setGov(value);
    console.log(value); // سيتحول إلى null عند اختيار "الكل"
  };
  let info = { governorate: gov };

  useEffect(() => {
    dispatch(getPharmacist({ info }));
  }, [dispatch, gov]);

  const userdata = useSelector((state) => state?.user?.pharmacist);
  console.log("🚀 ~ Pharmacy ~ userdata:", userdata);

  const filteredData = userdata?.filter((pharmacist) =>
    `${pharmacist.firstName} ${pharmacist.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center ">
      {!userdata ? (
        <div className="h-[80%] m-72 sm:m-3 md:m-12">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col justify-between mx-10">
          <div className="md:flex md:justify-around md:items-center md:w-[100%]">
            <div className="flex justify-center items-center w-[100%] h-16 md:w-[48%]">
              <input
                className="rounded-lg h-10 border-2 w-[70%] md:w-[60%] placeholder:px-6"
                type="search"
                placeholder="ابحث عن الصيدلية"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between w-[90%] md:w-[42%]">
              <div className="w-[45%]">
                <select
                  name="المحافظة"
                  className="w-[100%] md:h-10 border-2 rounded-lg"
                  onChange={(e) => setGov(e.target.value)}
                >
                  <option value="المحافظة" disabled selected hidden>
                    الحي
                  </option>
                  <option value="null">الكل</option>

                  <option value="حي ميسان">حي ميسان</option>
                  <option value="حي كندة">حي كندة</option>
                  <option value="17 نموز">17 تموز</option>
                  <option value="حي المتنبي">حي المتنبي</option>
                  <option value="شارع المثنئ">شارع المثنئ</option>
                  <option value="شارع الاسكان">شارع الاسكان</option>
                  <option value="شارع الاشتراكي">شارع الاشتراكي</option>
                  <option value="ابو صخير">ابو صخير</option>
                  <option value="حي النداء">حي النداء</option>
                  <option value="حي الامير">حي الامير</option>
                  <option value="حي الانصار">حي الانصار</option>
                  <option value="حي الحسين">حي الحسين</option>
                  <option value="حي العسكري">حي العسكري</option>
                  <option value="حي الغدير">حي الغدير</option>
                  <option value="حي الميلاد">حي الميلاد</option>
                  <option value="حي الجامعة">حي الجامعة</option>
                  <option value="حي الوفاء">حي الوفاء</option>
                  <option value="حي المكرمة">حي المكرمة</option>
                  <option value="حي الجزيرة">حي الجزيرة</option>
                  <option value="حي الرسالة">حي الرسالة</option>
                  <option value="حي الشرطة">حي الشرطة</option>
                  <option value="حي الإسكان">حي الإسكان</option>
                  <option value="حي النصر">حي النصر</option>
                  <option value="حي الفرات">حي الفرات</option>
                  <option value="حي الزهراء">حي الزهراء</option>
                  <option value="حي المعلمين">حي المعلمين</option>
                  <option value="حي الجمهورية">حي الجمهورية</option>
                  <option value="حي الشهداء">حي الشهداء</option>
                  <option value="حي الكرامة">حي الكرامة</option>
                  <option value="حي الاسكان">حي الاسكان</option>
                </select>
              </div>
              <div className="w-[45%]"></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-24 justify-center mt-20 mb-10">
            {filteredData?.map((pharmacist) => (
              <div
                key={pharmacist._id}
                onClick={() => navigate(`/pharmacy/${pharmacist._id}`)}
                className="w-[220px] h-[220px] bg-secondary rounded-md flex justify-center relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300"
              >
                <div className="w-[170px] h-[170px] rounded-full overflow-hidden absolute top-[-65px] shadow-lg">
                  <img
                    src={`${pharmacist.image}`}
                    alt="xx"
                    className="w-full h-full object-cover object-top "
                  />
                </div>
                <div className="mt-[55%]">
                  <h1 className="text-lg font-bold">
                    {pharmacist.firstName} {pharmacist.lastName}
                  </h1>
                  <p className="text-center flex justify-center items-center">
                    <FaLocationDot className="text-xs mx-1 text-primary" />
                    {pharmacist.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pharmacy;
