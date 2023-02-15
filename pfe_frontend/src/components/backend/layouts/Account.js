import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
// components/backend

import AccountNavbar from "components/backend/Navbars/AccountNavbar.js";
import Sidebar from "components/backend/Sidebar/Sidebar.js";
import HeaderStats from "components/backend/Headers/HeaderStats.js";
import FooterAdmin from "components/backend/Footers/FooterAdmin.js";
import firebase from "firebase"
// views

import Dashboard from "components/backend/views/account/Dashboard.js";
import Settings from "components/backend/views/account/Settings.js";
import Historic from "components/backend/views/account/Historic.js";
import Diagnostic from "components/backend/views/account/diagnostic/Diagnostic.js";
import StorageService from "services/StorageService";
export default function Account() {
setInterval(()=>{
  var user = firebase.auth().currentUser;
  if(user){
    firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            StorageService.setIdToken(idToken)
        }).catch(function(error) {

        });

  }
},3500000)
  return (
    <div>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AccountNavbar />
        <HeaderStats/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route exact path="/dashboard"  component={Dashboard} />
            <Route exact path="/diagnostic" component={Diagnostic} />
            <Route exact path="/historic" component={Historic} />
            <Route exact path="/profil" component={Settings} />
            <Redirect from="*" to="/dashboard" />

          </Switch>
            <FooterAdmin />
            <br/>
        </div>
      </div>
    </div>
  );
}
