import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import CreateClientForm from './components/CreateClientForm'
import Navbar from './components/Navbar'
import AuthComponent from './components/AuthComponent'
import Dashboard from './components/Dashboard'



const App = () => {
  const location = useLocation();
  // Hide Navbar on /login
  const hideNavbar = location.pathname === "/login";
  return (
    <>

      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<AuthComponent />} />

        <Route path="/client/create-client" element={<CreateClientForm />} />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>





    </>
  )
}

export default App
