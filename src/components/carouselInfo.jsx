import React, { useState } from 'react';

export const CarouselInfo = () => {
    const [showCarousel, setShowCarousel] = useState(true);

    const handleCloseCarousel = () => {
        setShowCarousel(false);
    };

    return (

        <div className='col-md-8 instrucciones card pt-0'>
            {showCarousel && (
                <button
                    className="btn buttonclose text-end p-0 pt-1"
                    onClick={handleCloseCarousel}
                >
                    X
                </button>
            )}
            {showCarousel && (
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active" data-bs-interval="6000">
                            <h5 className="mb-2">1. Busca tus Productos</h5>
                            <p className="mb-1">Ingresa en el buscador la categoría o productos respecto del cual requieres solicitar cotizaciones</p>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <h5 className="mb-2">2. Selecciona tus Vendedores
                            </h5>
                            <p className="mb-1">Elige los provedores o vendedores que mas te gusten o te den confianza. Puedes elegir hasta 10 vendedores por solicitud</p>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <h5 className="mb-2">3. Llena y envia la solicitud con tus datos</h5>
                            <p className="mb-1">Completa el formulario con tus datos de contacto y la descripcion y detalle del producto sobre el que requieresrecibir cotizaciones</p>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <h5 className="mb-2">4. Recibe las cotizaciones</h5>
                            <p className="mb-1">Revisa periodicamente tu correo, porque en las proximas horas los vendedores te enviaran la cotizacion de los productos solicitados</p>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            )}
        </div>
    );
};

