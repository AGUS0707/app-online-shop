import React from 'react';
import {Link} from "react-router-dom";
import "../../../styles/products.scss"

const Card2 = (props) => {
    return (

                <div className="card border-0 bg-transparent h-100 pb-3">
                    <div className="card-body bg-white p-2">
                       <div> <img src={props.photo_list.url} height="180" className="w-100" alt=""/></div>
                        <div className="pl-2 mt-2">
                            <p>{props.name}</p>
                            <h6>UZS {props.price} </h6>
                            <h5>{props.amount} dona</h5>
                        </div>
                    </div>
                </div>

    );
};

export default Card2;