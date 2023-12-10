import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../Components/Pages/Home/Home';
import About from '../Components/Pages/About/About';
import Doctors from '../Components/Pages/Doctors/Doctors';
import Patient from '../Components/Pages/Patients/Patient';
import NoPage from '../Components/Pages/NoPage'
import Appointment from '../Components/Pages/Appointments/Appointment';



const Routing = () => {
  return (
    <>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="*" element={<NoPage/>} />
      </Routes>
    </>
  )
}

export default Routing
