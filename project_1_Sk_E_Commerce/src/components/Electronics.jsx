import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'
import oven from './img/oven.jpg';
import cooler from './img/cooler.jpg';
import fan from './img/fan.jpg';
import dvdplayer from './img/dvdplayer.jpg';
import charger from './img/charger.jpg';
import washingmachine from './img/washingmachine.jpg';
import fridge from './img/fridge.jpg';
import tv from './img/tv.jpg';
import dslr from './img/dslr.jpg';

export default function Health() {
    return (
        <>
            <Heading title="Electronics Products" />
            <div className=" netflix my-5">
                <CardBootstrap img={dslr} title="Dslr" content="Price-56$" btn="Buy Now" />
                <CardBootstrap img={tv} title="Tv" content="Price-78$" btn="Buy Now" />
                <CardBootstrap img={fridge} title="Fridge" content="Price-34$" btn="Buy Now" />
                <CardBootstrap img={washingmachine} title="Washingmachine" content="Price-38$" btn="Buy Now" />
                <CardBootstrap img={charger} title="Charger" content="Price-71$" btn="Buy Now" />
                <CardBootstrap img={dvdplayer} title="Dvdplayer" content="Price-30$" btn="Buy Now" />
                <CardBootstrap img={fan} title="Fan" content="Price-67$" btn="Buy Now" />
                <CardBootstrap img={cooler} title="Cooler" content="Price-81$" btn="Buy Now" />
                <CardBootstrap img={oven} title="Oven" content="Price-47$" btn="Buy Now" />
            </div>
        </>
    )
}
