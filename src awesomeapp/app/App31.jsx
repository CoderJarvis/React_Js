import React, { useState } from 'react'


export default function App31() {
    // let t=new Date().toLocaleTimeString();
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    let handleClick=()=>{
        setTime(new Date().toLocaleTimeString());
    }
  return (
    <>
        <div className="container">
        <h1>{time}</h1>
      <button onClick={handleClick} type="button" class="btn btn-primary">
        Get time
      </button>
        </div>
    </>
  );
}
//changing state using hooks(useState)