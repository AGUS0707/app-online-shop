import React from 'react';
import {Link} from "react-router-dom";
import "../../../styles/loginsLink.scss";
function LoginsLink(props) {


    return (
        <div className="unsubscribeButtons">
            <Link className={"unsubscribeButtons1"} to={"/"} onClick={props.registrClick}>
                Join
            </Link>
            <Link className={"unsubscribeButtons2"} to={"/"} onClick={props.signInClick}>
                Sign in
            </Link>
        </div>
    );
}

export default LoginsLink;