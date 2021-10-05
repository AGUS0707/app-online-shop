import React, {useState} from 'react';
import {Link} from "react-router-dom";
import SignIn from "./signIn";
import "../../../styles/modal.scss"
function Modal(props) {

    // console.log(props)
    function Tekshir(){
        if (props.history!==undefined)
            return props.history
    }



    return (
        <>
            <div className={props.modal?"signInModalBlock": "signInModalNone"}>
                <div className="signInModalBlock1">
                    <div className="modalContent">
                        <div className="modalBody">
                            <h3>Logotip</h3>
                            <div className="logInLinks">
                                <Link  className={`registrLink ${props.sign? "": "active"}`} onClick={()=>props.setSign(false)}>Register</Link>
                                <Link className={`signInLink ${props.sign? "active": ""}`}  onClick={()=>props.setSign(true)} >Sign In</Link>
                            </div>
                            <SignIn history={Tekshir}  sign={props.sign} setModal={props.setModal}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;