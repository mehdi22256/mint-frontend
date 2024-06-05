import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Pharamacypage from "./components/Pharamacypage";
import DetailedArticle from "./pages/DetailedArticle";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Pharamacypage />
      <Routes></Routes>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<DetailedArticle />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
