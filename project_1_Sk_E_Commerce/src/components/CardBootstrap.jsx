import React from 'react'

export default function CardBootstrap(props) {
  return (
    <>
      <div className="card container leftright" style={{ width: "15rem", height: '20rem' }}>
        <img src={props.img} className="card-img-top my-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a href="/" className="btn btn-primary">{props.btn}</a>
        </div>
      </div>
    </>
  )
}
