import React from "react";
import styles from "../styles/Table.module.css";

export default function LogTable(props) {
  return (
    <tr className={styles.table_body}>
      <td className={styles.table_td}>{props.id}</td>
      <td className={styles.table_td}>{props.deviceName}</td>
      <td className={styles.table_td}>{props.action}</td>
      <td className={styles.table_td}>{props.date}</td>
    </tr>
  );
}
