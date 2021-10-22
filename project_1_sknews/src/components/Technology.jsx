import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'

export default function Technology() {
    return (
        <>  
            <Heading title="Technology News"/>
             <div className=" netflix my-5">
            <CardBootstrap img="https://source.unsplash.com/700x500/?technology" title="Technology" content="Technology is the sum of any techniques, skills, methods, and processes used in the production..." btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?laptop"  title="Technology" content="Technology is the sum of any techniques, skills, methods, and processes used in the production" btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?mobile"  title="Technology" content="Technology is the sum of any techniques, skills, methods, and processes used in the production" btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?sensor" title="Technology" content="Technology is the sum of any techniques, skills, methods, and processes used in the production" btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?Machine"  title="Technology" content="Technology is the sum of any techniques, skills, methods, and processes used in the production" btn="Read more..." />
            <CardBootstrap img="https://source.unsplash.com/700x500/?blockchain"  title="Technology" content="Technology is the sum of any techniques, skills, methods, and processes used in the production" btn="Read more..." />
            </div>
        </>
    )
}
