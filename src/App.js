import DeleteCars from "./pages/delete";
import Register from "./pages/registration";
import LandingPage from "./pages/landingPage";
import Home from "./pages/home";
import Login from "./pages/login";
import Venus from "./pages/venus";

import dataSlider from "./pages/dataSlider";

import Update from "./pages/update";
import Jupiter from "./pages/jupiter";
import Mars from "./pages/mars";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Sidebar from "./pages/jupiter";
function App() {
  return (
    <div className="App">
    
        <Routes>
		<Route path="/delete" element={<DeleteCars />}></Route>

       <Route path="/add" element={<Register />}></Route>
       <Route path="/update/:id" element={<Update />}></Route>
		
			<Route path="/jup" element={<Jupiter />}></Route> 
			<Route path="/delete" element={<DeleteCars />}></Route>

           <Route path="/reg" element={<Register />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/dataSlider" element={<dataSlider />}></Route>
          <Route path="/land" element={<LandingPage />}></Route>
          <Route path="/" element={<Login />}></Route>
		  <Route path="/home" element={<Home />}></Route>
          <Route path="/mars" element={<Mars />}></Route>
          <Route path="/venus" element={<Venus />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

         
          
        </Routes>
			
    
    </div>
  );
}

export default App;
