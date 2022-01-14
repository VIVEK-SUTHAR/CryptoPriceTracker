import React from "react";
import "./Coin.css";
export default function Coin({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  mkt_cap,
}) {
  return (
    <>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto"></img>
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">${price}</p>
            <p className="coin-volume">${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin-percernt red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percernt green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-market-cap">Mkt Cap ${mkt_cap}</p>
          </div>
        </div>
      </div>
    </>
  );
}
