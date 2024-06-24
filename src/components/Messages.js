import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChatRooms } from "../store/chatRoom/chatRoomSlice";
import Chat from "../components/Chat";
import Loading from "../components/Loading";

const Messages = () => {
  const [isChating, setIsChating] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const token =
    localStorage.getItem("Token") || sessionStorage.getItem("Token");

  useEffect(() => {
    if (token) {
      dispatch(getChatRooms(token));
    }
  }, [dispatch, token]);

  const chatRoom = useSelector((state) => state?.chatRoom?.get);
  console.log("🚀 ~ Messages ~ chatRoom:", chatRoom);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsChating(true);
  };

  if (!chatRoom) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-5">
      <p className="text-3xl font-semibold">الرسائل...</p>
      {chatRoom?.map((user) => (
        <div key={user._id}>
          <p
            onClick={() => handleUserClick(user)}
            className="p-5 bg-secondary rounded-lg w-fit pl-56 cursor-pointer"
          >
            {user.firstName} {user.lastName}
          </p>
        </div>
      ))}
      {selectedUser && (
        <Chat
          isChating={isChating}
          setIsChating={setIsChating}
          firstPatient={selectedUser.firstName}
          lastPatient={selectedUser.lastName}
          patientId={selectedUser._id}
        />
      )}
    </div>
  );
};

export default Messages;
