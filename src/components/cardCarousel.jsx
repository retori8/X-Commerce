import React from "react";

export const CardCarousel = (props) => (


    <div className="cardo col-md-4 m-1 text-center" style={{ opacity: '1'}}>
        <div className="card shadow-sm border-0" style={{ borderRadius: '8px'}}>
            <div className="cardBody p-0" style={{ borderRadius: '8px'}}>
                <div className="textCardCategoria p-2" style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}}>
                    <p className="mb-0">{props.nombre}</p>
                </div>
                <img
                    src={props.img}
                    alt=""
                    className="cardCategoria w-100"
                    style={{ borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}
                />
            </div>
        </div>
    </div>



);