//project 1
import React, { useState } from 'react'//hook

export default function TextForm(prop) {
    const [text, setText] = useState("");   //state variabe //state'll change constantly

    let handleUpClick = () => {
        console.log('clicked');
        let newText = text.toUpperCase();
        setText(newText);

    }
    let handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    let handleOnChange = (event) => {
        console.log("changed");
        setText(event.target.value) //now text variable value changed

    }
    let handleClearText = (event) => {
        setText("") //now text variable value changed

    }
    return (
        <>
        <div className="container">
        <div>
                <h1>{prop.heading}</h1>
                <textarea className="form-control" id="floatingTextarea2" rows="8" value={text} onChange={handleOnChange} placeholder="enter text here"></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to upper case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleloClick}>Convert to lower case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClearText}>Clear text</button>
            </div>
            <div className="container">
                <h3>your test summary</h3>
                <h5>No of words : {text.split(" ").length }</h5>
                <h5>No of characters : {text.length}</h5>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p>{text}</p>
                <h5>this text will need {0.008 * text.split(" ").length} minutes to read</h5>
            </div>
        </div>

        </>
    )
}


/*
using hook and state
*/