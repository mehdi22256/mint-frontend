import { useSelector } from "react-redux";
import edit from "../assets/editing.png";
const InfoPage = () => {
  const user = useSelector((state) => state?.user?.data);
  console.log("🚀 ~ InfoPage ~ user:", user);
  return (
    <div>
      <form className="flex flex-col p-5 gap-3">
        <div className="w-28 h-36 relative m-auto lg:mr-40">
          <img
            className="h-full w-full object-cover"
            src={`http://localhost:1000/${user?.image}`}
            alt="user"
          />
          <div className="absolute bottom-12 w-full cursor-pointer">
            <p className="absolute bg-secondary opacity-50 w-full h-6 text-center"></p>
            <p className="text-center text-white font-semibold">تغيير الصورة</p>
          </div>
        </div>
        <div className="flex flex-row gap-8 flex-wrap items-center justify-around pt-5 lg:pt-10 lg:p-10">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">الاسم:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={`${user?.firstName}${user?.lastName}`}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">ايام العطل:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={`مدريني`}
            />
          </div>{" "}
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">اسم المستخدم:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={`${user?.username}`}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl"> مكان العيادة:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={`نكرة السلمان`}
            />
          </div>{" "}
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl"> البريد الالكتروني:</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={`${user?.email}`}
            />
          </div>{" "}
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">اوقات الدوام :</p>
            <input
              className="border-2 border-black h-10 pr-2 w-80 lg:w-96"
              type="text"
              value={`من 1 مساءا الى 12 صباحا `}
            />
          </div>
        </div>
        <button className="bg-primary hover:bg-green-800 p-3 px-10 rounded-lg text-white w-fit mr-28">
          حفظ
        </button>
      </form>
    </div>
  );
};

export default InfoPage;
