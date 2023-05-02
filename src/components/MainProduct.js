import React from "react";
import DropDown from "./DropDown";
import Product from "./Product";
import { data } from "../dummy/data";

const MainProduct = ({ search, brand, category, price, sort, setSort }) => {
  const [datax, setDatax] = React.useState(data);
  const [tempDatax, setTempDatax] = React.useState(data);

  const searchMain = (firstVal, secondVal) => {
    if (firstVal !== "price") {
      let arr = tempDatax.filter((itm) => {
        if (itm?.[firstVal]?.toLowerCase().includes(secondVal?.toLowerCase())) {
          return itm;
        }
      });
      return arr;
    } else {
      if (secondVal === 100) {
        let arr = tempDatax.filter((itm) => {
          if (itm?.price < secondVal) {
            return itm;
          }
        });
        return arr;
      }
      if (secondVal === 199) {
        let arr = tempDatax.filter((itm) => {
          if (itm?.price >= 100 && itm?.price <= secondVal) {
            return itm;
          }
        });
        return arr;
      }
      if (secondVal === 599) {
        let arr = tempDatax.filter((itm) => {
          if (itm?.price >= 200 && itm?.price <= secondVal) {
            return itm;
          }
        });
        return arr;
      }
      if (secondVal === 999) {
        let arr = tempDatax.filter((itm) => {
          if (itm?.price >= 600 && itm?.price <= secondVal) {
            return itm;
          }
        });
        return arr;
      }
      if (secondVal === 1000) {
        let arr = tempDatax.filter((itm) => {
          if (itm?.price > secondVal) {
            return itm;
          }
        });
        return arr;
      }
    }
  };
  const sortBro = (type) => {
    console.log(type);
    if (type === "hl") {
      let arrNew = tempDatax;
      let arr = arrNew.sort((a, b) => {
        console.log(a.price, b.price);
        if (a.price > b.price) {
          return 1;
        } else {
          return -1;
        }
      });
      setDatax(arr);
    }
    if (type === "lh") {
      let arrNew = tempDatax;
      let arr = arrNew.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        } else {
          return -1;
        }
      });
      setDatax(arr);
    }
  };
  React.useEffect(() => {
    //data reset ifs
    if (search === "") {
      setDatax(tempDatax);
    }
    if (brand === "") {
      setDatax(tempDatax);
    }
    if (category === "") {
      setDatax(tempDatax);
    }
    if (price === 0) {
      setDatax(tempDatax);
    }
    //filter ifs
    if (search !== "") {
      setDatax(searchMain("name", search));
    } else if (brand !== "") {
      setDatax(searchMain("brand", brand));
    } else if (category !== "") {
      setDatax(searchMain("category", category));
    } else if (price > 0) {
      setDatax(searchMain("price", price));
    } else if (sort) {
      sortBro(sort);
    }
  }, [search, brand, category, price, sort]);

  return (
    <div>
      <div className="flex justify-between gap-[5rem]">
        <h1 className="text-[#818181]">Home / Home Decoration / Artifical </h1>
        <DropDown setSort={setSort} />
      </div>
      <div className="md:grid md:grid-cols-3 grid grid-cols-1 md:gap-5 gap-2 mt-[1rem]">
        {datax.length !== 0 ? (
          datax?.map((item, key) => {
            return (
              <Product
                key={key}
                name={item?.name}
                brand={item?.brand}
                catego={item?.category}
                img={item?.img}
                price={item?.price}
                mrpPrice={item?.mrpPrice}
                reviewCount={item?.reviewCount}
                dp={item?.discountPercent}
                star={item?.stars}
              />
            );
          })
        ) : (
          <h1>NO Product Found!</h1>
        )}
      </div>
    </div>
  );
};

export default MainProduct;
