
import React,{useState,useEffect} from "react";
import { Route, Switch, Redirect,withRouter } from "react-router-dom";

import "components/frontend/styles/globalStyles.css";
import Account from "components/backend/layouts/Account.js";
import LoginPage from "components/frontend/pages/Login.js";
import SignupPage from "components/frontend/pages/Signup.js";
import SaaSProductLandingPage from "components/frontend/demos/SaaSProductLandingPage"
import PasswordReset from "components/frontend/pages/PasswordReset"
import{TransitionGroup,CSSTransition} from 'react-transition-group'
import AuthProvider from './Auth'
import PrivateRoute from './PrivateRoute'
import "tailwindcss/dist/base.css";

const App=(props)=> {
    const [depth,setDepth]=useState("")
    const getPathDepth=(location) =>{
        let pathArr = location.pathname.split("/");
        pathArr = pathArr.filter(n => n !== "");
        return pathArr.length;
    }
    
    const timeout={enter:800,exit:400}
    const {location}=props
    const currentKey = location.pathname.split("/")[1] || "/";
   
    useEffect(()=>{
        setDepth(getPathDepth(location))
    },[location])
    
    return (    
    <AuthProvider>
            <TransitionGroup component="div">
                <CSSTransition 
                key={currentKey}
                timeout={timeout}
                classNames="pageSlider"
                mountOnEnter={false}
                unmountOnExit={true}>
                <div className={
                        (getPathDepth(location) - depth) >= 0
                        ? "left"
                        : "right"
                    }>
                    <Switch location={location}>
                        <Route exact path="/"><SaaSProductLandingPage/></Route> 
                        <Route exact path="/connexion"><LoginPage/></Route>
                        <Route exact path="/inscription"><SignupPage/></Route>
                        <Route exact path="/reinitialisation-mot-de-passe"><PasswordReset/></Route>
                        <PrivateRoute path="/" component={Account} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
                </CSSTransition>
            </TransitionGroup>
    </AuthProvider>       
    );
    
}

export default withRouter(App);