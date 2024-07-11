import { useState } from "react";
import { pageSize } from "../types";

const usePageSize = (defaultPageSize: pageSize) => {
  const pageSizes = [10, 20, 30, 100];
  const [pageSize, setPageSize] = useState<pageSize>(defaultPageSize);

  return { pageSizes, pageSize, setPageSize };
};

export default usePageSize;
