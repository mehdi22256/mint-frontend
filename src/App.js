import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
