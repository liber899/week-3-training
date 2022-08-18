import React from "react";
import styles from "../styles/Table.module.css";

export default function TableBody(props) {
  return (
    <tr className={styles.table_body}>
      <td className={styles.table_td}>{props.devices}</td>
      <td className={styles.table_td}>{props.address}</td>
      <td className={styles.table_td}>{props.ip}</td>
      <td className={styles.table_td}>{props.date}</td>
      <td className={styles.table_td}>{props.power}</td>
    </tr>
  );
}
