import React from 'react';
import {Link} from "react-router-dom";
import "../../../styles/products.scss"

const Card2 = () => {
    return (
        <div className="col-2">
            <Link to="/product" className="text-decoration-none">
                <div className="card border-0">
                    <div className="card-bod p-2">
                        <img src="/images/cardimg2.webp" className="w-100" alt=""/>
                        <div className="pl-2">
                            <p>Computer</p>
                            <h6>1 472,02 руб.</h6>
                            <h5>200 ta sotildi</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card2;