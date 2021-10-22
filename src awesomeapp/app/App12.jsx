import React from 'react'

export default function App12() {
    const name="saswat";
    const d=new Date().toLocaleDateString();
    const p=new Date().toLocaleTimeString();
    return (
        <>
            <h1>{`hi guys this is ${name}`}</h1> 
            <p>today's date is {d}</p>
            <p>current time is {p}</p>
        </>
    )
}
