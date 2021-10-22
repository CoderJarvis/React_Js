import React, { useState } from 'react'

export default function App32() {
    
    let [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return (
        <>
            <div className="container">
                <h1 style={{fontSize:'70px',color:'red'}}>{time}</h1>
            </div>
        </>
    )
}


//not completed
