import React from 'react'
import Navbar from './components/Navbar'
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Business from './components/Business';
import Technology from './components/Technology';
import Health from './components/Health';
import Science from './components/Science';
import Home from './components/Home';
// import Carousel from './components/Carousel';
import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";

export default function MyApp1() {
    return (
        <>
            <Router>

                <Navbar />
                {/* <Carousel /> */}
                <Switch>


                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/entertainment">
                        <Entertainment />
                    </Route>
                    <Route path="/sports">
                        <Sports />
                    </Route>
                    <Route path="/business">
                        <Business />
                    </Route>
                    <Route path="/technology">
                        <Technology />
                    </Route>
                    <Route path="/health">
                        <Health />
                    </Route>
                    <Route path="/science">
                        <Science />
                    </Route>
  
                </Switch>

            </Router>
        </>
    )
}
