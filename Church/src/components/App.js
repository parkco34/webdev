import React from 'react';
import Home from '../pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../Images/ucc-logo.png';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar hintColor="transparent" fontColor="white" scrollingFontColor="white" logo={logo}/>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
