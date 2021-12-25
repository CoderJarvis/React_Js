import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'
import tea from './img/tea.jpg';
import masala from './img/masala.jpg';
import maggy from './img/maggy.jpg';
import atta from './img/atta.jpg';
import oil from './img/oil.jpg';
import vegetables from './img/vegetables.jpg';
import salt from './img/salt.jpg';
import rice from './img/rice.jpg';

export default function Technology() {
    return (
        <>
            <Heading title="Grocery Products" />
            <div className=" netflix my-5">
                <CardBootstrap img={tea} title="Tea" content="Price-58$" btn="Buy Now" />
                <CardBootstrap img={masala} title="Masala" content="Price-32$" btn="Buy Now" />
                <CardBootstrap img={maggy} title="Maggy" content="Price-63$" btn="Buy Now" />
                <CardBootstrap img={atta} title="Atta" content="Price-80$" btn="Buy Now" />
                <CardBootstrap img={oil} title="Oil" content="Price-41$" btn="Buy Now" />
                <CardBootstrap img={vegetables} title="Vegetables" content="Price-38$" btn="Buy Now" />
                <CardBootstrap img={salt} title="Salt" content="Price-73$" btn="Buy Now" />
                <CardBootstrap img={rice} title="Rice" content="Price-49$" btn="Buy Now" />
                <CardBootstrap img={masala} title="Masala" content="Price-41$" btn="Buy Now" />
            </div>
        </>
    )
}
