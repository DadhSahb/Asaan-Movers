import React, { useState } from "react";
import UserCSS from "./style.module.css";
import uiImg from "../../../images/login.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const toHomePage = () => history.push("/");

  const loginUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/customerAuth", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("customer-auth-token", response.data);
        toHomePage();
      });
  };

  return (
    <div className={`${UserCSS.containerr}`}>
      <form
        onSubmit={loginUser}
        className={`col-lg-6 col-md-6 ${UserCSS.form}`}
      >
        <h2>SIGN IN</h2>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className={UserCSS.box}
          placeholder="Enter Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className={UserCSS.box}
          placeholder="Enter Password"
        />
        <button value="SIGN IN" class={UserCSS.submit} placeholder="">
          Sign In
        </button>
        {/* <a href="#">Forget Password?</a> */}
        <Link to="/UserRegister"> Dont have an Account?</Link>
      </form>

      <div className={`col-lg-6 col-md-6 ${UserCSS.img}`}>
        <img className="uiimg" src={uiImg} alt="" />
      </div>
    </div>
  );
}
export default UserLogin;
