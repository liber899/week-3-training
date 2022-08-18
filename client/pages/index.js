import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({ userName: "", passWord: "" });
  const [loginErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(event) {
    setLoginData((prevLoginData) => {
      return {
        ...prevLoginData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(loginData));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(loginErrors).length === 0 && isSubmit) {
      Cookies.set("loggedIn", true);
      router.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginErrors]);

  function validate(values) {
    const errors = {};
    if (values.userName !== "John" && values.passWord !== "1234") {
      errors.passWord = "Username or password is incorrect";
    }
    return errors;
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h3 className={styles.loginBox__title}>SOIOT SYSTEM</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.loginBox__input}>
            <input
              className={styles.loginBox__username}
              type="text"
              placeholder="username"
              required
              onChange={handleChange}
              name="userName"
              value={loginData.userName}
              autoComplete="off"
            />
            <input
              className={styles.loginBox__password}
              type="text"
              placeholder="password"
              required
              onChange={handleChange}
              name="passWord"
              value={loginData.passWord}
              autoComplete="off"
            />
          </div>
          <div className={styles.loginBox__validate} id="validate">
            {loginErrors.passWord}
          </div>
          <div className={styles.loginBox__actions}>
            <button className={styles.loginBox__button}>LOGIN</button>
            <a href="#" className={styles.loginBox__createAccount}>
              or create new account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
