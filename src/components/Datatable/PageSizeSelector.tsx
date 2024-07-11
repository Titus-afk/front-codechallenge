import { handlePageSize, pageSize } from "../../types";
import "./styles/pagesize-selector.css";
interface Props {
  pageSizes: pageSize[];
  handlePageSize: handlePageSize;
  pageSize: pageSize;
}

const PageSizeSelector = ({ pageSizes, handlePageSize, pageSize }: Props) => {
  const onPageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handlePageSize(Number(e.currentTarget.value));
  };
  return (
    <div className="pagesize">
      <h5>
        <select role="datatable-pagesize" onChange={onPageSize} value={pageSize}>
          {pageSizes.map((pageSize, key) => (
            <option key={key} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        entries per page
      </h5>
    </div>
  );
};

export default PageSizeSelector;
