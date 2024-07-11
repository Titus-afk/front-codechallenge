import { useRef } from "react";
import { column, handleColumns, setShowDrawer } from "../../types";
import "./styles/editcolumndrawer.css";
interface Props {
  columns: column[];
  handleColumns: handleColumns;
  setShowDrawer: setShowDrawer;
}

const EditColumnDrawer = ({ columns, handleColumns, setShowDrawer }: Props) => {
  const checkBoxRef = useRef(null);

  return (
    <div className="drawer__wrapper" role="editcolumn-drawer">
      <div className="drawer">
        <div className="drawer__header">
          <h3>Edit Columns</h3>
          <span onClick={() => setShowDrawer(false)}>Close</span>
        </div>
        <div className="drawer__body">
          {columns.map(({ colName, visibility, label }, key) => (
            <div key={key} className="drawer__item">
              <div className="drawer__clickable" onClick={() => handleColumns(colName, "visibility", visibility === true ? false : true)}>
                <input ref={checkBoxRef} type="checkbox" checked={visibility} />
                <h4>{label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditColumnDrawer;
