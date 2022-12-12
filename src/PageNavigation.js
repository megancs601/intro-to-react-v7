import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const RESULTS_PER_PAGE = 10;

const PageNavigation = (props) => {
  const { setPage, numberOfResults } = props;
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(numberOfResults / RESULTS_PER_PAGE))
  }, [numberOfResults]);

  const handlePageClick = (e) => {
    setPage(e.selected);
  };

  return (
      <div>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
  );
};

export default PageNavigation;
