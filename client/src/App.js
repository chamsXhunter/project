import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import Navbarr from "./components/Navbarr";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { getactivite } from "./JS/activityslice";
import Nutrition from "./components/Nutrition";
import FoodVitamine from "./components/FoodVitamine";
import FoodProteine from "./components/FoodProteine";
import FoodCarb from "./components/FoodCarb";
import Detail from "./components/Detail";
import { getparticipation } from "./JS/participationSlice";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getactivite());
    dispatch(getparticipation());
  });
  return (
    <div className="App">
     <Navbarr/>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
         <Route path="/nutrition" element={<Nutrition />} />
         <Route path="/vitamine" element={<FoodVitamine />} />
               <Route path="/proteine" element={<FoodProteine />} />
                     <Route path="/carb" element={<FoodCarb />} />
                        <Route path="/detail/:id" element={<Detail />} />
         <Route path="/nutition" element={<Nutrition />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
