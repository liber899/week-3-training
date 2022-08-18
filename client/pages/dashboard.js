import React, { useState, useEffect } from "react";
import styles from "../styles/Dashboard.module.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import TableBody from "../components/tablebody";
import Addbox from "../components/addbox";
import Chart from "../components/chart";

export default function Dashboard() {
  const url = "http://localhost:4000/devices";

  const [devices, setDevices] = useState([]);
  const [sum, setSum] = useState(0);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [mobileState, setMobileState] = useState(false);
  const [width, setWidth] = useState(0);

  // const getNewColor = () => {
  //   let n = (Math.random() * 0xfffff * 1000000).toString(16);
  //   return "#" + n.slice(0, 6) + "20";
  // };

  const openMenu = () => {
    setMobileState(true);
    console.log(mobileState);
  };

  const closeMenu = () => {
    setMobileState(false);
  };

  // const [chartData, setChartData] = useState({});

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
      setMobileState(false);
    };

    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDevices(data));
  }, [devices]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < devices.length; i++) {
      sum += Number(devices[i].power);
    }
    return setSum(sum);
  }, [devices]);

  useEffect(() => {
    const fetchSamplings = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setChartData({
        labels: data.map((sampling) => sampling.deviceName),
        datasets: [
          {
            label: "Power Consumption",
            data: data.map((sampling) => sampling.power),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
        options: {
          parsing: false,
          normalized: true,
          animation: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          animation: {
            duration: 0,
          },
        },
      });
    };
    fetchSamplings();
  }, [devices]);

  const getData = async (data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <Sidebar mobileState={mobileState} onClick={closeMenu} />
      <Header onClick={openMenu} />
      <div className={styles.main_container}>
        <div className={styles.table_container}>
          <table className={styles.table}>
            <thead className={styles.table_head}>
              <tr>
                <th className={styles.table_title}>Devices</th>
                <th className={styles.table_title}>MAC Address</th>
                <th className={styles.table_title}>IP</th>
                <th className={styles.table_title}>Created Date</th>
                <th className={styles.table_title}>Power Consumption (Km/h)</th>
              </tr>
            </thead>
            <tbody>
              {devices &&
                devices.map((el) => {
                  return (
                    <TableBody
                      key={el.id}
                      devices={el.deviceName}
                      address={el.macAddress}
                      ip={el.ip}
                      date={el.date}
                      power={el.power}
                    />
                  );
                })}
              <tr className={styles.table_total}>
                <td className={styles.table_title}>Total power</td>
                <td></td>
                <td></td>
                <td></td>
                <td className={styles.table_title}>{sum}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.function_container}>
          <div className={styles.chart_container}>
            <Chart chartData={chartData} />
          </div>
          <Addbox onSubmit={getData} />
        </div>
      </div>
    </div>
  );
}
