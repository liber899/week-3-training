import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Search.module.css";

export default function Search(props) {
  const [searchQuery, setSeachQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(searchQuery);
  };

  const handleChange = (e) => {
    setSeachQuery(e.target.value);
  };

  return (
    <div className={styles.search_container}>
      <div>Action Logs</div>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Device name"
          onChange={handleChange}
          name="searchTerm"
          value={searchQuery}
          autoComplete="off"
        />
        <button className={styles.search_button}>Search</button>
      </form>
    </div>
  );
}
