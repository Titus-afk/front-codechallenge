import { itemsCount, onPageChange, pageSize } from "../../types";
import { createArray } from "../../utlis";
import "./styles/paginate.css";
interface Props {
  pageSize: pageSize;
  itemsCount: itemsCount;
  onPageChange: onPageChange;
  currentPage: number;
}

const Pagination = ({ pageSize, itemsCount, onPageChange, currentPage }: Props) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = createArray(1, pageCount);

  return (
    <div className="pagination" role="pagination">
      <div className={currentPage === 1 ? "disabled" : ""} onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}>
        <span className="material-symbols-outlined">arrow_back</span>
      </div>
      {pages.map((pageNumber, key) => (
        <div role="page" className={currentPage === pageNumber ? "active" : ""} key={key} onClick={() => onPageChange(pageNumber)}>
          {pageNumber}
        </div>
      ))}
      <div className={currentPage === pageCount ? "disabled" : ""} onClick={() => currentPage < pageCount && onPageChange(currentPage + 1)}>
        <span className="material-symbols-outlined">arrow_forward</span>
      </div>
    </div>
  );
};

export default Pagination;
