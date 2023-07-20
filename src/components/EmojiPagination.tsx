import React from "react";
import "../styles/EmojiPagination.css";

interface EmojiPaginationProps {
  currentPage: number;
  emojisPerPage: number;
  totalEmojis: number;
  onPageChange: (page: number) => void;
}

const EmojiPagination: React.FC<EmojiPaginationProps> = ({
  currentPage,
  emojisPerPage,
  totalEmojis,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalEmojis / emojisPerPage);

  if (totalPages <= 1) {
    // If there is only one page or no page, don't show pagination
    return null;
  }

  const pageNumbers = [];
  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPages, 5);
  } else if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - 4);
  }

  for (let page = startPage; page <= endPage; page++) {
    pageNumbers.push(page);
  }

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <>
          <button className="page-btn" onClick={() => onPageChange(1)}>Start</button>
          <button className="page-btn" onClick={() => onPageChange(currentPage - 1)}>Previous</button>
        </>
      )}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <>
          <button className="page-btn" onClick={() => onPageChange(currentPage + 1)}>Next</button>
          <button className="page-btn" onClick={() => onPageChange(totalPages)}>End</button>
        </>
      )}
    </div>
  );
};

export default EmojiPagination;
