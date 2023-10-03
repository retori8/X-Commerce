import React, { useContext } from 'react'
import { CardCarousel } from '../components/cardCarousel';
import { Context } from '../store/AppContext'
import { CarouselInfo } from '../components/carouselInfo';
import '../styles/index.css'
import { SearchHome } from '../components/searchHome';
import { CarouselCategory } from '../components/carouselCategory';

const Home = () => {
	return (
		<>
			<div>
				<div className=" header-dark">
					<nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
						<div className="container">
							<a className="navbar-brand" href="#">
								X COMMERCE
							</a>
							<button
								className="navbar-toggler"
								data-toggle="collapse"
								data-target="#navcol-1"
							>
								<span className="sr-only">Toggle navigation</span>
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navcol-1">
								<ul className="nav navbar-nav">
									<li className="dropdown">
										<a
											className="dropdown-toggle nav-link dropdown-toggle text-light"
											data-toggle="dropdown"
											aria-expanded="false"
											href="#"
										>
											Categorias{" "}
										</a>
										<div className="dropdown-menu" role="menu">
											<a className="dropdown-item" role="presentation" href="#">
												First Item
											</a>
											<a className="dropdown-item" role="presentation" href="#">
												Second Item
											</a>
											<a className="dropdown-item" role="presentation" href="#">
												Third Item
											</a>
										</div>
									</li>
									<li className="dropdown dropdown-final">
										<a
											className="dropdown-toggle nav-link dropdown-toggle text-light"
											data-toggle="dropdown"
											aria-expanded="false"
											href="#"
										>
											Marcas{" "}
										</a>
										<div className="dropdown-menu" role="menu">
											<a className="dropdown-item" role="presentation" href="#">
												First Item
											</a>
											<a className="dropdown-item" role="presentation" href="#">
												Second Item
											</a>
											<a className="dropdown-item" role="presentation" href="#">
												Third Item
											</a>
										</div>
									</li>
								</ul>
								<div className="nav-item" role="presentation">
									<a className="nav-link text-light" href="#">
										Vender
									</a>
								</div>
								<div className="nav-item me-3" role="presentation">
									<a className="nav-link text-light" href="#">
										Ayuda
									</a>
								</div>
								<span className="navbar-text">
									<a href="#" className="login">
										Log In
									</a>
								</span>
								<a className="btn btn-light action-button px-2" role="button" href="#">
									Sign Up
								</a>
							</div>
						</div>
					</nav>
					<div className="navBar container hero">
						<div className="row">
							<div className="col-md-5"></div>
							<div className="col-md-7"><div className="embed-responsive-item style={{ borderRadius: '2rem' }}" >
								<h4 className="frase text-center mt-4">Cotiza fácil y recibe las mejores ofertas</h4>
								<SearchHome />
								<br />
								<br />
								<CarouselInfo />
							</div>
							</div>
						</div>
					</div>
					<CarouselCategory />

				</div>
			</div>
		</>
	);
};

export default Home