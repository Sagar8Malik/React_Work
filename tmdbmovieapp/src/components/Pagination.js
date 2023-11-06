import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleInputChange = (e) => {
    const newPage = e.target.value.trim();
    const parsedPage = parseInt(newPage);
    if (parsedPage < 1 || parsedPage > totalPages) {
      return null;
    }
    if (!isNaN(parsedPage) && parsedPage <= totalPages) {
      onPageChange(parsedPage);
      return null;
    }
    onPageChange(newPage);
  };

  return (
    <div className="pagination">
      <button
        className="prev-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Prev
      </button>

      <input
        type="number"
        value={currentPage}
        min="1"
        max={totalPages}
        onChange={handleInputChange}
        className="page-input"
      />

      <span className="total-pages"></span>

      <button
        className="next-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
