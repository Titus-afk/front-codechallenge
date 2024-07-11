import { useState } from "react";
import type { column, data, handleColumns } from "../types";

const useColumns = (initialData: data[], initialColumns: column[]) => {
  const [modifiedData, setModifiedData] = useState<data[]>(initialData);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [generatedColumns, setColumns] = useState<column[]>(initialColumns);

  const handleColumns: handleColumns = (colName, property, value) => {
    const updatedColumns = generatedColumns.map((col) =>
      col.colName === colName ? { ...col, [property]: value } : col
    );
    setColumns(updatedColumns);
    const filteredData = filterData(initialData, updatedColumns);
    setModifiedData(filteredData);
  };

  const filterData = (data: data[], columns: column[]) => {
    return data.map((item) => {
      const filteredItem: any = {};
      columns.forEach((column) => {
        if (column.visibility) {
          filteredItem[column.colName] = item[column.colName];
        }
      });
      return filteredItem;
    });
  };

  return {
    generatedColumns,
    handleColumns,
    showDrawer,
    setShowDrawer,
    modifiedData,
    filterData,
  };
};

export default useColumns;
