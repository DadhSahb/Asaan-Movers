import React from "react";
import NavBar from "./Navbar";
import Top from "./top";
import "./styles.css";
import Footer from "./footer";
import movingHomeImg from "../../../images/moving-home.png";
import shipedImg from "../../../images/shipped.png";
import warehouseImg from "../../../images/warehouse.png";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <React.Fragment>
      <Top />
      <NavBar />
      <main>
        <div className="categories-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-80">
                  <span>Our Services</span>
                  <h2>What We Can Do For You</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-shipped">
                      <img src={shipedImg} />
                    </span>
                  </div>
                  <div className="cat-cap">
                    <Link to="/localrelocation" className="linkk">
                      <h5>
                        <a>Local Relocation</a>
                      </h5>
                    </Link>
                    <p>
                      We provide local relocation with real time tracking and
                      all the things are under your finger tips without any
                      worry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-ship">
                      <img src={movingHomeImg} />
                    </span>
                  </div>
                  <div className="cat-cap">
                    <Link to="/domesticrelocation" className="linkk">
                      <h5>
                        <a>Domestic Relocation</a>
                      </h5>
                    </Link>
                    <p>
                      Changing home or offices is really a headache. But dont
                      worry Asaan Movers are providing relocation service in
                      which we take care of your stuff and relocate it from your
                      location to your desired location.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-plane">
                      <img src={warehouseImg} />
                    </span>
                  </div>
                  <div className="cat-cap">
                    <Link to="warehouseing" className="linkk">
                      <h5>
                        <a>Ware-Housing</a>
                      </h5>
                    </Link>
                    <p>
                      Assan Movers provide warehousing service in which you can
                      store your important stuff and handover us we will store
                      it accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
