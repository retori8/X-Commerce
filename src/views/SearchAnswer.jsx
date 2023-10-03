import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext";
import { BannerProduct } from "../components/bannerProduct";
import { Navbar } from "../components/navbarCommerce";
import { PaginationSearchAnwser } from "../components/paginationSearchAnwser";
import { IntroSearchAnswer } from "../components/introSearchAnswer";


export const SearchAnswer = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Navbar />
			<div className="container mt-4 mb-5 p-3 mb-4">
				<IntroSearchAnswer />
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
						<PaginationSearchAnwser/>
					</div>
				</div>
			</div>
		</>

	);
};
