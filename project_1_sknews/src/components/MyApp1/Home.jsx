import React from 'react'

export default function Carousel() {
    return (
        <>
           <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/1400x900/?Technology" className="d-block w-100" alt="..." style={{height:'93vh'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1 style={{ color: "red", fontWeight: "bold", fontFamily: "verdana", fontSize: "50px" }}>Welcome to SkNews</h1>
                                <p style={{ color: "yellow", fontWeight: "bold", fontFamily: "Courier New", fontSize: "20px" }}>Explore The World</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/1400x900/?Science " className="d-block w-100" alt="..."  style={{height:'93vh'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1 style={{ color: "red", fontWeight: "bold", fontFamily: "verdana", fontSize: "50px" }}>Welcome to SkNews</h1>
                                <p style={{ color: "yellow", fontWeight: "bold", fontFamily: "Courier New", fontSize: "20px" }}>Explore The World</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/1400x900/?Universe" className="d-block w-100" alt="..." style={{height:'93vh'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1 style={{ color: "red", fontWeight: "bold", fontFamily: "verdana", fontSize: "50px" }}>Welcome to SkNews</h1>
                                <p style={{ color: "yellow", fontWeight: "bold", fontFamily: "Courier New", fontSize: "20px" }}>Explore The World</p>
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
        </>
    )
}
