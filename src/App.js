import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Doctors from "./pages/Doctors";
import Pharmacy from "./pages/Pharmacy";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/Pharmacy" element={<Pharmacy />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
