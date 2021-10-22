import React from "react";

export default function App21() {
    let a=100;
    let b=3;
    function sum(a,b)
    {
        return a+b;
    }
    function sub(a,b) {
        return a-b;
    }
    function mul(a,b) {
        return a*b;
    }
    function div(a,b) {
        return (a/b).toFixed(2);
    }
  return (
    <>
      <ul>
        <li>addition of the two numbers {sum(a,b)}</li>
        <li>substraction of the two numbers {sub(a,b)}</li>
        <li>multiplication  of the two numbers {mul(a,b)}</li>
        <li>division of the two numbers {div(a,b)}</li>
      </ul>
    </>
  );
}
