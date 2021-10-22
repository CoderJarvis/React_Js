//understanding state
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Navbar title="saswat" />
      <Alert message=""/>
      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
      </div>
      <About/>
    </>
  );
}

export default App;
/*
showing alert -Alert component (unsloved)
*/
