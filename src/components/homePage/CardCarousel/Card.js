import React from 'react';
import {Link} from "react-router-dom";

const Card = (props) => {
    return (


                    <div className="card border-0">
                        <div className="card-body p-2">
                            <img src={props.img} height="150" className="w-100" alt=""/>
                            <div className="d-flex align-items-center mt-2">
                                <div className="price d-flex align-items-center">
                                    <img src="/images/diagramma.webp" alt=""/>
                                    <p>-49%</p>
                                </div>
                                <i><del className="ml-2">{Math.abs(props.price) + 500} so'm</del></i>
                            </div>
                            <i><h3>{props.price} so'm</h3></i>
                            <h1>{props.url}</h1>
                        </div>
                    </div>


    );
};

export default Card;