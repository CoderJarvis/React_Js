import React from 'react'
import Navbar from './components/MyApp1/Navbar'
import Entertainment from './components/MyApp1/Entertainment';
import Sports from './components/MyApp1/Sports';
import Business from './components/MyApp1/Business';
import Technology from './components/MyApp1/Technology';
import Health from './components/MyApp1/Health';
import Science from './components/MyApp1/Science';
import Home from './components/MyApp1/Home';
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
