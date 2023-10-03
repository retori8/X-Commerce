import React from "react";

export const SearchHome = () => (
    <div className="embed-responsive embed-responsive-16by9">
        <div className="embed-responsive-item style={{ borderRadius: '2rem' }}" >
            <div className="main-search-input-wrap mb-5" >
                <div className="main-search-input fl-wrap" style={{ borderRadius: '8px' }}>
                    <div className="main-search-input-item" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} >
                        <input type="text" defaultValue="" placeholder="Buscar categorias y productos" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
                    </div>
                    <button className="main-search-button" style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }} >Buscar</button>
                </div>
            </div>
        </div>
    </div>
);