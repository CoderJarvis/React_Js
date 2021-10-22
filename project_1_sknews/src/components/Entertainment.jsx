import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'

export default function Entertainment() {
    return (
        <>  
            <Heading title="Entertainment News"/>
            <div className=" netflix my-5">
            <CardBootstrap img="https://source.unsplash.com/700x500/?iron man" title="Entertainment" content="Entertainment is something that gives pleasure, or distracts a person from daily life, Some entertainment, like..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?Music"  title="Entertainment" content="Entertainment is something that gives pleasure, or distracts a person from daily life, Some entertainment, like..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?Dancing"  title="Entertainment" content="Entertainment is something that gives pleasure, or distracts a person from daily life, Some entertainment, like..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?Party" title="Entertainment" content="Entertainment is something that gives pleasure, or distracts a person from daily life, Some entertainment, like..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?Piano"  title="Entertainment" content="Entertainment is something that gives pleasure, or distracts a person from daily life, Some entertainment, like..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?hollywood"  title="Entertainment" content="Entertainment is something that gives pleasure, or distracts a person from daily life, Some entertainment, like..." btn="Read more..." />
            </div>
        </>
    )
}
