
import React from "react";
import { SearchHome } from "./searchHome";
import { CarouselInfo } from "./carouselInfo";



export const IntroSearchHome = () => (

    <div className="navBar container hero">
        <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7"><div className="embed-responsive-item style={{ borderRadius: '2rem' }}" >
                <h4 className="frase text-center mt-4">Cotiza fácil y recibe las mejores ofertas</h4>
                <SearchHome />
                <br />
                <br />
                <CarouselInfo />
            </div>
            </div>
        </div>
    </div>

);