
import React from "react";
import { Link } from "react-router-dom";

export const PaginationSearchAnwser = () => (
    <>
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
    </>
);