import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'
import jeans from './img/jeans.jpg';
import googles from './img/goggles.jpg';
import cap from './img/cap.jpg';
import traditional from './img/traditional.jpg';
import jackets from './img/jackets.jpg';
import footwear from './img/footwear.jpg';
import shirts from './img/shirts.jpg';

export default function Business() {
    return (
        <>
            <Heading title="Clothing Products" />
            <div className=" netflix my-5">
                <CardBootstrap img={jeans} title="Jeans" content="Price-56$" btn="Buy Now" />
                <CardBootstrap img={googles} title="Googles" content="Price-67$" btn="Buy Now" />
                <CardBootstrap img={cap} title="Cap" content="Price-96$" btn="Buy Now" />
                <CardBootstrap img={traditional} title="Traditinal Dresses" content="Price-34$" btn="Buy Now" />
                <CardBootstrap img={jackets} title="Jackets" content="Price-49$" btn="Buy Now" />
                <CardBootstrap img={footwear} title="Footwear" content="Price-92$" btn="Buy Now" />
                <CardBootstrap img={shirts} title="Shirts" content="Price-36$" btn="Buy Now" />
                <CardBootstrap img={googles} title="Googles" content="Price-19$" btn="Buy Now" />
                <CardBootstrap img={footwear} title="Footwear" content="Price-47$" btn="Buy Now" />
            </div>
        </>
    )
}
