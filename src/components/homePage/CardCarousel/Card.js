import React from 'react';
import {Link} from "react-router-dom";

const Card = (props) => {
    return (

                <Link to="/product" className="text-decoration-none">
                    <div className="card border-0">
                        <div className="card-body p-2">
                            <img src={props.img} className="w-100" alt=""/>
                            <div className="d-flex align-items-center mt-2">
                                <div className="price d-flex align-items-center">
                                    <img src="/images/diagramma.webp" alt=""/>
                                    <p>-49%</p>
                                </div>
                                <i><del className="ml-2">1 049,95 rubl</del></i>
                            </div>
                            <i><h3>535,49 rubl.</h3></i>
                            <h1>{props.url}</h1>
                        </div>
                    </div>
                </Link>

    );
};

export default Card;