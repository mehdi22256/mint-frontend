import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Comment from "../components/Comment";
import PageMap from "../components/PageMap";
import { useState, useEffect } from "react";
import Chat from "../components/Chat";

function Pharamacypage() {
  const { _id } = useParams();
  const [isChating, setIsChating] = useState(false);
  const [getPharmacy, setGetPharmacy] = useState(null);

  const allPharmacies = useSelector((state) => state?.user?.pharmacist);
  useEffect(() => {
    const phs = allPharmacies?.find((ph) => ph?._id === _id);
    setGetPharmacy(phs);
  }, [_id, allPharmacies]);

  return (
    <div className="h-full w-full pt-8 pb-4 gap-5  flex flex-col items-center justify-center">
      <div className="flex lg:w-[70%] lg:mx-auto lg:bg-secondary pl-1 lg:h-auto lg:py-2 mb-14 lg:rounded-2xl">
        <div className="flex flex-col gap-4 lg:gap-6 items-center lg:justify-center lg:w-[40%] text-2xl text-center lg:font-medium ">
          <img
            src={`${getPharmacy?.image}`}
            className="w-[60%] rounded-2xl"
            alt=""
          />
          <p>
            {getPharmacy?.firstName} {getPharmacy?.lastName}
          </p>
          <p className="break-words">
            المكان :{getPharmacy?.governorate}/{getPharmacy?.clinicLocation}
          </p>
          <p className="break-words">
            اوقات الدوام: {getPharmacy?.startTime}/{getPharmacy?.endTime}
          </p>
          <p className="break-words pb-5">
            رقم الهاتف : {getPharmacy?.phoneNumber}
          </p>
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
      <Chat
        isChating={isChating}
        setIsChating={setIsChating}
        doctor={getPharmacy}
      />
      <Comment _id={_id} />
    </div>
  );
}

export default Pharamacypage;
