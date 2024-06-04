import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <Footer></Footer>
      <NavBar />
      <Routes></Routes>
    </div>
  );
}

export default App;
