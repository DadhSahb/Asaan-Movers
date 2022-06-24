import React, { useState } from "react";
import UserCSS from "./admin.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const toPortalPage = () => history.push("/admin");

  const loginAdmin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/adminAuth", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("admin-auth-token", response.data);
        toPortalPage();
      });
  };

  return (
    <div className={UserCSS.containerr}>
      <form onSubmit={loginAdmin} className={UserCSS.form}>
        <h2>Admin Login</h2>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className={UserCSS.box}
          placeholder="Enter Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={UserCSS.box}
          placeholder="Enter Password"
        />
        <button className={UserCSS.submit}>Sign In</button>
      </form>
    </div>
  );
}
export default AdminLogin;
