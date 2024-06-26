import pharamacyimg from "../assets/pharmacy 1.png";
import mapimg from "../assets/map 1.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Comment from "../components/Comment";
import Chat from "../components/Chat";
import { useState } from "react";
import PageMap from "../components/PageMap";
function Pharamacypage() {
  const { _id } = useParams();
  const allPharamacy = useSelector((state) => state?.user?.pharmacist);
  // const allPharamacy = useSelector((state) => state.user?.users);

  const [isChating, setIsChating] = useState(false);

  const phs = allPharamacy?.find((ph) => ph?._id === _id);
  console.log("eeeeeee", phs);
  return (
    <div className="h-full w-full pt-8 pb-4 gap-5  flex flex-col items-center justify-center">
      <div className="hidden lg:flex  lg:w-[70%] lg:mx-auto lg:bg-secondary pl-1 lg:h-auto lg:py-2 mb-14 lg:rounded-2xl">
        <div className="lg:flex lg:flex-col lg:gap-6 lg:items-center lg:justify-center lg:w-[40%] lg:text-2xl lg:text-center lg:font-medium ">
          <img src={`${phs?.image}`} className="w-[60%] rounded-2xl" alt="" />
          <p>
            {phs?.firstName} {phs?.lastName}
          </p>
          <p className="break-words">
            {" "}
            المكان :{phs?.governorate}/{phs?.clinicLocation}
          </p>
          <p className="break-words">
            {" "}
            اوقات الدوام: {phs.startTime}/{phs.endTime}
          </p>
          <p className="break-words pb-4"> رقم الهاتف : {phs?.phoneNumber}</p>
          <button
            onClick={() => setIsChating(!isChating)}
            className="w-32 px-5 h-12 hover:px-5 hover:py-2 rounded-xl font-semibold text-white bg-primary hover:bg-green-100 hover:text-primary hover:border-2 hover:border-primary"
          >
            مراسلة
          </button>
        </div>
        <div className=" -z-0 lg:w-[60%] lg:h-auto order-2 flex items-center justify-center">
          <PageMap id={_id} />
        </div>
      </div>

      <div id="greduntline" className="w-full h-[3px] ">
        -
      </div>
      <Chat
        isChating={isChating}
        setIsChating={setIsChating}
        doctor={allPharamacy}
      />
      <Comment _id={_id} />
    </div>
  );
}

export default Pharamacypage;
