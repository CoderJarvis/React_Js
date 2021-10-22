import React from 'react'

export default function Heading(props) {
    return (
        <div>
            <h1 style={{textAlign:"center",fontSize:"50px",color:"red"}}>{props.head}</h1>
        </div>
    )
}
