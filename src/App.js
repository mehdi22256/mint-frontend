import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Pharamacypage from "./components/Pharamacypage";
function App() {
  return (
    <div>
      <Pharamacypage />
      <Routes></Routes>
    </div>
  );
}

export default App;
