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
import Doctors from "./pages/Doctors";
import Pharmacy from "./pages/Pharmacy";
import Articles from "./pages/Articles";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCredentials());
    dispatch(getAllBlog());
  }, [dispatch]);

  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/Pharmacy" element={<Pharmacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
