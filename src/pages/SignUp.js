import React, { useEffect, useState } from "react";
import image from "../assets/sigin-up.png";
import Map from "../components/Map";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddAPhoto } from "react-icons/md";
import { signup } from "../store/user/userSlice";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    password: "",
    role: "customer",
    city: "",
    clinicLocation: "",
    phoneNumber: "",
    holidays: "",
    startTime: "",
    age: "",
    endTime: "",
    expectedMinutes: "",
  });
  const [personImage, setPersonImage] = useState("");
  const [certificate, setcertificate] = useState("");

  const [showMap, setShowMap] = useState(false);
  const [location, setlocation] = useState({
    latitude: null,
    longitude: null,
  });
  console.log(location);

  const map = () => setShowMap(!showMap);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [confirmPassword, setconfirmPassword] = useState("");
  const dispatch = useDispatch();
  const latitude = location.latitude;
  const longitude = location.longitude;
  const post = { formData, personImage, certificate, latitude, longitude };
  const handleSignUp = () => {
    if (
      !formData.username ||
      !formData.password ||
      !formData.email ||
      !formData.firstName
    ) {
      toast("يجب إدخال جميع البيانات");
    }
    if (formData.password !== confirmPassword) {
      toast("كلمة المرور غير متطابقة");
    } else {
      dispatch(signup({ post }));
    }
  };

  return (
    <div>
      {formData.role === "665de38be9ef4cb7062684e2" ? (
        <div>
          <div className="lg:flex lg:flex-row-reverse  lg:justify-around">
            <div>
              <img
                src={image}
                className=" w-[90%] mr-2 mt-5 mb-5 lg:w-[700px] lg:mr-0 lg:mt-[20%]"
              />
            </div>
            <div className="flex flex-col m-2 lg:mr-[5%]">
              <h1 className="text-[40px] font-medium text-primary lg:text-[60px] lg:w-[500px]">
                مرحبًا بك في نعناع!
              </h1>
              <h3 className="text-[15px] lg:text-[20px]">
                سعداء بانضمامك إلينا. نتمنى لك تجربة رائعة ومفيدة.
              </h3>
              <input
                name="firstName"
                value={formData.firstName}
                placeholder="الاسم الاول"
                onChange={handleChange}
                className=" border-b border-blue-gray-200  bg-transparent  pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />

              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="الاسم الثاني "
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="اسم المستخدم "
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" البريد الاكتروني"
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="كلمة المرور"
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="confirmPassword"
                type="password"
                onChange={(e) => setconfirmPassword(e.target.value)}
                placeholder="تأكيد كلمة المرور"
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <div className="flex flex-col ">
                {" "}
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-[97%] p-1 mb-3 text-primary"
                >
                  <option disabled value="">
                    التخصص
                  </option>
                  <option
                    className="text-primary"
                    value="665de38be9ef4cb7062684e2"
                  >
                    مستخدم
                  </option>
                  <option
                    className="text-primary"
                    value="665de357e9ef4cb7062684dd"
                  >
                    دكتور
                  </option>
                  <option
                    className="text-primary"
                    value="665de37ce9ef4cb7062684e0"
                  >
                    صيدلاني
                  </option>
                </select>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-[97%] p-1 my-2 text-primary"
                >
                  <option disabled value="">
                    الجنس
                  </option>

                  <option value="ذكر">ذكر </option>
                  <option value="انثئ">انثئ</option>
                </select>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-[97%] p-1 my-2 text-primary"
                >
                  <option disabled value="">
                    المحافظة
                  </option>
                  <option value="baghdad">بغداد</option>
                  <option value="basra">البصرة</option>
                  <option value="kirkuk">كركوك</option>
                  <option value="maysan">ميسان</option>
                  <option value="diyala">ديالى</option>
                  <option value="wasit">واسط</option>
                  <option value="muthanna">المثنى</option>
                  <option value="dhi_qar">ذي قار</option>
                  <option value="qadisiyyah">القادسية</option>
                  <option value="babel">بابل</option>
                  <option value="anbar">الأنبار</option>
                  <option value="salahaddin">صلاح الدين</option>
                  <option value="ninawa">نينوى</option>
                  <option value="erbil">أربيل</option>
                  <option value="duhok">دهوك</option>
                  <option value="sulaymaniyah">السليمانية</option>
                  <option value="najaf">النجف</option>
                  <option value="karbala">كربلاء</option>
                </select>
              </div>
              <button
                onClick={handleSignUp}
                className="bg-primary p-2 text-white mt-7 rounded-md hover:border-2 hover:border-primary border-primary border-2 hover:text-primary hover:bg-white "
              >
                انشاء حساب{" "}
              </button>
              <div className="flex justify-center items-center my-3">
                <hr className="h-[1.5px] w-[50%] bg-black" />
                <h1 className="mx-2 text-primary">او</h1>
                <hr className="h-[1.5px] w-[50%]  bg-black " />
              </div>
              <button className="bg-white p-2 text-primary rounded-md hover:bg-primary border-2  border-primary hover:text-white ">
                {" "}
                تسجيل دخول{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        // -----------------doctor or pharmacist---------------------------

        <div>
          {" "}
          <div
            className="lg:flex lg:flex-row-reverse  lg:justify-around  
           "
          >
            <div>
              <img
                src={image}
                className=" w-[90%] mr-2 mt-5 mb-5 lg:w-[700px] lg:mr-0 lg:mt-[20%] "
              />
            </div>
            <div className="flex flex-col m-2 overflow-x-hidden">
              <h1 className="text-[40px] font-medium text-primary lg:text-[60px] lg:w-[500px]">
                مرحبًا بك في نعناع!
              </h1>
              <h3 className="text-[15px] lg:text-[20px]">
                سعداء بانضمامك إلينا. نتمنى لك تجربة رائعة ومفيدة.
              </h3>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="الاسم الاول"
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />

              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="الاسم الثاني "
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="اسم المستخدم "
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" البريد الاكتروني"
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="العمر"
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="كلمة المرور"
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="تأكيد كلمة المرور"
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <div className="flex flex-col ">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-[97%] p-1 mb-3 text-primary"
                >
                  <option disabled value="">
                    التخصص
                  </option>
                  <option
                    className="text-primary"
                    value="665de38be9ef4cb7062684e2"
                  >
                    مستخدم
                  </option>
                  <option
                    className="text-primary"
                    value="665de357e9ef4cb7062684dd"
                  >
                    دكتور
                  </option>
                  <option
                    className="text-primary"
                    value="665de37ce9ef4cb7062684e0"
                  >
                    صيدلاني
                  </option>
                </select>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-[97%] p-1 my-2 text-primary"
                >
                  <option disabled value="">
                    الجنس
                  </option>

                  <option value="ذكر">ذكر </option>
                  <option value="انثئ">انثئ</option>
                </select>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-[97%] p-1 my-2 text-primary"
                >
                  <option disabled value="">
                    المحافظة
                  </option>
                  <option value="baghdad">بغداد</option>
                  <option value="basra">البصرة</option>
                  <option value="kirkuk">كركوك</option>
                  <option value="maysan">ميسان</option>
                  <option value="diyala">ديالى</option>
                  <option value="wasit">واسط</option>
                  <option value="muthanna">المثنى</option>
                  <option value="dhi_qar">ذي قار</option>
                  <option value="qadisiyyah">القادسية</option>
                  <option value="babel">بابل</option>
                  <option value="anbar">الأنبار</option>
                  <option value="salahaddin">صلاح الدين</option>
                  <option value="ninawa">نينوى</option>
                  <option value="erbil">أربيل</option>
                  <option value="duhok">دهوك</option>
                  <option value="sulaymaniyah">السليمانية</option>
                  <option value="najaf">النجف</option>
                  <option value="karbala">كربلاء</option>
                </select>
              </div>

              <input
                name="clinicLocation"
                value={formData.clinicLocation}
                onChange={handleChange}
                placeholder="مكان العيادة او الصيدلية  "
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />

              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="رقم الهاتف  "
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <input
                name="holidays"
                value={formData.holidays}
                onChange={handleChange}
                placeholder="ايام العطلة  "
                className=" border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              />
              <h1 className="mt-5">اوقات الدوام </h1>

              <form class="max-w-[16rem] mx-auto flex justify-around w-screen gap-5 mr-[0%]">
                <div>
                  <label
                    for="start-time"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    من :
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"></div>
                    <input
                      name="startTime"
                      type="time"
                      onChange={handleChange}
                      id="start-time"
                      className="bg-gray-50 border leading-none border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="end-time"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    الئ :
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"></div>
                    <input
                      name="endTime"
                      onChange={handleChange}
                      type="time"
                      id="end-time"
                      className="bg-gray-50 border leading-none border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="end-time"
                    class="block mb-2 text-sm font-medium text-gray-900 w-[150%]"
                  >
                    عدد الدقائق لمتوقع:{" "}
                  </label>
                  <select
                    name="expectedMinutes"
                    value={formData.expectedMinutes}
                    onChange={handleChange}
                    className="bg-gray-50 border leading-none border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  >
                    <option value="" disabled selected>
                      عدد الدفائق المتوقعه لكل مريض
                    </option>
                    <option value="10">10 دقائق</option>
                    <option value="15">15 دقيقة</option>
                    <option value="20">20 دقيقة</option>
                    <option value="25">25 دقيقة</option>
                    <option value="30">30 دقيقة</option>
                    <option value="35">35 دقائق</option>
                  </select>
                </div>
              </form>

              <div>
                <div class="flex  items-center justify-between bg-grey-lighter mt-5">
                  <label class=" flex flex-col items-center  px-6 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white text-primary">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span class="mt-2 text-base leading-normal">
                      صورة الاجازة الطبية
                    </span>
                    <input
                      type="file"
                      class="hidden"
                      onChange={(e) => setcertificate(e.target.files[0])}
                    />
                  </label>
                  <button
                    className="rounded-lg  px-6 py-3 shadow-lg text-xl hover:bg-primary hover:text-white text-primary "
                    onClick={map}
                  >
                    <FaLocationDot className="m-auto" />
                    حدد موقعك الجغرافي
                  </button>
                </div>
              </div>
              <label class=" flex flex-col items-center mt-5  py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white text-primary">
                <MdAddAPhoto className="text-5xl" />

                <span class="mt-2 text-base leading-normal">صورة شخصية</span>
                <input
                  type="file"
                  class="hidden"
                  onChange={(e) => setPersonImage(e.target.files[0])}
                />
              </label>

              <button
                onClick={handleSignUp}
                className="bg-primary p-2 text-white mt-7 rounded-md hover:border-2 hover:border-primary border-primary border-2 hover:text-primary hover:bg-white "
              >
                انشاء حساب{" "}
              </button>
              <div className="flex justify-center items-center my-3">
                <hr className="h-[1.5px] w-[50%] bg-black" />
                <h1 className="mx-2 text-primary">او</h1>
                <hr className="h-[1.5px] w-[50%]  bg-black " />
              </div>
              <button className="bg-white p-2 text-primary rounded-md hover:bg-primary border-2  border-primary hover:text-white ">
                {" "}
                تسجيل دخول{" "}
              </button>
            </div>
          </div>
          <Map
            showmap={showMap}
            onClose={map}
            setlocation={setlocation}
            location={location}
          />
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default SignUp;
