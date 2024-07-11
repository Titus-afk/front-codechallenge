import { useState, useEffect } from "react";
import { data, dataRange, onPageChange, paginate } from "../types";

const usePagination = (initialData: data[], pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<data[]>([]);
  const [dataRangeIndex, setDataRangeIndex] = useState<dataRange>({
    start: 1,
    end: pageSize,
  });

  const handlePageChange: onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginate: paginate = (data, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setDataRangeIndex({
      start: startIndex + 1,
      end: endIndex > data.length ? data.length : endIndex,
    });
    return data.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const updatedData = paginate(initialData, currentPage, pageSize);
    setPaginatedData(updatedData);
  }, [initialData, currentPage, pageSize]);

  return {
    currentPage,
    handlePageChange,
    paginatedData,
    dataRangeIndex,
    setCurrentPage,
  };
};

export default usePagination;
