import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";

import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import Articles from "./pages/Articles";
import Doctors from "./pages/Doctors";

import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import store from "./store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBlog } from "./store/blog/blogSlice";
import Pharmacy from "./pages/Pharmacy";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlog());
  }, []);
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
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
