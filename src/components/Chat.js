import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChatRooms } from "../store/chatRoom/chatRoomSlice";
import { IoCloseOutline } from "react-icons/io5";

const socket = io.connect("http://localhost:3001");

function Chat({
  isChating,
  setIsChating,
  doctor,
  firstPatient,
  lastPatient,
  patientId,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.data);
  const users = patientId ? [patientId, user?.id] : [user?.id, doctor?._id];
  const room = users.join("-");
  console.log("🚀 ~ room:", room);

  const [message, setMessage] = useState("");
  const [broad, setBroad] = useState("");
  const [messagesReceived, setMessagesReceived] = useState([]);

  useEffect(() => {
    if (room) {
      socket.emit("join_room", room);

      socket.on("receive_message", (data) => {
        setMessagesReceived((prevMessages) => [...prevMessages, data.message]);
      });

      socket.on("new_broadcast", (data) => {
        setBroad(data);
      });

      return () => {
        socket.off("receive_message");
        socket.off("new_broadcast");
      };
    }
  }, [room]);

  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(fetchChatRooms(users));
    if (message !== "" && room !== "") {
      socket.emit("send_message", { message, room });
      setMessagesReceived((prevMessages) => [...prevMessages, message]);
      setMessage("");
    }
  };

  const broadcastMessage = () => {
    const data =
      message === ""
        ? ""
        : patientId === undefined
        ? `${doctor?.firstName} يكتب الآن...`
        : `${firstPatient} يكتب الآن...`;
    socket.emit("broadcast_message", data);
  };

  useEffect(() => {
    broadcastMessage();
  }, [message]);

  if (!isChating) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-5 w-96 flex-col items-center justify-center bg-gray-100 rounded-xl">
      <div className="bg-white p-3 rounded shadow-md w-full max-w-md">
        <div className="flex flex-row items-center justify-between mb-2">
          <IoCloseOutline
            onClick={() => setIsChating(!isChating)}
            className="cursor-pointer hover:bg-primary hover:rounded-full w-7 h-7"
          />
          {patientId === user?.id ? (
            <h1 className="text-xl text-primary font-bold text-left">
              {doctor?.firstName} {doctor?.lastName}
            </h1>
          ) : (
            <p>
              {firstPatient} {lastPatient}
            </p>
          )}
        </div>

        <div className="bg-secondary p-4 rounded h-64 overflow-y-auto mb-3">
          {messagesReceived.map((msg, index) => (
            <div
              key={index}
              className={`text-gray-700 ${
                user?.id === room[1]
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {patientId === undefined
                ? ` ${doctor?.firstName || "دكتور"} ${msg}`
                : `${firstPatient} ${msg} `}
            </div>
          ))}
          <p>{broad}</p>
        </div>

        <form
          onSubmit={sendMessage}
          className="mb-4 flex flex-row-reverse gap-3"
        >
          <input
            className="border border-gray-300 rounded w-full pr-2 py-1"
            placeholder="الرسالة..."
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button type="submit" className="bg-primary text-white px-2 rounded">
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
