import React from 'react'
import home1 from './img/home1.jfif';
import home2 from './img/home2.jfif';
import home3 from './img/home3.jfif';

export default function Home() {
    return (
        <>


            <div className=" netflix my-0">
                <div id="carouselExampleCaptions" className="carousel slide my-0" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={home3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={home2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={home1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </>
    )
}
