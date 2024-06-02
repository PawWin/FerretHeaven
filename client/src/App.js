import './App.css';
import React, { useState } from 'react';
import Homepage from "./Pages/Homepage";
import Ferrets from "./Pages/Ferrets";
import Borys from "./FerretPages/Borys";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import {Routes, Route} from "react-router-dom";
import Register from "./Pages/Register";
import axios from "axios";
import {Toaster} from 'react-hot-toast'
import Navbar_ from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import {UserProvider} from "./context/userContext";
import Dashboard from "./Pages/Dashboard";
import LastAdoptedFerretPage from "./FerretPages/LastAdoptedFerretPage";
import Kamila from "./FerretPages/Kamila";
import Andrzej from "./FerretPages/Andrzej";
import Bogumil from "./FerretPages/Bogumil";
import Asia from "./FerretPages/Asia";
import Ola from "./FerretPages/Ola";
import Gucio from "./FerretPages/Gucio";
import Julcio from "./FerretPages/Julcio";
import Janusz from "./FerretPages/Janusz";
import Kuba from "./FerretPages/Kuba";
import Kasia from "./FerretPages/Kasia";
import Kot from "./FerretPages/Kot";
import Adoption from "./Pages/Adoption";

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;
function App() {
  return (
          <UserProvider>
            <Navbar_/>
            <Toaster position="top-right" toastOptions={{duration:5000}}/>
              <Routes>
                  <Route path="/" element={<Homepage />} ></Route>
                  <Route path="/ferrets" element={<Ferrets />} ></Route>
                  <Route path="/ferrets/Borys" element={<Borys />} ></Route>
                  <Route path="/ferrets/Kamila" element={<Kamila />} ></Route>
                  <Route path="/ferrets/Andrzej" element={<Andrzej />} ></Route>
                  <Route path="/ferrets/Bogumil" element={<Bogumil />} ></Route>
                  <Route path="/ferrets/Asia" element={<Asia />} ></Route>
                  <Route path="/ferrets/Ola" element={<Ola />} ></Route>
                  <Route path="/ferrets/Gucio" element={<Gucio />} ></Route>
                  <Route path="/ferrets/Julcio" element={<Julcio />} ></Route>
                  <Route path="/ferrets/Janusz" element={<Janusz />} ></Route>
                  <Route path="/ferrets/Kuba" element={<Kuba />} ></Route>
                  <Route path="/ferrets/Kasia" element={<Kasia />} ></Route>
                  <Route path="/ferrets/Kot" element={<Kot />} ></Route>
                  <Route path="/about" element={<About />} ></Route>
                  <Route path="/kontakt" element={<Contact />} ></Route>
                  <Route path="/login" element={<Login />} ></Route>
                  <Route path="/register" element={<Register />} ></Route>
                  <Route path="/dashboard" element={<Dashboard />} ></Route>
                  <Route path="/last-adopted" element={<LastAdoptedFerretPage />} ></Route>
                  <Route path="/ferrets/adoption" element={<Adoption />} ></Route>
              </Routes>
              <Footer/>
          </UserProvider>
  );
}


export default App;
