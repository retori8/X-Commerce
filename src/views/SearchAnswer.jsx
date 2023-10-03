import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext";
import { BannerProduct } from "../components/bannerProduct";
import { Navbar } from "../components/navbarCommerce";


export const SearchAnswer = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Navbar />
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
			</div>
			<div className="container mt-4 mb-5 p-3 mb-4">
				<div className="d-flex justify-content-center align-conten-center row mb-3">
					<div className=" col-md-10 justify content-space-between">
						<div className="row">
							<div className="col-md-9 text-dark">
								<h4 className="obj-busqueda mb-2">Categoria : <em>Llantas</em></h4>
								<p>Selecciona - con una cruz - los proveedores que más te interese cotizar, y a continuación haz click en el botón "Cotizar". Puedes seleccionar proveedores de esta página o las siguientes y hasta un máximo de 10 vendedores por solicitud de cotización
								</p>
							</div>
							<div className="boton-cotizar col-md-1">
								<Link to='/form' >
									<div class="containerButton">
										<a href="#" class="buttonRedondo">Cotizar</a>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center align-conten-center row">
					<div className="col-md-10">
						<BannerProduct />
						<BannerProduct />
						<BannerProduct />
						<BannerProduct />
						<BannerProduct />
						<BannerProduct />
						<BannerProduct />
						<BannerProduct />
						<BannerProduct />
						<BannerProduct />
						<nav aria-label="Page navigation example mt-5">
							<ul className="pagination justify-content-center mt-3">
								<li className="page-item ">
									<Link className="page-link" href="#">
										Anterior
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" href="#">
										1
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" href="#">
										2
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" href="#">
										3
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" href="#">
										Siguiente
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>

	);
};
