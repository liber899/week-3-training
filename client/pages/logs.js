import React, { useState, useEffect } from "react";
import styles from "../styles/Dashboard.module.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import LogTable from "../components/logtable";
import Search from "../components/searchbar";

export default function Logs() {
  const url = "http://localhost:4000/devicelog";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const [itemPerPage, setItemPerPage] = useState(8);

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
      <li
        className={currentPage == number ? "active_page" : "pagination"}
        key={number}
        id={number}
        onClick={handleClick}
      >
        {number}
      </li>
    );
  });

  const renderData = (data) => {
    return data.map((dt) => {
      return (
        <LogTable
          key={dt.id}
          id={dt.id}
          deviceName={dt.deviceName}
          action={dt.action}
          date={dt.date}
        />
      );
    });
  };

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
    pageIncrementBtn = (
      <li className="pagination" onClick={handleNextbtn}>
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className="pagination" onClick={handlePrevbtn}>
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  //add

  const [searchTerm, setSearchTerm] = useState("");

  const getData = (data) => {
    setSearchTerm(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:4000/devicelog?q=${searchTerm}`
      );
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <Sidebar />
      <Header />
      <div className={styles.main_container}>
        <Search onSubmit={getData} />
        <div className="table_container">
          <table className={styles.table}>
            <thead className={styles.table_head}>
              <tr>
                <th className={styles.table_title}>IP</th>
                <th className={styles.table_title}>Device</th>
                <th className={styles.table_title}>Action</th>
                <th className={styles.table_title}>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {renderData(currentItems)}
              <tr className={styles.table_total}>
                <td className="table_title">Total devices</td>
                <td></td>
                <td></td>
                <td className="table_title">{data.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="pageNumbers">
          <li className="pagination">
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

          <li className="pagination">
            <button
              onClick={handleNextbtn}
              disabled={currentPage == page[page.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
