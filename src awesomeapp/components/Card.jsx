import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card" style={{width: '13rem'}}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-primary">
            Watch Now
          </a>
        </div>
      </div>
    </>
  );
}
