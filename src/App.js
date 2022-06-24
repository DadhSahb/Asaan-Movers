import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StaffLogin from "./components/staff login/Login";
import UserLogin from "./components/user login/login and register/login";
import UserRegister from "./components/user login/login and register/register";
import AdminLogin from "./components/admin login/adminlogin";
import Index from "./components/Main Website/pages";
import Services from "./components/Main Website/pages/Services";
import About from "./components/Main Website/pages/About";
import Contact from "./components/Main Website/pages/contact";
import AdminPortal from "./components/admin login/adminPortal";
import AddEditForm from "./components/admin login/AddEditForm";
import StaffPortal from "./components/staff login/StaffPortal";
import Logout from "./components/user login/login and register/logout";
import CustomerPortal from "./components/user login/login and register/CustomerPortal";
import WareHousing from "./components/Main Website/pages/WareHousing";
import LocalRelo from "./components/Main Website/pages/LocalRelo";
import DomesticRelo from "./components/Main Website/pages/DomesticRelo";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/stafflogin" exact>
          <StaffLogin />
        </Route>
        <Route>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/userlogin" exact>
            <UserLogin />
          </Route>
          <Route path="/userregister" exact>
            <UserRegister />
          </Route>
          <Route path="/adminlogin" exact>
            <AdminLogin />
          </Route>
          <Route path="/admin" exact>
            <AdminPortal />
          </Route>
          <Route path="/admin/addform" exact>
            <AddEditForm />
          </Route>
          <Route path="/staff/staffpotal" exact>
            <StaffPortal />
          </Route>
          <Route path="/user/logout" exact>
            <Logout />
          </Route>
          <Route path="/user/customerportal" exact>
            <CustomerPortal />
          </Route>
          <Route path="/warehouseing" exact>
            <WareHousing />
          </Route>
          <Route path="/localrelocation" exact>
            <LocalRelo />
          </Route>
          <Route path="/domesticrelocation" exact>
            <DomesticRelo />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}
