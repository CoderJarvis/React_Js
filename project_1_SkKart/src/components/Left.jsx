import React from 'react'
import bbd from './img/bbd.jpg';

export default function Left() {
    return (
        <>
        <dic className="contLeft">
            <h3 className='leftD'>90% discount on 75% products</h3>
            <img src={bbd} alt="" className='leftImg1'/>
        </dic>
        </>
    )
}
