import React from "react";
import { BsSearch } from 'react-icons/bs';

export const Navbar = () => {
    return (
        <>
            <div>
                <div className=" header-dark" style={{ paddingBottom: '0px' }}>
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
                                <ul className="nav navbar-nav" style={{ margin: '0px' }} >
                                    {/* <li className="nav-item" role="presentation">
										<a className="nav-link" href="#">
											Vender
										</a>
									</li>
									<li className="nav-item" role="presentation">
										<a className="nav-link" href="#">
											Ayuda
										</a>
									</li> */}
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
                                    <li className="dropdown dropdown-final" style={{ marginRight: '60px' }}>
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
                                <div className="input-group" style={{maxWidth:'400px', marginRight:'80px' }} >
                                    <input type="text" className="form-control" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px'}}/>
                                    <div className="input-group-append" style={{backgroundColor:'#F18700', borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}}>
                                        <button className="btn btn-primary" style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', backgroundColor:'#F18700', border:'none' }}>
                                            <BsSearch />
                                        </button>
                                    </div>
                                </div>

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
                </div>
            </div>
        </>

    );
};