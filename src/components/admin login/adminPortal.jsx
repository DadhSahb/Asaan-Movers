import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import "./adminportal.css";
import logo from "../Main Website/img/logo/logoasaan2.png";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminPortal() {
  const logOut = function () {
    localStorage.removeItem("admin-auth-token");
  };

  const [staffs, setStaffs] = useState([]);
  const token = localStorage.getItem("admin-auth-token");

  const getStaffs = async () => {
    await axios
      .get("http://localhost:5000/api/staff/all", {
        headers: { "admin-auth-token": token },
      })
      .then((response) => {
        setStaffs(response.data);
      });
  };
  useEffect(() => {
    getStaffs();
  }, []);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Asaan Movers Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1 d-flex justify-content-center">
                Admin Portal
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success" onClick={logOut}>
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <>
        <aside className="menu-sidebar d-none d-lg-block">
          <div className="adminlogo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="menu-sidebar__content js-scrollbar1">
            <nav className="navbar-sidebar">
              <ul className="list-unstyled navbar__list">
                <li className="active has-sub" />
                <a className="js-arrow" href="#">
                  <i className="fas fa-tachometer-alt"></i>Dashboard
                </a>
              </ul>
            </nav>
          </div>
        </aside>
      </>
      <div className="main-content mx-auto">
        <div className="section__content section__content--p30 d-flex justify-content-center">
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-12">
                <div className="overview-wrap ">
                  <h2 className="title-1">overview</h2>
                  <Link to="/admin/addform">
                    <button className="au-btn au-btn-icon au-btn--blue">
                      Add Staff
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabble row d-flex justify-content-center">
          <div className="tabblee col-lg-9 ml-6">
            <h2 className="title-1 m-b-25 mb-4 d-flex justify-content-center">
              Staff Members
            </h2>
            <div className="table-responsive table--no-card m-b-40">
              <table className="table table-borderless table-striped table-earning ml-5 align-self-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th className="text-right">Job Type</th>
                    <th className="text-right">Status</th>
                    <th className="text-right">Delete/Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs.map((item) => {
                    return;
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                    </tr>;
                  })}
                  {/* <tr>
                                                <td>2018-09-29 05:57</td>
                                                <td>100398</td>
                                                <td>iPhone X 64Gb Grey</td>
                                                <td className="text-right">$999.00</td>
                                                <td className="text-right">1</td>
                                                <td className="text-right"><Button className='btn btn-danger'><i class="fa-solid fa-trash-can" alt="Delete"/></Button> <Button className='btn btn-warning' alt="Edit"><i class="fa-solid fa-pen-to-square" alt="Delete"/></Button></td>
                                            </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPortal;
