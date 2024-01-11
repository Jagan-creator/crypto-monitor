import React from "react";
import { ThemeConditions } from './context/ThemeConditions'
import Navbar from "./components/Navbar";

function App() {
  return <ThemeConditions>
    <Navbar />
  </ThemeConditions>
}

export default App;
