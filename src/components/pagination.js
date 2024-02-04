import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ currentPage, numPages, basePath }) => {
  const formattedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const prevPageLink = currentPage - 1 === 1 ? formattedBasePath : `${formattedBasePath}/${currentPage - 1}`;
  const nextPageLink = `${formattedBasePath}/${currentPage + 1}`;

  // Generate the pagination links 
  const paginationLinks = [];

  // Previous Page Link
  if (currentPage > 1) {
    paginationLinks.push(
      <Link key="prev" to={prevPageLink} rel="prev" style={{ margin: "0 10px" }}>
        ← Previous
      </Link>
    );
  }

  // First Page Link
  if (currentPage > 2) {
    paginationLinks.push(<Link key="first" to={formattedBasePath} style={{ margin: "0 10px" }}>1</Link>);
  }

  // Ellipsis before current page
  if (currentPage > 3) {
    paginationLinks.push(<span key="ellipsis-prev" style={{ margin: "0 10px" }}>...</span>);
  }

  // Previous Number
  if (currentPage > 1) {
    paginationLinks.push(<Link key={currentPage - 1} to={`${formattedBasePath}/${currentPage - 1}`} style={{ margin: "0 10px" }}>{currentPage - 1}</Link>);
  }

  // Current Page (Underlined, not a link)
  paginationLinks.push(<span key={currentPage} style={{ textDecoration: "underline", margin: "0 10px" }}>{currentPage}</span>);

  // Next Number
  if (currentPage < numPages) {
    paginationLinks.push(<Link key={currentPage + 1} to={`${formattedBasePath}/${currentPage + 1}`} style={{ margin: "0 10px" }}>{currentPage + 1}</Link>);
  }

  // Ellipsis after current page
  if (currentPage < numPages - 2) {
    paginationLinks.push(<span key="ellipsis-next" style={{ margin: "0 10px" }}>...</span>);
  }

  // Last Page Link
  if (currentPage < numPages - 1) {
    paginationLinks.push(<Link key="last" to={`${formattedBasePath}/${numPages}`} style={{ margin: "0 10px" }}>{numPages}</Link>);
  }

  // Next Page Link
  if (currentPage < numPages) {
    paginationLinks.push(
      <Link key="next" to={nextPageLink} rel="next" style={{ margin: "0 10px" }}>
        Next →
      </Link>
    );
  }

  // Return the entire pagination component with a single return statement
  return (
    <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
      {paginationLinks}
    </div>
  );
};

export default Pagination;