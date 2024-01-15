import React from "react";
import { ThemeConditions } from './context/ThemeConditions'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'

function App() {
  return <ThemeConditions>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/account' element={<Account />} />
    </Routes>
  </ThemeConditions>
}

export default App;
