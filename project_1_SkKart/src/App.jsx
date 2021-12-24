import React from 'react'
import Navbar from './components/Navbar'
import Technology from './components/Technology';
import Sports from './components/Sports';
import Clothing from './components/Clothing';
import Grocery from './components/Grocery';
import Electronics from './components/Electronics';
import Furniture from './components/Furniture';
import Header from './components/Header';
// import Carousel from './components/Carousel';
import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";
import Footer from './components/Footer';
import Left from './components/Left';
import Right from './components/Right';

export default function MyApp1() {
    return (
        <>
            <Router>
                <Header />
                <Navbar />
                <Left />
                <Right />
                <Switch>


                    <Route path="/Technology">
                        <Technology />
                    </Route>
                    <Route path="/Sports">
                        <Sports />
                    </Route>
                    <Route path="/Clothing">
                        <Clothing />
                    </Route>
                    <Route path="/Grocery">
                        <Grocery />
                    </Route>
                    <Route path="/Electronics">
                        <Electronics />
                    </Route>
                    <Route path="/Furniture">
                        <Furniture />
                    </Route>

                </Switch>
                <Footer />

            </Router>
        </>
    )
}
