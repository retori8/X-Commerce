import React, { useState } from "react";
import { Navbar } from "../components/navbarCommerce";

export const QuoteAnswer = () => {

    return (
        <>
            <Navbar />
            <div className="containerForm col-md-11 d-flex justify-content-start text-center mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 p-3 text-start">
                        <h4 className=" text-start text-dark mb-3">Solicitud de Cotización: N°000 000</h4>
                        <h5 className=" text-start mb-3" style={{ color: '#F18700' }}><em>Felicitaciones, se ha enviado con éxito su solicitud de cotización</em></h5>
                        <h5 className="text-start mb-3">Recomendaciones</h5>
                        <ul className="text-dark text-start  pe-5" style={{ textAlign: 'justify' }}><li>Revisa tu email con frecuencia, para ver si cada sellers seleccionados te ha enviado la cotización solicitada</li>
                            <li>Revisa tu email con frecuencia, para ver si cada sellers seleccionados te ha enviado la cotización solicitada</li></ul>
                    </div>
                    <div className="col-md-3 p-3">
                        <h5 className="text-start mb-3" style={{ color: '#429ebd' }}>Datos Solicitante</h5>
                        <p className="text-dark text-start mb-1"><strong>Fecha:</strong>   25/09/23 </p>
                        <p className="text-dark text-start mb-1"><strong>Cliente:</strong>   Pedro Perez</p>
                        <p className="text-dark text-start mb-1"><strong>Móvil:</strong>    +569 7878 5566</p>
                        <p className="text-dark text-start mb-4"><strong>Email:</strong>   cliente@gmail.com</p>
                        <h5 className="text-start mb-3" style={{ color: '#429ebd' }}>Detalle Solicitud</h5>
                        <p className="text-dark text-start mb-1"><strong>Tipo de entrega:</strong>   Despacho a domicilio</p>
                        <p className="text-dark text-start"><ul><li>Chile-Region Metropitana</li><li>Las Condes</li></ul></p>
                        <p className="text-dark text-start"><strong>Categoría/Producto:</strong><ul><li> Automotriz</li><li>Lllantas</li></ul></p>
                    </div>
                    <div className="col-md-3 p-3">
                        <h5 className="text-start mb-3" style={{ color: '#429ebd' }}>Sellers Cotizados</h5>
                        <p className="text-dark text-start mb-2"><ul><li>NeumaAmerica</li><li>Supermercado del Neumatico</li><li>Autoservicio Leon</li><li>NeumaAmerica</li><li>NeumaAmerica</li><li>Supermercado del Neumatico</li><li>Autoservicio Leon</li><li>NeumaAmerica</li><li>Supermercado del Neumatico</li><li>Autoservicio Leon</li></ul></p>
                        <h5 className="text-start mb-3" style={{ color: '#429ebd' }}>Archivos adjuntos</h5>
                        <p className="text-dark text-start mb-2"><ul><li>Info.pdf</li><li>Imagen-detalle.jpg</li></ul></p>
                    </div>
                    <div className="row col-md-6 d-flex justify-content-end  py-3 px-0" style={{ marginLeft: '29em' }}>
                        <p className="text-dark" style={{ textAlign: 'justify' }}><strong>Detalles: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </>
    )
};