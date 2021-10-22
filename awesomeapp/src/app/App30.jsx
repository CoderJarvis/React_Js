import React, { useState } from "react";

export default function App30() {
  let [count, setCount] = useState(0);

  function handleAddClick() {
    // console.log("clicked");
    setCount(count+5);
  }
let handleSubClick=()=>setCount(count-5);
  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={handleAddClick} type="button" class="btn btn-primary">
          Add me
        </button>
        <button onClick={handleSubClick} type="button" class="btn btn-primary my-2">
          Substract me
        </button>
      </div>
    </>
  );
}
//changing state using hooks(useState)