import React from "react";
import FilterCompo from "./components/FilterCompo";
import MainProduct from "./components/MainProduct";
import NavBar from "./components/NavBar";

const App = () => {
  const [search, setSearch] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [sort, setSort] = React.useState("");
  const [filters, setFilters] = React.useState({
    brand: "",
    category: "",
    price: 0,
  });

  React.useEffect(() => {
    if (count === 0) {
      setSort("lh");
    }
  }, [count]);

  return (
    <div className="">
      <NavBar search={search} setSearch={setSearch} />
      <div className="flex justify-center gap-[2rem]  my-[2rem]">
        <div className="rounded-md drop-shadow-lg ">
          <FilterCompo filters={filters} setFilters={setFilters} />
        </div>
        <MainProduct
          search={search}
          price={filters?.price ?? 0}
          brand={filters?.brand ?? ""}
          category={filters?.category ?? ""}
          sort={sort}
          setSort={setSort}
        />
      </div>
    </div>
  );
};

export default App;
