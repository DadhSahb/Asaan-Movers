import React, { useState, useEffect } from "react";
import "../pages/styles.css";
import Footer from "./footer";
import NavBar from "./Navbar";
import Top from "./top";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DomesticRelo() {
  const [me, setMe] = useState([]);
  const token = localStorage.getItem("customer-auth-token");

  const getMe = async () => {
    await axios
      .get("http://localhost:5000/api/customers/me", {
        headers: { "customer-auth-token": token },
      })
      .then((responce) => {
        setMe(responce.data);
      });
  };
  useEffect(() => {
    getMe();
  }, []);
  return (
    <>
      <Top />
      <NavBar />
      <section
        className="dom contact-form-area section-bg  pt-115 pb-120 fix"
        data-background="assets/img/gallery/section_bg02.jpg"
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-8 col-lg-9">
              <div className="contact-form-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-tittle mb-50">
                      <span>Domestic Relocation Request</span>
                      <h2>Request</h2>
                      <p>
                        Fill the form after sign in and your request will be
                        sent to our staff.
                      </p>
                    </div>
                  </div>
                </div>
                <form action="#" className="contact-form">
                  <div className="row ">
                    <div className="col-lg-6">
                      <div className="select-items">
                        <select
                          name="select"
                          id="select1"
                          placeholder="Type of Vehicle"
                        >
                          <option value="">Truck</option>
                          <option value="">Shah Zor</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="input-form">
                        <input type="text" placeholder="City" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="input-form">
                        <input type="text" placeholder="Number of Days" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="input-form">
                        <input type="text" placeholder="Pickup Location" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="input-form">
                        <input type="text" placeholder="Number of Labours" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <Link to={me.name ? "/" : "/userlogin"}>
                        <button name="submit" className="submit-btn">
                          Request a Quote
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
