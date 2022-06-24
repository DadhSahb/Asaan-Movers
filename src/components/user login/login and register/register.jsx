import React, { useState } from "react";
import CSS from "./register.module.css";
import uiImg from "../../../images/register.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const toLoginPage = () => history.push("/userlogin");

  const postUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/customers", {
        name,
        email,
        contact,
        password,
      })
      .then((response) => {
        toLoginPage();
      });
  };

  return (
    <div className={CSS.containerr}>
      <div className={CSS.img}>
        <img className="uiimg" src={uiImg} alt="" />
      </div>
      <form onSubmit={postUser} className={CSS.form}>
        <h2>SIGN UP</h2>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="username"
          class={CSS.box}
          placeholder="Enter Your Full Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          class={CSS.box}
          placeholder="Enter Your Email"
        />
        <input
          onChange={(e) => setContact(e.target.value)}
          type="text"
          name="number"
          class={CSS.box}
          placeholder="+923"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          class={CSS.box}
          placeholder="Enter Your Password"
        />
        <button value="SIGN UP" class={CSS.submit} placeholder="">
          Sign Up
        </button>
        <Link to="./userlogin">Already have an account?</Link>
        {/* <Link to='/UserRegister'> Dont have an Account?</Link> */}
      </form>
    </div>
  );
}
export default UserRegister;
