//understanding state
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";

function App() {
    return (
        <>
            <Router>    
                {/* no changing components */}
                <Navbar title="iSaswat" />
                <Alert message="" />
            {/* changing componets are in switch */}
                <Switch>
                    <Route exact path="/textutil">
                        <TextForm heading="Enter the text to analyze below" />
                    </Route>

                    <Route exact path="/about">
                        <About />
                   </Route>
                </Switch>



            </Router>
        </>
    );
}

export default App;
/*
react router dom for no reloading
click-textutil
click-about

*/
