
import React from "react";
import { Link } from "react-router-dom";
import { ButtonLarge } from "./buttonLarge";

export const IntroSearchAnswer = () => (

    <div className="d-flex justify-content-center align-conten-center row mb-3">
        <div className=" col-md-10 justify content-space-between">
            <div className="row">
                <div className="col-md-9 text-dark">
                    <h4 className="obj-busqueda mb-2">Categoria : <em>Llantas</em></h4>
                    <p>Selecciona - con una cruz - los proveedores que más te interese cotizar, y a continuación haz click en el botón "Cotizar". Puedes seleccionar proveedores de esta página o las siguientes y hasta un máximo de 10 vendedores por solicitud de cotización
                    </p>
                </div>
                <div className="boton-cotizar col-md-1">
                <ButtonLarge text='Cotizar'/>
                </div>
            </div>
        </div>
    </div>

);