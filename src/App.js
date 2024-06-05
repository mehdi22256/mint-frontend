import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DetailedArticle from "./pages/DetailedArticle";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/articles" element={<DetailedArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
