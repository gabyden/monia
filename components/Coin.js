import React from 'react';
import Currency from 'react-currency-formatter';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';

export const Coin = ({
  name,
  key,
  number,
  image,
  symbol,
  price,
  priceChange,
  volume,
  marketcap
}) => {
  return (
    <>
      <tr
        key={key}
        className="border-b border-indigo-900 hover:bg-purple-900 transition duration-400 ease-in-out"
      >
        <td className="py-3 px-6 text-left">
          <span className="font-light uppercase">{number}</span>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">
              <img src={image} width="20" height="20" alt={name} />
            </div>
            <span className="font-medium">{name}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">
          <span className="font-light uppercase">{symbol}</span>
        </td>
        <td className="py-3 px-6 text-left">
          <span className="font-bold priceList">
            <Currency quantity={price} currency="USD" />
          </span>
        </td>
        <td className="py-3 px-6 text-center">
          <span>
            <Currency quantity={volume} currency="USD" />
          </span>
        </td>
        <td className="py-3 px-6 text-center">
          {priceChange < 0 ? (
            <span className="flex justify-center text-red-600 font-bold py-1 px-3 rounded-full text-md">
              {priceChange.toFixed(2)}%
              <HiArrowDown />
            </span>
          ) : (
            <span className="flex justify-center text-green-600 font-bold py-1 px-3 rounded-full text-md">
              {priceChange.toFixed(2)}%
              <HiArrowUp />
            </span>
          )}
        </td>
        <td className="py-3 px-6 text-center">
          <span>
            <Currency quantity={marketcap} currency="USD" />
          </span>
        </td>
      </tr>
    </>
  );
};
