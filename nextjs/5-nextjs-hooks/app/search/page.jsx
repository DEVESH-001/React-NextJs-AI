"use client";

import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const category = searchParams.get("category");
  const page = searchParams.get("page");

  const allparams = Array.from(searchParams.entries());
  console.log(allparams);

  //http://localhost:3000/search?q=reactjs&category=frotend&sort=prce&page=3

  return (
    <div>
      <h1>searh result for: {query}</h1>
      <p>category: {category}</p>
      <p>page: {page}</p>
    </div>
  );
};

export default Search;
