import React, { useEffect, useState } from "react";
import { ThemeConditions } from './context/ThemeConditions'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'
import axios from "axios";
import CoinInfo from "./pages/CoinInfo"

function App() {
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en';

  useEffect(() => {
    const cachedData = localStorage.getItem("cachedCoinsData");

    if (cachedData) {
      setCoins(JSON.parse(cachedData));
    } else {
      axios
        .get(url)
        .then((response) => {
          setCoins(response.data);
          // Cache the data in local storage
          localStorage.setItem("cachedCoinsData", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error setting up request:", error.message);
          }
        });
    }
  }, [url]);

  return (
    <ThemeConditions>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins={coins} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
        <Route path="/coin/:coinId" element={<CoinInfo />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
    </ThemeConditions>
  );
}

export default App;
