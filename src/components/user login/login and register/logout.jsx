import React from "react";
import { Link } from "react-router-dom";
export default function Logout() {
  const logout = function () {
    localStorage.removeItem("customer-auth-token");
  };
  return (
    <div class="container text-secondary mt-5">
      <div class="row justify-content-center">
        <div class="col-10 col-sm-7 m-2 mt-5">
          <div class="card border border-danger mt-5 p-sm-4">
            <div class="card-body">
              <div class="card-header bg-transparent border-danger ">
                <h3 class="my-0 text-danger">Log Out</h3>
              </div>
              <div class="card-body">
                <p class="card-text">
                  You are currently login as <b></b>, are you sure you want to
                  sign out from Asaan Movers?
                </p>
                <form method="post">
                  <input type="hidden" />
                  <Link to="/">
                    <button
                      onClick={logout}
                      class="btn btn-danger my-2"
                      type="submit"
                    >
                      <i class="fa fa-door-open"></i> Logout
                    </button>
                  </Link>
                  <br />
                  <br />
                  <Link to="/">
                    <a class="mt-4">
                      <i class="fa fa-arrow-left"></i> Back to Dashboard
                    </a>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
