import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'
import laptop from './img/laptop.jpeg';
import mobile from './img/mobile.jpeg';
import earphone from './img/earphone.jpg';
import memorycard from './img/memorycard.jpg';
import googlewatch from './img/googlewatch.jpg';
import drone from './img/drone.jpg';
import mouse from './img/mouse.jpeg';
import tablet from './img/tablet.png';
import keyboard from './img/keyboard.jpg';

export default function Entertainment() {
    return (
        <>
            <Heading title="Technology Products" />
            <div className=" netflix my-5">
                <CardBootstrap img={laptop} title="Laptop" content="Price- $47" btn="Buy Now" />
                <CardBootstrap img={mobile} title="Mobile" content="Price- $89" btn="Buy Now" />
                <CardBootstrap img={earphone} title="Ear Phone" content="Price- $25" btn="Buy Now" />
                <CardBootstrap img={memorycard} title="Memory Card" content="Price- $95" btn="Buy Now" />
                <CardBootstrap img={googlewatch} title="Google Watch" content="Price- $59" btn="Buy Now" />
                <CardBootstrap img={mouse} title="Mouse" content="Price- $50" btn="Buy Now" />
                <CardBootstrap img={tablet} title="Tablet" content="Price- $43" btn="Buy Now" />
                <CardBootstrap img={keyboard} title="Keyboard" content="Price- $69" btn="Buy Now" />
                <CardBootstrap img={drone} title="Drone" content="Price- $43" btn="Buy Now" />
            </div>
        </>
    )
}
