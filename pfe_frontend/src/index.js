
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

import "tailwindcss/dist/base.css";
import "components/frontend/styles/globalStyles.css";

import App from './App'
ReactDOM.render(
  <Router>
       <App/>
  </Router>
 ,
  document.getElementById("root")
);
