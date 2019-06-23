import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

import Header from './view/header';
import Home from './view/home';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="play-list-wrap">
                    <div>
                        <Link to="/"></Link>
                        <Link to="/header"></Link>
                    </div>
                   <Switch>
                        <Route path='/header' component={Header} />
                        <Route path='/' render={(e)=>{
                            if(!this.props.data.length){
                                return <Redirect to="/header" />;
                            }
                            return <Home {...e} />
                        }} />
                   </Switch> 
                </div>
            </Router>
        );
    }
}

export default connect(state=>state)(App);
