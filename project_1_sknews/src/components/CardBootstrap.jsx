import React from 'react'

export default function CardBootstrap(props) {
  return (
    <>
      <div className="card container" style={{ width: "20rem", height: '30rem' }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a href="/" className="btn btn-primary">{props.btn}</a>
        </div>
      </div>
    </>
  )
}
