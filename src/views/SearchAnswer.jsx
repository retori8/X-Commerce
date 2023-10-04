import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext";
import { Navbar } from "../components/navbarCommerce";
import { BodySearchAnswer } from "../components/bodySearchAnswer";


export const SearchAnswer = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Navbar />
			<BodySearchAnswer />
		</>

	);
};
