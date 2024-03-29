import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);

  // API URL for fetching trending coins
  const url = "https://api.coingecko.com/api/v3/search/trending";

  // Fetch trending coins data
  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    });
  }, []);

  return (
    <div className="rounded-div my-12 text-primary">
      <div className="p-6">
        <h1 className="text-2xl font-bold py-4">Trending Coins</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map through trending coins data and render each coin */}
          {trending.map((coin, idx) => (
            <div
              key={idx}
              className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
            >
              {/* Coin details section */}
              <div className="flex w-full items-center justify-between">
                <div className="flex">
                  <img
                    className="mr-4 rounded-full"
                    src={coin.item.small}
                    alt="/"
                  />
                  <div>
                    <p className="font-bold">{coin.item.name}</p>
                    <p>{coin.item.symbol}</p>
                  </div>
                </div>

                {/* Additional coin details */}
                <div className="flex items-center">
                  <img
                    className="w-4 mr-2"
                    src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                    alt="/"
                  />
                  <p>{coin.item.price_btc.toFixed(7)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
