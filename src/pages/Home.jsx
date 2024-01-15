import React from "react";
import CoinNav from "../components/CoinNav";

function Home({ coins }) {
  return (
    <div>
      <CoinNav coins={coins} />
    </div>
  );
}

export default Home;
