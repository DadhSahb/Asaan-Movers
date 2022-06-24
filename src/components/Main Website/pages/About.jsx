import React from "react";
import Footer from "./footer";
import NavBar from "./Navbar";
import "./styles.css";
import Top from "./top";
import aboutImg from "./../img/gallery/about2.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <React.Fragment>
      <Top />
      <NavBar />
      <div className="section-tittle about-low-area padding-bottom">
        <h2 className="d-flex justify-content-center mb-5">About Us</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              {/* <!-- about-img --> */}
              <div className="about-img ">
                <div className="about-font-img">
                  <img src={aboutImg} alt="" />
                </div>
                <div className="about-back-img d-none d-lg-block">
                  <img src="assets/img/gallery/about1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-caption mb-50">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle mb-35">
                  <span>About Our Company</span>
                  <h2>
                    Safe Logistic & Transport Solutions That Saves our Valuable
                    Time!
                  </h2>
                </div>
                <p>
                  Asaan Movers Provides easy and relaible services to their
                  cutomers with real time tracking. If you want to move from
                  anywhere locally or domestically witin or with in country, the
                  Asaan Movers provides all the services related to that
                  purpose.
                </p>
                <Link to="/contact">
                  <a className="aboutbtn mt-5">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
