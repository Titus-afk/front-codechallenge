import { column, handleSortSelection, sortSelection } from "../../types";
import "./styles/datatable-header.css";
interface Props {
  columns: column[];
  sortSelection: sortSelection;
  handleSortSelection: handleSortSelection;
}

const DataTableHeader = ({ columns, sortSelection, handleSortSelection }: Props) => {
  return (
    <>
      {/* <colgroup>
        {columns.map(({ width }, colIndex) => (
          <col key={colIndex} style={{ minWidth: "20px", width: `${width}%` }} />
        ))}
      </colgroup> */}
      <thead role="table-header">
        <tr>
          {columns.map(
            ({ colName, visibility, label }, colIndex) =>
              visibility === true && (
                <th key={colIndex} scope="col">
                  <div className="cell" onClick={() => handleSortSelection(colName)}>
                    <h5>{label}</h5>
                    <span className={`material-symbols-outlined ${sortSelection.col === colName && "active"}`}>{sortSelection.type === "dsc" ? "arrow_upward" : "arrow_downward"}</span>
                  </div>
                </th>
              )
          )}
        </tr>
      </thead>
    </>
  );
};

export default DataTableHeader;
