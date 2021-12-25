import React from 'react'
import bbd from './img/bbd.jpg';

export default function Left() {
    return (
        <>
            <dic className="contLeft">
                <h3 className='leftD'>upto 90% discount on products</h3>
                <img src={bbd} alt="" className='leftImg1' />
            </dic>
        </>
    )
}
