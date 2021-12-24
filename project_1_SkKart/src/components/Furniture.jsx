import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'
import waterbasin from './img/washbasin.jpg';
import goodrej from './img/godrej.jpg';
import gate from './img/gate.jpg';
import self from './img/self.jpg';
import bed from './img/bed.jpg';
import chair from './img/chair.jpg';
import table from './img/table.jpg';
import sofa from './img/sofa.jpg';

export default function Science() {
    return (
        <>  
            <Heading title="Furniture Products"/>
             <div className=" netflix my-5">
             <CardBootstrap img={sofa} title="sofa" content="Price-52$" btn="Buy Now" />
            <CardBootstrap img={table} title="table" content="Price-80$" btn="Buy Now" />
            <CardBootstrap img={chair} title="chair" content="Price-39$" btn="Buy Now" />
            <CardBootstrap img={bed} title="bed" content="Price-35$" btn="Buy Now" />
            <CardBootstrap img={self} title="self" content="Price-29$" btn="Buy Now" />
            <CardBootstrap img={gate} title="gate" content="Price-36$" btn="Buy Now" />
            <CardBootstrap img={goodrej} title="goodrej" content="Price-45$" btn="Buy Now" />
            <CardBootstrap img={waterbasin} title="waterbasin" content="Price-71$" btn="Buy Now" />
            <CardBootstrap img={table} title="table" content="Price-88$" btn="Buy Now" />
            </div>
        </>
    )
}
