//understanding state
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="saswat" />
      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
/*

cheack state in TextForm.js
*/
