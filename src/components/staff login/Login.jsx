import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import user from "../../images/user.png";
import css from "./login.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function StaffLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const toStaffPortal = () => history.push("/staff/staffpotal");

  const loginStaff = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/customerAuth", {
        email,
        password,
      })
      .then((responce) => {
        localStorage.setItem("x-auth-token", responce.data);
        toStaffPortal();
      });
  };
  return (
    <main className={css.background}>
      <div className={`conatiner mt-5 ${css.container}`}>
        <div className={css.row}>
          <div
            className={`formdiv text-center mt-5 p-3 col-lg-4 col-md-6 col-sm-12 mt-5 ${css.formdiv}`}
          >
            <img className={css.iconimg} src={user} alt="icon" />
            <Form onSubmit={loginStaff}>
              <h3>STAFF LOGIN</h3>
              <Form.Group className={css.input} controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className={css.input} controlId="formBasicPassword">
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary btn-block" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
export default StaffLogin;
