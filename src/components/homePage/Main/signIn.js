import React from 'react';
import Registr from "./registr";
import Sign from "./sign";
import "../../../styles/signIn.scss";

function SignIn(props) {

    if (props.sign===true){
        return (
            <>
                <Sign setModal={props.setModal}/>
            </>
        );
    }else if (props.sign===false){return (
        <>
           <Registr setModal={props.setModal}/>
        </>
    );
    }
}






export default SignIn;