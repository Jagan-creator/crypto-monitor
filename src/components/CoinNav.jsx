import React, { useState } from "react";
import CoinItem from "./CoinItem";

function CoinNav({ coins }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="rounded-div my-4">
      <div className="rounded-div-content p-6">
        {/* Search section */}
        <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
          <h1 className="text-2xl font-bold my-2">Search</h1>
          <form>
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
              type="text"
              placeholder="find a coin"
            />
          </form>
        </div>

        {/* Table displaying coin information */}
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th></th>
              <th className="px-4">#</th>
              <th className="text-left">Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th className="hidden md:table-cell">24h Volume</th>
              <th className="hidden sm:table-cell">Mkt</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the "coins" array and render a row for each coin */}
            {coins
              .filter((value) => {
                if (searchText === "") {
                  return true;
                } else if (
                  value.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map((coin) => (
                <CoinItem
                  key={coin.id}
                  coin={coin}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoinNav;
