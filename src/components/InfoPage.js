import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { putUser } from "../store/user/userSlice";

const InfoPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.data);
  console.log("🚀 ~ InfoPage ~ user:", user);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [clinicLocation, setClinicLocation] = useState(user?.clinicLocation);
  const [holidays, setHolidays] = useState(user?.holidays);
  const [startTime, setStartTime] = useState(user?.startTime);
  const [endTime, setEndTime] = useState(user?.endTime);
  const [image, setImage] = useState(user?.image);

  const put = (e) => {
    e.preventDefault();
    const id = user.id;
    let userInfo = {
      username,
      email,
      firstName,
      lastName,
      clinicLocation,
      holidays,
      startTime,
      endTime,
      image,
    };
    dispatch(putUser({ userInfo, id }));
  };

  return (
    <div>
      <form onSubmit={put} className="flex flex-col p-5 gap-3">
        <div className="w-28 h-36 relative m-auto lg:mr-40">
          <img
            className="h-full w-full object-cover"
            src={`http://localhost:1000/${user?.image}`}
            alt="user"
          />
          <div className="absolute bottom-12 w-full cursor-pointer">
            <label className="cursor-pointer">
              <p className="absolute bg-secondary opacity-50 w-full h-6 text-center"></p>
              <p className="text-center text-white font-semibold">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setImage(e.target.value)}
                />
                تغيير الصورة
              </p>
            </label>
          </div>
        </div>
        <div
          className={`flex ${
            user?.role === "665de38be9ef4cb7062684e2"
              ? `flex-col`
              : `flex-row items-center`
          }  gap-8 flex-wrap justify-around pt-5 lg:pt-10 lg:p-10`}
        >
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl"> الاسم الاول:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl"> الاسم الثاني:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {user?.role === "665de38be9ef4cb7062684e2" ? null : (
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl"> ايام العطل :</p>
              <input
                className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
                type="text"
                value={holidays}
                onChange={(e) => setHolidays(e.target.value)}
              />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">اسم المستخدم:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {user?.role === "665de38be9ef4cb7062684e2" ? null : (
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl"> مكان العيادة:</p>
              <input
                className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
                type="text"
                value={clinicLocation}
                onChange={(e) => setClinicLocation(e.target.value)}
              />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl"> البريد الالكتروني:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {user?.role === "665de38be9ef4cb7062684e2" ? null : (
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">اوقات الدوام :</p>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row items-center gap-2">
                  <label htmlFor="من">من</label>
                  <input
                    name="من"
                    className="border-2 border-black h-10 pr-2 w-80 lg:w-72"
                    type="text"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <label htmlFor="الى">الى</label>
                  <input
                    name="الى"
                    className="border-2 border-black h-10 pr-2 w-80 lg:w-72"
                    type="text"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-green-800 p-3 px-10 rounded-lg text-white w-fit mr-28"
        >
          حفظ
        </button>
      </form>
    </div>
  );
};

export default InfoPage;
