import React, { Component } from "react";

export const ModalRegister = () => (

    <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
    >
        <div className="modal-dialog modal-dialog-centered modal-dialog modal-dialog-scrollable">
            <div className="modalForm modal-content" style={{border:'none'}}>
                <div className="registration-form">
                    <form className="formRespuesta p-5">
                        <div className="textoFormRespuesta mb-3 text-center">
                        Para registrarte y tener tu propia cuenta solo falta que crees tu contraseña
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                className="form-control inputRespuesta"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
                            />
                          
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="form-control inputRespuesta"
                                id="exampleInputPassword1"
                                style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Repetir contraseña
                            </label>
                            <input
                                type="password"
                                className="form-control inputRespuesta"
                                id="exampleInputPassword1"
                                style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
                            />
                        </div>
                        <button type="submit" className="buttonRespuesta btn" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}>
                            Enviar
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </div>
);