import React from "react";
import "../../staff login/staffportal.css";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import logo from "../../Main Website/img/logo/logoasaan2.png";

export default function StaffPortal() {
  return (
    <>
      <div className="sidebar d-none d-lg-block">
        <div className="mt-5 dashboard">
          <a>Dashboard</a>
        </div>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="70"
              height="40"
              className="d-inline-block align-top"
            />
            {""}
          </Navbar.Brand>
          <Navbar.Brand>Customer Login</Navbar.Brand>
          <Form className="d-flex">
            <Button variant="outline-success">Logout</Button>
          </Form>
        </Container>
      </Navbar>
      <main className="mainOfstaff">
        <div>
          <h1 className="d-flex justify-content-start mt-5">Order Summary:</h1>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-9 ml-6">
              <h2 className="title-1 m-b-25 mb-4 mt-5">Requests</h2>
              <div className="table-responsive table--no-card m-b-40">
                <table className="table table-borderless table-striped table-earning ml-5">
                  <thead>
                    <tr>
                      <th>date</th>
                      <th>order ID</th>
                      <th>name</th>
                      <th className="text-right">price</th>
                      <th className="text-right">quantity</th>
                      <th className="text-right">total</th>
                      <th className="text-right">Accept/Reject</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2018-09-29 05:57</td>
                      <td>100398</td>
                      <td>iPhone X 64Gb Grey</td>
                      <td className="text-right">$999.00</td>
                      <td className="text-right">1</td>
                      <td className="text-right">$999.00</td>
                      <td className="text-right">
                        <Button className="btn btn-warning">
                          <i class="fa-solid fa-first-order" alt="Delete" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
