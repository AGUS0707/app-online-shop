import React, {useState} from 'react';
import {Link} from "react-router-dom";
import SignIn from "./signIn";

function Modal(props) {

    return (
        <>
            <div className={props.modal?"signInModalBlock": "signInModalNone"}>
                <div className="signInModalBlock1">
                    <div className="modalContent">
                        <div className="modalBody">
                            <h3>Logotip</h3>
                            <div className="logInLinks">
                                <Link to="/" className={`registrLink ${props.sign? "": "active"}`} onClick={()=>props.setSign(false)}>Register</Link>
                                <Link to="/" className={`signInLink ${props.sign? "active": ""}`}  onClick={()=>props.setSign(true)} >Sign In</Link>
                            </div>
                            <SignIn  sign={props.sign} setModal={props.setModal}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;