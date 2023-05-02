import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import ReviewStars from "./ReviewStars";

export const Product = ({
  name,
  brand,
  catego,
  mrpPrice,
  img,
  price,
  reviewCount,
  dp,
  star,
}) => {
  const findDiscountedPrice = (price, percent) => {
    return Math.floor(
      ((Math.floor(mrpPrice) - Math.floor(price)) / Math.floor(mrpPrice)) * 100
    );
  };
  return (
    <div className="bg-white rounded shadow-md w-[15rem] relative">
      <img
        src={img}
        alt="product"
        className="w-full h-32 object-cover rounded mb-2"
      />
      <HeartIcon className="h-6 text-[#98999B] absolute right-2 top-2" />
      <div className="p-[0.75rem] flex flex-col gap-1">
        <h1 className="font-medium text-[#4e4e4e] truncate">{name}</h1>
        <p className="text-[0.75rem] font-bold text-[#8F8F8F]">{brand}</p>
        <div className="flex text-[#8F8F8F] items-center gap-2">
          <ReviewStars stars={star} size={20} />
          <span>({reviewCount})</span>
        </div>
        <div className="flex gap-2 items-baseline">
          <h1 className="text-black text-[1.5rem] font-semibold">
            ${price.toFixed(1)}
          </h1>
          {Math.floor(mrpPrice) === Math.floor(price) ? null : (
            <>
              <h1 className="line-through text-[#7e7e7e] font-semibold">
                ${mrpPrice.toFixed(1)}
              </h1>
              <h1 className="text-green-600 font-semibold">
                {findDiscountedPrice(price, dp)}% off
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
