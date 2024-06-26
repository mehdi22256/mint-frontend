import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { setCredentials } from "./store/user/userSlice";
import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import store from "./store/store";
import { useDispatch } from "react-redux";
import { getAllBlog } from "./store/blog/blogSlice";
import { getComments } from "./store/comment/commentSlice";
import { fetchCategories } from "./store/category/categorySlice";
import { getChatRooms } from "./store/chatRoom/chatRoomSlice";
import { fetchChats } from "./store/chat/chatSlice";
import Doctors from "./pages/Doctors";
import Pharmacy from "./pages/Pharmacy";
import Articles from "./pages/Articles";
import { getUser } from "./store/user/userSlice";
import NewArticle from "./pages/NewArticle";
import DashBoard from "./pages/DashBoard";
import InfoPage from "./components/InfoPage";
import Bookings from "./components/Bookings";
import Booking from "./components/Booking";
import DetailedArticle from "./pages/DetailedArticle";
import Pharamacylocation from "./pages/Pharmacylocation";
import DoctorsLocation from "./pages/DoctorsLocation";
import { getBooking } from "./store/booking/bookingSlice";
import Chat from "./components/Chat";
import Messages from "./components/Messages";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCredentials());
    dispatch(getAllBlog());
    dispatch(getUser());
    dispatch(fetchCategories());
    dispatch(getComments());
    dispatch(getBooking());
    dispatch(fetchChats());
    // dispatch(fetchChatRooms());
  }, [dispatch]);

  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/newarticle" element={<NewArticle />} />
            <Route path="/articles/:_id" element={<DetailedArticle />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/dashboard" element={<DashBoard />}>
              <Route path="info" element={<InfoPage />} />
              <Route path="booking" element={<Bookings />} />
              <Route path="messages" element={<Messages />} />
              <Route path="newarticle" element={<NewArticle />} />
            </Route>
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/doctor" element={<Doctors />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="doctor/:_id" element={<DoctorsLocation />} />
            <Route path="pharmacy/:_id" element={<Pharamacylocation />} />
          </Routes>
        </div>

        <Footer />
      </Provider>
    </div>
  );
}

export default App;
