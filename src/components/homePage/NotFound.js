import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/login.scss"
import lock from "../../images/padlock.png";
import {AvField, AvForm} from "availity-reactstrap-validation";
import Footer from "./footer";




const NotFound = (props) => {
    return (
        <div className="login">
            <div className="pl-5 bg-white d-flex shadow position-absolute">
                <Link to="/"><h1 className="my-2">LOGOTIP</h1></Link>
                <div className="line"></div>
            </div>


            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="card border-0">
                    <div className="d-flex align-items-center">
                        <h1 className="pr-3">4</h1>
                       <div className="nol d-flex align-items-center justify-content-center">
                           <span className="icon icon-question"></span>
                       </div>
                        <h1 className="pl-3">4</h1>
                    </div>

                    <p>Page Not Found</p>
                    <Link to="/"><h3>Bosh sahifaga qaytish</h3></Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;