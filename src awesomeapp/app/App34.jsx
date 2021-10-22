import React, { useState } from "react";

export default function App34() {
  const [name, setName] = useState();
  const [greetName, setGreetName] = useState();

  const handleOnChange = (e) => {
    setName(e.target.value); //imp 'e'
  };
  const handleClick = () => {
    setGreetName(name);
    setName("");
  };

  return (
    <>
      <div className="container">
        <h1>Heloo...{greetName}</h1>
        <input
          type="text"
          className="form-control"
          style={{ width: "300px" }}
          placeholder="Enter your name"
          onChange={handleOnChange}
          value={name}
        />

        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={handleClick}
        >
          click me
        </button>
      </div>
    </>
  );
}

//react form
//onChnage(),value,state var-{name} mandtatory