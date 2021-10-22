import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'

export default function Business() {
    return (
        <>
            <Heading title="Business News"/>
           <div className=" netflix my-5">
            <CardBootstrap img="https://source.unsplash.com/700x500/?business" title="Business" content="Business is the activity of making money by producing or buying and selling products (such as goods..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?trading"  title="Business" content="Business is the activity of making money by producing or buying and selling products (such as goods..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?stock"  title="Business" content="Business is the activity of making money by producing or buying and selling products (such as goods..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?money" title="Business" content="Business is the activity of making money by producing or buying and selling products (such as goods..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?rbi"  title="Business" content="Business is the activity of making money by producing or buying and selling products (such as goods..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?chai wala"  title="Business" content="Business is the activity of making money by producing or buying and selling products (such as goods..." btn="Read more..." />
            </div>  
        </>
    )
}
