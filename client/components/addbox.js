import React from "react";
import { useState } from "react";
import styles from "../styles/Addbox.module.css";

export default function Addbox(props) {
  let today = new Date().toISOString().slice(0, 10);
  const [formData, setFormData] = useState({
    deviceName: "",
    macAddress: "00:18:44:11:3A:B7",
    ip: "",
    date: today,
    power: "",
  });

  const [formErrors, setFormErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.deviceName !== "" &&
      formData.ip !== "" &&
      !isNaN(Number(formData.power))
    ) {
      setFormErrors(false);
      props.onSubmit(formData);
    } else {
      setFormErrors(true);
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={styles.box_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Device name"
          required
          onChange={handleChange}
          name="deviceName"
          value={formData.deviceName}
          autoComplete="off"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="IP"
          required
          onChange={handleChange}
          name="ip"
          value={formData.ip}
          autoComplete="off"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Power"
          required
          onChange={handleChange}
          name="power"
          value={formData.power}
          autoComplete="off"
        />
        <div style={{ height: "20px" }}>
          <div className={`${formErrors ? "form__validate" : "form__valid"}`}>
            Invalid power input
          </div>
        </div>
        <button className={styles.submit_button}>Add device</button>
      </form>
    </div>
  );
}
