import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="footer-heading">
              <div className="row justify-content-between">
                <div className="col-xl-6 col-lg-8 col-md-8">
                  <div className="wantToWork-caption wantToWork-caption2">
                    <h2>We Understand The Importance Approaching Each Work!</h2>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <span className="contact-number f-right">+932xxxxx</span>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>COMPANY</h4>
                    <ul>
                      <a>
                        <Link to="/about">About Us</Link>
                      </a>
                      <br />
                      <a>
                        <Link to="/contact">Contact</Link>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Open hour</h4>
                    <ul>
                      <li>
                        <a>Monday 11am-7pm</a>
                      </li>
                      <li>
                        <a> Tuesday-Friday 11am-8pm</a>
                      </li>
                      <li>
                        <a> Saturday 10am-6pm</a>
                      </li>
                      <li>
                        <a> Sunday 11am-6pm</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>RESOURCES</h4>
                    <ul>
                      <li>
                        <a>Domestic Relocation</a>
                      </li>
                      <li>
                        <a>Local Relocation</a>
                      </li>
                      <li>
                        <a> Ware-Housing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo2_footer.png" alt="" />
                    </a>
                  </div>
                  <div className="footer-tittle">
                    <div className="footer-pera">
                      <p className="info1">
                        We never disapoint out customers with our services, we
                        are the only one who provide real time tracking system
                        with safe and relaible logistics solution.
                      </p>
                    </div>
                  </div>

                  <div className="footer-social ">
                    <a href="https://www.facebook.com/sai4ull">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="footer-copy-right text-center">
                  <p>Copyright &copy; All rights reserved </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
