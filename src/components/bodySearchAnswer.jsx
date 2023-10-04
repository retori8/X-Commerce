import React from "react";
import { IntroSearchAnswer } from "./introSearchAnswer";
import { SellersForQuote } from "./sellersForQuote";

export const BodySearchAnswer = () => {

	return (
		<>
			<div className="container mt-4 mb-5 p-3 mb-4">
				<IntroSearchAnswer/>
				<SellersForQuote />
			</div>
		</>

	);
};