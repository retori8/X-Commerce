import React from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai';


export const BannerProduct = () => (
    <div className="row p-1 bg-white border rounded mb-1">
        <div className="col-md-2 my-1">
            <img
                className="img-fluid img-responsive rounded product-image"
                src="data:image/png;base64,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"
            />
        </div>
        <div className="col-md-8 mt-2">
            <h5>Llantas del Pacifico</h5>
            <p className="text-justify para mb-0">
                Ofertas y stock exclusivo en neumáticos para auto, suv, cuv, camión, moto, llantas y másCompra online y en nuestras tiendas en hasta 6 cuotas sin interés..
                <br />
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h6 className="text-dark">Más información</h6>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse row" aria-labelledby="headingOne">
                        <div class="accordion-body col-md-9">
                            Felis litora sagittis scelerisque montes cubilia tortor lacus a, eget proin ullamcorper metus gravida eu arcu viverra, augue in sollicitudin cras luctus nisi taciti. Volutpat convallis netus litora in sapien condimentum quis, tempor pellentesque tellus venenatis pharetra duis posuere himenaeos
                        </div>
                        <div className="col-md-3">
                            <img
                                className="img-fluid img-responsive rounded product-image"
                                src="https://pimentel.com.pe/wp-content/uploads/2022/06/eagle-f1-assymmetric2.jpg"
                            />
                        </div>
                    </div>
                </div>
            </p>
        </div>
        <div className="align-items-center align-content-center col-md-2">
            <button className="buttonCheck btn m-5 text-center p-0">X</button>
        </div>
    </div>
);