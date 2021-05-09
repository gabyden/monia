import React from 'react';

import { Coin } from './Coin';

export const TableView = properties => {
  const { allData } = properties;

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex items-center justify-center font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="gradientBg text-white uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Symbol</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-center">Volume</th>
                  <th className="py-3 px-6 text-center">Price change 24H</th>
                  <th className="py-3 px-6 text-center">Market Cap</th>
                </tr>
              </thead>
              <tbody className="text-white text-sm font-light bodyList">
                {allData.map(coin => {
                  return (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      price={coin.current_price}
                      symbol={coin.symbol}
                      marketcap={coin.total_volume}
                      volume={coin.market_cap}
                      image={coin.image}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
