import React, { Component } from 'react'
import gif from './img/gif.jpg';

export default class Right extends Component {
    render() {
        return (
            <>
                <dic className="contRight">
                    <img src={gif} alt="" className='leftImg2' />
                    <h3 className='leftD'>50% cashback in hdfc and sbi credit cards on orders above 1000$</h3>
                </dic>
            </>
        )
    }
}
