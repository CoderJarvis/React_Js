import React, { useState } from 'react'
export default function App41() {
    let [value, setValue] = useState(0);

    let handleIncrement=()=>{

        if(value<10)
        setValue(value+1);
        else{
            alert("value can't be greater than  10");
        }
        

    }
    let handleDecrement=()=>{
        if(value>0)
        setValue(value-1);
        else{
            alert("value can't be less than 0");
       }

        
    }
    return (
        <>
            <div className="container">
                <h1>value ranges only from 0 to 10</h1>
                <h1 style={{color:'red'}}>{value}</h1>
            <button  type="button" className="btn btn-primary" onClick={handleIncrement}>add</button>
            <button type="button" className="btn btn-primary my-3"onClick={handleDecrement}>Decrement</button>
            </div>
        </>
    )
}
