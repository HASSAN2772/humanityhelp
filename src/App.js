import "./App.css";
import React, { useState } from "react";
import Login from "../src/Components/Login/Login";
import Signup from "../src/Components/Signup/Signup";
import ContactUs from "./Components/Contactus/ContactUs";
import Gallery from "./Components/Gallery/Gallery";
import Main from "../src/Components/Main/main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../src/Components/Header/Navbar";
import Applicants from "./Components/Applicant/Applicants";
import RequestBlood from "../src/Components/DonationForms/RequestBlood";
import DonateForm from "../src/Components/DonationForms/DonateForm";
import DonateBlood from "../src/Components/DonationForms/DonateBlood";
import Nav from "./Components/Applicant/Nav";
import Form from "./form";
import ProtectedRoutes from "./Components/Protected/protectedRoutes";
import { useEffect } from "react";
import axios from "axios";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserTable from "./Components/Dashboard/DataTables/User/UserTable";
import CharityTable from "./Components/Dashboard/DataTables/Charity/charityTable";
import SingleUserDetails from "./Components/Dashboard/DataTables/User/SIngleUserDetails";
import RequesterView from "./Components/Dashboard/DataTables/RequestedBloodData/RequestedBloodview/RequesterView";
import UpdateRequestStatus from "./Components/Dashboard/DataTables/RequestedBloodData/updateRequestBloodStatus/updateRequestStatus";
import ProtectedAdminRoutes from "./Components/Protected/protectedAdminRoutes";
import BloodDonorSingle from "./Components/Dashboard/DataTables/BloodDonor/BloodDonor View/BloodDonorSingle";
import UpdateBlood from "./Components/Dashboard/DataTables/BloodDonor/updatedonorbloodrequest/updateBlood";
import ForgotPassword from "./Components/ApiFeatures/ForgotPassword";
import UpdateUserRole from "./Components/Dashboard/DataTables/User/updateUserRole";
import SubmitOttp from "./Components/ApiFeatures/SubmitOttp";
import CharityView from "./Components/Dashboard/DataTables/Charity/charityView";

export const BASE_URL = "http://localhost:5000/api/v1/";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Switch>
            {/* <Route path='/gallery'><ProtectedRoutes  component={Gallery}/></Route> */}
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/navbar">
              <Navbar />
            </Route>
            <Route exact path="/blood/donor/single/:id">
              <BloodDonorSingle />
            </Route>
            <Route exact path="/dashboard/data/:id">
              <ProtectedAdminRoutes component={SingleUserDetails} />
            </Route>
            <Route exact path="/dashboard/request/data/:id">
              <RequesterView />
            </Route>
            <Route exact path="/dashboard/charity/data/:id">
              <CharityView />
            </Route>
            <Route exact path="/dashboard">
              <ProtectedAdminRoutes component={Dashboard} />
            </Route>
            <Route exact path="/dashboard/update/request/:id">
              <ProtectedAdminRoutes component={UpdateRequestStatus} />
            </Route>
            <Route exact path="/dashboard/update/blood/:id">
              <ProtectedAdminRoutes component={UpdateBlood} />
            </Route>
            <Route exact path="/dashboard/update/role/user/:id">
              <ProtectedAdminRoutes component={UpdateUserRole} />
            </Route>
            <Route exact path="/applicants">
              <ProtectedRoutes component={Nav} />
            </Route>
            <Route exact path="/requestblood">
              <ProtectedRoutes component={RequestBlood} />
            </Route>
            <Route exact path="/donateblood">
              <ProtectedRoutes component={DonateBlood} />
            </Route>
            <Route exact path="/charity">
              <ProtectedRoutes component={DonateForm} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/forgot/password">
              <ForgotPassword />
            </Route>
            <Route exact path="/forgot/password/token/:id/:token">
              <SubmitOttp />
            </Route>
            <Route exact path="/contact">
              <ContactUs />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
