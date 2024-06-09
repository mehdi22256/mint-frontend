import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DetailedArticle from "./pages/DetailedArticle";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<DetailedArticle />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
