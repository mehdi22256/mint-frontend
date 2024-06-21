import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChatRooms } from "../store/chatRoom/chatRoomSlice";
import { IoCloseOutline } from "react-icons/io5";
const socket = io.connect("http://localhost:3001");

function Chat() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.data);
  const chatRoom = useSelector((state) => state?.chatRoom?.data);

  const users = [user?.id, "665ca6126bf52afc3b759e78"];
  const room = users.join("-");

  const [isOpen, setIsOpen] = useState(true);
  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  socket.emit("join_room", room);

  const sendMessage = () => {
    dispatch(fetchChatRooms(users));
    if (message !== "" && room !== "") {
      socket.emit("send_message", { message, room });
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, []);

  return (
    <div
      className={`${
        isOpen ? `flex ` : `hidden`
      } flex-col items-center justify-center h-screen bg-gray-100 rounded-lg`}
    >
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="flex flex-row items-center justify-between mb-4">
          <IoCloseOutline
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer hover:bg-primary hover:rounded-full w-7 h-7"
          />
          <h1 className="text-2xl font-bold text-left">صيدلية الكفاح</h1>
        </div>

        <div className="bg-secondary p-4 rounded h-32 overflow-y-auto mb-3">
          <p className="text-gray-700">Sent: {message}</p>
          <p className="text-gray-700">Received: {messageReceived}</p>
        </div>

        <div className="mb-4 flex flex-row-reverse gap-3">
          <input
            className="border border-gray-300 rounded w-full pr-2 py-1"
            placeholder="الرسالة..."
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button
            className="bg-primary text-white px-2 rounded"
            onClick={sendMessage}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
