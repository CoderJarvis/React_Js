import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'
import baseball from './img/baseball.jpg';
import hockey from './img/hockey.jpg';
import helmet from './img/helmet.jpg';
import wicket from './img/wicket.jpg';
import football from './img/football.jpg';
import badminton from './img/badminton.jpg';
import ball from './img/ball.jpg';
import bat from './img/bat.jpg';

export default function Sports() {
    return (
        <>  
            <Heading title="Sports Produts"/>
            <div className=" netflix my-5">
            <CardBootstrap img={baseball} title="baseball" content="Price-58$" btn="Buy Now" />
            <CardBootstrap img={hockey} title="hockey" content="Price-32$" btn="Buy Now" />
            <CardBootstrap img={helmet} title="helmet" content="Price-59$" btn="Buy Now" />
            <CardBootstrap img={wicket} title="wicket" content="Price-32$" btn="Buy Now" />
            <CardBootstrap img={football} title="football" content="Price-11$" btn="Buy Now" />
            <CardBootstrap img={badminton} title="badminton" content="Price-38$" btn="Buy Now" />
            <CardBootstrap img={ball} title="ball" content="Price-43$" btn="Buy Now" />
            <CardBootstrap img={bat} title="bat" content="Price-96$" btn="Buy Now" />
            <CardBootstrap img={football} title="football" content="Price-29$" btn="Buy Now" />

            </div>
        </>
    )
}
