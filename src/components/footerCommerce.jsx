import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
export const FooterCommerce = () => (

	<footer className="footer">
		<div className="container bottom_border">
			<div className="row">
				<div className="col-sm-8 col-md col-sm-8 col-12 col me-5">
					<h1 className="navbar-brand headin5_amrc col_white_amrc pt2">X COMMERCE</h1>
					<p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
					<p><i className="fa fa-location-arrow"></i> Santiago, Chile</p>
					<p><i className="fa fa-phone"></i> +56-9999878398</p>
					<p><i className="fa fa fa-envelope"></i> in
						@cxcommerce.com</p>
				</div>
				<div className="col-sm-4 col-md col-12 col">
					<h5 className="tituloFooter headin5_amrc col_white_amrc pt2">Nosotros</h5>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, semper purus pretium vestibulum malesuada ridiculus ultrices senectus, luctus quis elementum mattis suscipit sodales. Vestibulum odio lacus aptent et neque imperdiet tortor mus ornare, eget vulputate dis volutpat nam iaculis eros bibendum tempus,</p>
				</div>
				<div className="col-sm-2 col-md col-1 col text-center">
					<h5 className="tituloFooter headin5_amrc col_white_amrc menu-footer-titulo pt2">Menu</h5>
					<ul className="footer_ul_amrc">
						<li><a className="menu-footer-item" href="http://webenlance.com">Marcas</a></li>
						<li><a className="menu-footer-item" href="http://webenlance.com">Categorias</a></li>
						<li><a className="menu-footer-item" href="http://webenlance.com">Venta</a></li>
						<li><a className="menu-footer-item" href="http://webenlance.com">Ayuda</a></li>
					</ul>
				</div>
				<div className="col-sm-2 col-md col-4 col">
					<div className="row">
					<h5 className="tituloFooter headin5_amrc col_white_amrc pt2">Categorias Principales</h5>
					<div className="col-2 mx-4">
					<ul className="footer_ul_amrc">
						<li><a href="http://webenlance.com">Automotriz</a></li>
						<li><a href="http://webenlance.com">Textil</a></li>
						<li><a href="http://webenlance.com">Belleza</a></li>
						<li><a href="http://webenlance.com">Regalos</a></li>
						<li><a href="http://webenlance.com">Envios</a></li>
						<li><a href="http://webenlance.com">Equipos</a></li>
					</ul>
					</div>
					<div className="col-2 mx-4">
					<ul className="footer_ul_amrc">
						<li><a href="http://webenlance.com">Automotriz</a></li>
						<li><a href="http://webenlance.com">Textil</a></li>
						<li><a href="http://webenlance.com">Belleza</a></li>
						<li><a href="http://webenlance.com">Regalos</a></li>
						<li><a href="http://webenlance.com">Envios</a></li>
						<li><a href="http://webenlance.com">Equipos</a></li>
					</ul>
					</div>
					</div>
				</div>
				
				<div className="col-sm-4 col-md col-12 col">
					<h5 className="tituloFooter headin5_amrc col_white_amrc pt2">Quieres ser parte de nuestros sellers?</h5>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, semper purus pretium vestibulum malesuada ridiculus ultrices senectus, luctus quis elementum mattis.</p>
					<br />
					<div className="boton-cotizar">
						<Link to='/form' >
							<div class="containerButton mt-5-">
								<a href="#" class="buttonRedondoFooter px-3 py-1">contactanos</a>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div className="container m-3">
			<p className="text-end">Copyright @2023 | Designed With by <a className="link-xcommerce" href="#">X-Commerce</a></p>
			<ul className="social_footer_ul">
				<li><a href="http://webenlance.com"><FaFacebookF /></a></li>
				<li><a href="http://webenlance.com"><FaTwitter/></a></li>
				<li><a href="http://webenlance.com"><FaLinkedin /></a></li>
				<li><a href="http://webenlance.com"><FaInstagram /></a></li>
			</ul>
		</div>
	</footer>
);