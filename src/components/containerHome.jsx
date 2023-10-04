import React from 'react'
import { CarouselCategory } from '../components/carouselCategory';
import {IntroSearchHome } from '../components/introSearchHome';
import '../styles/index.css'
import { NavbarHome } from '../components/navbarHome';

export const ContainerHome = () => {
	return (
		<>
			<div>
				<div className=" header-dark">
					<NavbarHome />
					<IntroSearchHome />
					<CarouselCategory />
				</div>
			</div>
		</>
	);
};
