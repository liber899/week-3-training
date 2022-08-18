import React from "react";
import { useState } from "react";

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const [itemPerPage, setItemPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);

  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);

  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const page = [];

  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    page.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = page.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (page.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <ul className="pageNumbers">
      <li>
        <button
          onClick={handlePrevbtn}
          disabled={currentPage == page[0] ? true : false}
        >
          Prev
        </button>
      </li>
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}

      <li>
        <button
          onClick={handleNextbtn}
          disabled={currentPage == page[page.length - 1] ? true : false}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
