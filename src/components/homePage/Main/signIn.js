import React from 'react';
import Registr from "./registr";
import Sign from "./sign";
import "../../../styles/signIn.scss";

function SignIn(props) {
    function Tekshir(){
        if (props.history!==undefined)
            return props.history
    }
    console.log(props)

    if (props.sign===true){
        return (
            <>
                <Sign history={Tekshir} setModal={props.setModal}/>
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