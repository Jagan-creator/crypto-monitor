import React from "react";
import CoinNav from "../components/CoinNav";
import TrendingCoins from "../components/TrendingCoins";

function Home({ coins }) {
  return (
    <div>
      <CoinNav coins={coins} />
      <TrendingCoins />
    </div>
  );
}

export default Home;
