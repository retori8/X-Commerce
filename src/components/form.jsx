import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import { ModalRegister } from "./modalRegister";
import { ButtonLarge } from "./buttonLarge";


export const Form = () => (
        <div className="containerForm col-md-7 p-5">
            <ModalRegister />
            <h4 className="text-center mb-3" style={{ color: '#F18700' }}>Solicitud de Cotización</h4>
            <p className="mb-3 text-center text-dark">Completa este formulario para enviar tus datos y tu requerimiento a todos los sellers seleccionados</p>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control me-3"
                    placeholder="Producto"
                    aria-label="Producto"
                    aria-describedby="basic-addon1"
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Categoría"
                    aria-label="Categoría"
                    aria-describedby="basic-addon1"
                />
            </div>
            <br />
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control me-3"
                    placeholder="Nombre"
                    aria-label="Nombre"
                    aria-describedby="basic-addon1"
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                    aria-label="Apellido"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control me-3"
                    placeholder="Móvil"
                    aria-label="Móvil"
                    aria-describedby="basic-addon1"
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div className="input-group mb-3">
                <select class="form-select me-3" id="validationCustom04" required>
                    <option selected disabled value="">Pais</option>
                    <option>Chile</option>
                </select>
                <select class="form-select me-3" id="validationCustom04" required>
                    <option selected disabled value="">Región</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                </select>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Comuna</option>
                    <option>Valparaíso</option>
                </select>
            </div>
            <div className="form-check form-check-inline text-dark mb-3">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Despacho a domicilio
                </label>
            </div>
            <div className="form-check form-check-inline text-dark mb-3">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Retiro en tienda
                </label>
            </div>
            <div class="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingresa aqui la mayor cantidad de detalle de lo que requieres como cotizacion, como tipo de producto, marca, modelo, tamaño, nuevo o usado, cantidad que deseas comprar, tipo de material, color, talla."></textarea>
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple=""
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple=""
                    placeholder="Si lo consideras necesario, adjúntanos una foto del producto que buscas"
                />
            </div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                />
                <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault">
                    Guardar mis datos, para mis próximas cotizaciones
                </label>
                <ButtonLarge text='Enviar'/>
            </div>
        </div>
);