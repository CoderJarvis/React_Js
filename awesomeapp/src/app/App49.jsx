import React from 'react'
import CardBootstrap from '../components/CardBootstrap'
export default function App49() {
    return (
        <>
          <h1 className="text-center text-danger">Welcome to my channel</h1>  
            <div className=" netflix my-5">
            <CardBootstrap img="https://source.unsplash.com/700x500/?gaming" title="Gaming" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id eos, rerum autem jhg iegh  fugit alias nisi facilis exercitationem voluptas minus." btn="Like" />
            <CardBootstrap img="https://source.unsplash.com/700x500/?music"  title="Music" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo magni temporibus esse quaerat, ipsa soluta itaque ratione molestias provident." btn="Share" />
            <CardBootstrap img="https://source.unsplash.com/700x500/?comedy"  title="Comedy" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur neque, commodi hic rerum officia nihil nulla minus porro mollitia." btn="Subscribe" />
            </div>
            <p></p>
        </>
    )
}
