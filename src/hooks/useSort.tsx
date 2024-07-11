import { useEffect, useState, useCallback } from "react";
import { data, orderArray, sortSelection } from "../types";

const useSort = (initialData: data[], defaultSort: sortSelection) => {
  const [sortSelection, setSortSelection] = useState<sortSelection>(defaultSort);
  const [sortedArray, setSortedArray] = useState<data[]>(initialData);

  const handleSortSelection = (colName: keyof data) => {
    if (colName === sortSelection.col) {
      setSortSelection({
        ...sortSelection,
        type: sortSelection.type === "asc" ? "dsc" : "asc",
      });
    } else {
      setSortSelection({ col: colName, type: "dsc" });
    }
  };

  const sortArray: orderArray = useCallback((array, orderBy, orderType) => {
    return [...array].sort((a, b) => {
      const valueA = a[orderBy];
      const valueB = b[orderBy];

      if (valueA < valueB) {
        return orderType === "dsc" ? 1 : -1;
      }
      if (valueA > valueB) {
        return orderType === "dsc" ? -1 : 1;
      }
      return 0;
    });
  }, []);

  useEffect(() => {
    setSortedArray(sortArray(initialData, sortSelection.col, sortSelection.type));
  }, [initialData, sortSelection, sortArray]);

  return { sortedArray, sortSelection, handleSortSelection };
};

export default useSort;
