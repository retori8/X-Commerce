import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext";
import { BannerProduct } from "../components/bannerProduct";
import { Navbar } from "../components/navbarCommerce";
import { PaginationSearchAnwser } from "../components/paginationSearchAnwser";
import { IntroSearchAnswer } from "../components/introSearchAnswer";


export const SellersForQuote = () => {
    const { store, actions } = useContext(Context);

    return (

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
                <PaginationSearchAnwser />
            </div>
        </div>

    );
};