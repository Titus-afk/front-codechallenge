import usePagination from "../../hooks/usePagination";
import DataTableBody from "./DataTableBody";
import DataTableHeader from "./DataTableHeader";
import PageSizeSelector from "./PageSizeSelector";
import Pagination from "./Pagination";
import usePageSize from "../../hooks/usePageSize";
import { useEffect } from "react";
import useSort from "../../hooks/useSort";
import useSearch from "../../hooks/useSearch";
import DataTableSearch from "./DataTableSearch";
import EmptyState from "./EmptyState";
import EditColumnDrawer from "./EditColumnDrawer";
import useColumns from "../../hooks/useColumns";
import "./styles/datatable.css";
import { column, data, pageSize, sortSelection } from "../../types";

interface Props {
  mode?: "light" | "dark";
  data: data[];
  columns: column[];
  defaultSort?: sortSelection;
  defaultPageSize?: pageSize;
  condensed?: boolean;
}

const DataTable = ({ mode = "light", data, columns, defaultSort = { col: "id", type: "asc" }, condensed = false, defaultPageSize = 10 }: Props) => {
  const { generatedColumns, handleColumns, showDrawer, setShowDrawer, modifiedData } = useColumns(data, columns);
  const { searchedData, handleSearch } = useSearch(modifiedData);
  const { sortSelection, handleSortSelection, sortedArray } = useSort(searchedData, defaultSort);
  const { pageSize, setPageSize, pageSizes } = usePageSize(defaultPageSize);
  const { currentPage, setCurrentPage, handlePageChange, paginatedData, dataRangeIndex } = usePagination(sortedArray, pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, searchedData, setCurrentPage]);

  return (
    <div className={`dt__wrapper ${mode === "light" ? "dt--light" : "dt--dark"}`}>
      {showDrawer && <EditColumnDrawer columns={generatedColumns} handleColumns={handleColumns} setShowDrawer={setShowDrawer} />}
      <div className="dt__header">
        <PageSizeSelector pageSizes={pageSizes} pageSize={pageSize} handlePageSize={setPageSize} />
        <div className="dt__actions">
          <button role="edit-columns" className="btn btn--link" onClick={() => setShowDrawer(true)}>
            Edit Columns
          </button>
          <DataTableSearch handleSearch={handleSearch} />
        </div>
      </div>
      <div className="dt">
        {paginatedData.length === 0 ? (
          <EmptyState />
        ) : (
          <table>
            <DataTableHeader columns={generatedColumns} sortSelection={sortSelection} handleSortSelection={handleSortSelection} />
            <DataTableBody data={paginatedData} condensed={condensed} />
          </table>
        )}
      </div>
      {searchedData.length !== 0 && (
        <div className="dt__footer">
          <h3 className="pagesize">
            Showing {dataRangeIndex.start} - {dataRangeIndex.end} of {searchedData.length} entries
          </h3>
          <Pagination itemsCount={searchedData.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
};

export default DataTable;
