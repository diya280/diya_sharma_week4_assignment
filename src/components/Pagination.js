import React from 'react';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className="page-item">
            <button
              onClick={() => handlePageChange(index + 1)}
              className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
