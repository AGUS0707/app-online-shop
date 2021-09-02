import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login} from "../../redux/actions/loginAction";
import "../../styles/login.scss"

import {Link} from "react-router-dom";

import lock from "../../images/padlock.png"
const Login = (props) => {
    console.log(props);
    return (
        <div className="login vh-100 position-relative">

            <div className="pl-5 bg-white d-flex shadow position-absolute">
               <Link to="/"><h1 className="my-2">LOGOTIP</h1></Link>
                <div className="line"></div>
            </div>

            {/*<div className="row">*/}
            {/*    <div className="col-4 offset-4">*/}
                    <div className="d-flex align-items-center justify-content-center vh-100">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex">
                                    <img src={lock} width="18" height="18" alt=""/>
                                    <p className="mb-0 ml-1">Введите логин и пароль</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <AvForm onSubmit={(event, errors, values)=>{props.login(event, errors, values, props.history)}}>
                                    <AvField type="text" name="phoneNumber"
                                             label="Логин" required errorMessage="To'ldirish majburiy" placeholder="Логин"></AvField>
                                    <AvField type="password" name="password" label="Пароль" placeholder="Пароль" required errorMessage="To'ldirish majburiy"/>
                                    <button type="submit" className="btn btn-success d-block ml-auto">
                                        <div className="d-flex align-items-center">
                                            <span className="icon icon-key"></span>
                                            <p className="mb-0 ml-1">Войти</p>
                                        </div>
                                    </button>
                                </AvForm>
                            </div>
                        </div>
                    </div>
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default connect(null, {login})(Login) ;