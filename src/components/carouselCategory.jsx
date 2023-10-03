import React from "react";
import { CardCarousel } from "./cardCarousel";

export const CarouselCategory = () => (
    <div
        id="carouselExampleControls"
        className="carousel carouselContainer slide"
        data-bs-ride="carousel"
    >
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner carouselinner">
            <div className="carousel-item carouselitem active" data-bs-interval="6000">
                <div className="row">
                    <CardCarousel img="https://cdn.pixabay.com/photo/2016/03/14/20/50/wheels-1256258_640.jpg" nombre="Automotriz" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2016/10/17/13/51/navy-blue-1747663_640.jpg" nombre="Textiles" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449_640.jpg" nombre="Regalos" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2019/12/23/01/16/cream-4713579_640.jpg" nombre="Belleza" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_640.jpg" nombre="Vestuario" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2015/09/09/20/23/printer-933098_640.jpg" nombre="Equipos" />
                </div>
            </div>
            <div className="carousel-item carouselitem" data-bs-interval="6000">
                <div className="row">
                    <CardCarousel img="https://cdn.pixabay.com/photo/2016/03/14/20/50/wheels-1256258_640.jpg" nombre="Automotriz" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2016/10/17/13/51/navy-blue-1747663_640.jpg" nombre="Textiles" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449_640.jpg" nombre="Regalos" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2019/12/23/01/16/cream-4713579_640.jpg" nombre="Belleza" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_640.jpg" nombre="Vestuario" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2015/09/09/20/23/printer-933098_640.jpg" nombre="Equipos" />
                </div>
            </div>
            <div className="carousel-item carouselitem" data-bs-interval="6000">
                <div className="row">
                    <CardCarousel img="https://cdn.pixabay.com/photo/2016/03/14/20/50/wheels-1256258_640.jpg" nombre="Automotriz" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2016/10/17/13/51/navy-blue-1747663_640.jpg" nombre="Textiles" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449_640.jpg" nombre="Regalos" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2019/12/23/01/16/cream-4713579_640.jpg" nombre="Belleza" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_640.jpg" nombre="Vestuario" />
                    <CardCarousel img="https://cdn.pixabay.com/photo/2015/09/09/20/23/printer-933098_640.jpg" nombre="Equipos" />
                </div>
            </div>
        </div>

        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>

    </div>
);