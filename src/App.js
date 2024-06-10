import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
