import React, { useState } from 'react'

export default function App33() {
    const [bgClr, setBgClr] = useState('white');
    const [clickText, setClickText] = useState('click me');
    const [textColor, setTextColor] = useState('white')

    let handleClick=()=>{
        setBgClr('blue');
        setClickText('you have clicked')
        setTextColor('red');
    }
    let handleDoubleClick=()=>{
        alert("you have double clicked");
        setBgClr('white');
    }
    return (
        <>
            <div className="container" style={{backgroundColor:bgClr}}>
            <button type="button" class="btn btn-primary" onClick={handleClick} style={{color:textColor}}>{clickText}</button>

            <button type="button" class="btn btn-primary my-2" onDoubleClick={handleDoubleClick} >double click me</button>
            </div>
        </>
    )
}


//handing events