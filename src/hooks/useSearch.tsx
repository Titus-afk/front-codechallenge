import { useEffect, useState } from "react";
import { data, searchArray } from "../types";

const useSearch = (data: data[]) => {
  const [searchedData, setSearchedData] = useState<data[]>(data);

  const handleSearch: searchArray = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    if (query === "") {
      setSearchedData(data);
      return;
    }
    const updatedSearch = data.filter((item) => Object.keys(item).some((key) => item[key as keyof data].toString().toLowerCase().includes(lowerCaseQuery)));
    setSearchedData(updatedSearch);
  };

  useEffect(() => setSearchedData(data), [data]);

  return { searchedData, handleSearch };
};

export default useSearch;
