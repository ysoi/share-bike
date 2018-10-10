import React,{Component} from "react";
import {HashRouter,Route,Switch} from "react-router-dom";
import Admin from "../views/admin";
import Home from "../views/home";
export default class Router extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                   <Switch>
                      <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}></Route>
                            </Switch>
                        </Admin>
                      }></Route>
                      
                   </Switch>
                   
                </div>
            </HashRouter>
        )
    }
}