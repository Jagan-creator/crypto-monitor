import React, { useState } from "react";
import CoinItem from "./CoinItem";

function CoinNav({ coins }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      {/* Search section */}
      <div>
        <h1>Search</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="find a coin"
          />
        </form>
      </div>

      {/* Table displaying coin information */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
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
  );
}

export default CoinNav;
