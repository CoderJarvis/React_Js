//understanding state
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="saswat" />
      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
      </div>
      <About/>
    </>
  );
}

export default App;
/*

dark mode -About component
*/
