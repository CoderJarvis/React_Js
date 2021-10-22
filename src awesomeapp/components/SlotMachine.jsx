import React from 'react'

export default function SlotMachine(props) {


    let st;
    (props.x===props.y)&&(props.y===props.z)?st=<h1 style={{color:'green'}}>this is matching</h1>:st=<h1 style={{color:'orange'}}>This is not matching</h1>
    return (
        <>
            <div className="slotMachine" >
            <h1>{props.x} {props.y} {props.z}</h1>
            <h1 >{st}</h1>
            </div>
        </>
    )
}
