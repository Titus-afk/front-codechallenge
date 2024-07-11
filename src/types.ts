export type data = {
  id: number;
  name: string;
  location: string;
  phoneNumber: string;
};

export type generateColumns = (data: data) => void;
export type createArrayType = (fromIndex: number, toIndex: number) => number[];

// Order Array Type

export type orderType = "asc" | "dsc";
export type orderBy = keyof data;
export type orderArray = (array: data[], orderBy: orderBy, order?: orderType) => data[];

// Sort Selection
export type sortSelection = { col: keyof data; type: "asc" | "dsc" };
export type handleSortSelection = (col: keyof data) => void;

// Search Array
export type searchArray = (query: string) => void;

// Pagination Type
export type page = number;
export type itemsCount = number;
export type onPageChange = (page: page) => void;
export type currentPage = number;
export type dataRange = { start: number; end: number };
export type paginate = (data: data[], startIndex: number, endIndex: number) => data[];

// Page Size Type
export type pageSize = number;
export type handlePageSize = (pageSize: pageSize) => void;

// Column Type
export type colName = keyof data;
export type visibility = boolean;
export type sortable = boolean;
export type column = {
  colName: colName;
  label: string;
  visibility: visibility;
};
export type handleColumns = (colName: colName, property: keyof column, value: boolean | string) => void;

export type showDrawer = boolean;
export type setShowDrawer = (showDrawer: showDrawer) => void;
