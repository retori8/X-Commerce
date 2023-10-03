/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { CardCarousel } from '../components/cardCarousel';
import { CarouselInfo } from '../components/carouselInfo';
import { Context } from '../store/AppContext'
import '../styles/index.css'

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
								<br />
								<br />
								<CarouselInfo />
							</div>
							</div>
						</div>
					</div>
					<div
						id="carouselExampleControls"
						className="carousel carouselContainer slide"
						data-bs-ride="carousel"
					>
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						</div>
						<div className="carousel-inner carouselinner">
							<div className="carousel-item carouselitem active" data-bs-interval="6000">
								<div className="row">
									<CardCarousel img="https://cdn.pixabay.com/photo/2016/03/14/20/50/wheels-1256258_640.jpg" nombre="Automotriz" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2016/10/17/13/51/navy-blue-1747663_640.jpg" nombre="Textiles" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449_640.jpg" nombre="Regalos" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2019/12/23/01/16/cream-4713579_640.jpg" nombre="Belleza" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_640.jpg" nombre="Vestuario" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2015/09/09/20/23/printer-933098_640.jpg" nombre="Equipos" />
								</div>
							</div>
							<div className="carousel-item carouselitem" data-bs-interval="6000">
								<div className="row">
									<CardCarousel img="https://cdn.pixabay.com/photo/2016/03/14/20/50/wheels-1256258_640.jpg" nombre="Automotriz" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2016/10/17/13/51/navy-blue-1747663_640.jpg" nombre="Textiles" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449_640.jpg" nombre="Regalos" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2019/12/23/01/16/cream-4713579_640.jpg" nombre="Belleza" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_640.jpg" nombre="Vestuario" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2015/09/09/20/23/printer-933098_640.jpg" nombre="Equipos" />
								</div>
							</div>
							<div className="carousel-item carouselitem" data-bs-interval="6000">
								<div className="row">
									<CardCarousel img="https://cdn.pixabay.com/photo/2016/03/14/20/50/wheels-1256258_640.jpg" nombre="Automotriz" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2016/10/17/13/51/navy-blue-1747663_640.jpg" nombre="Textiles" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449_640.jpg" nombre="Regalos" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2019/12/23/01/16/cream-4713579_640.jpg" nombre="Belleza" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_640.jpg" nombre="Vestuario" />
									<CardCarousel img="https://cdn.pixabay.com/photo/2015/09/09/20/23/printer-933098_640.jpg" nombre="Equipos" />
								</div>
							</div>
						</div>
						
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleControls"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleControls"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>

					</div>

				</div>
			</div>
		</>
	);
};

export default Home