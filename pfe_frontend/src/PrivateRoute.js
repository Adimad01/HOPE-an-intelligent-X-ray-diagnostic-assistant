import React from "react"
import {Route,Redirect} from "react-router-dom"
import StorageService from "services/StorageService"

const PrivateRoute = ({component:RouteComponent,...rest})=>{
    return (
        <Route {...rest} 
            render={ routeProps=>StorageService.getUser()!==null?<RouteComponent {...routeProps}/>
                     : <Redirect to={"/connexion"}/> 
        }/>
    )
}

export default PrivateRoute;