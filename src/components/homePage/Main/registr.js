
import React, {useRef, useState, useEffect} from 'react';
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import useStateRef from "react-usestateref";
import {connect} from "react-redux";
import {API_PATH} from "../../../tools/constants"
import Cookies from 'js-cookie'

function Registr(props) {
    const passwordRef=useRef(null);
    const emailRef=useRef(null);
    const [aFormCheck, setaFormCheck]=useState(false);
    const [user, setUser, userRef]=useStateRef({
        email:0,
        password:0,
        phone:0
    });
    const [count, setCount , countRef]=useStateRef(120);
    const [validEmail, setValidEmail]=useState(false);
    const [validPassword, setValidPassword]=useState(false);

    const history = useHistory();

    const closeModall = () => {
        props.setModal(false);
        emailRef.current.value=null;
        passwordRef.current.value=null;
        setValidEmail(false);
        setValidPassword(false);
    };
    const handleInputChange=(e)=>{
        if (e.target.name==="password"){
            setValidPassword(false);
        }
        if (e.target.name==="email"){
            setValidEmail(false);
        }
        let newUser={
            ...user,
            [e.target.name]:e.target.value
        };
        setUser(newUser);

    };


    function validateEmail() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(user.email).toLowerCase());
    }

    function validate(){
        /* Phone Test */
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        if (filter.test(user.email)) {
            return true;
        }
    }
    function addUserSmsButton() {
        const newwUser={
            ...user,
            phone: user.email,
            email: 0
        };
        setUser(newwUser);
        axios.post(API_PATH+'register', {email:userRef.current.email, password:userRef.current.password, phone:userRef.current.phone})
            .then((response)=>{
                // if (window.innerWidth < 576){
                //     history.push("/home/profile")
                // } else {

                // }
                let localstorageUser;
                localstorageUser={
                    id:response.data.id,
                    email:response.data.phone,
                    phone: response.data.phone,
                    photo: response.data.photo,
                    alt_name:response.data.alt_name,
                    role_id:response.data.role_id
                };
                props.addUserrr(localstorageUser);
                props.addUserCheck(true);
                closeModall();
                history.push("/")
                toast.success("Kirish muvofiqiyatli yakunlandi");
                // localStorage.setItem("token", response.data.token)
                Cookies.set('jwt', response.data.token)
            });
    }

    const addUser=()=>{
        if (emailRef.current.value.length>0&&passwordRef.current.value.length>0){
            if (validateEmail()){
                const newwwUser={
                    ...user,
                    phone: 0
                };
                setUser(newwwUser);
                axios.post(API_PATH+'register', {email:userRef.current.email, password:userRef.current.password, phone:userRef.current.phone})
                    .then((response)=>{
                        console.log(response)
                        if (response.data===1){
                            toast.error("bunday foydalanuvchi mavjud");
                        }else {
                            toast.success("Kirish muvofiqiyatli yakunlandi");
                            // if (window.innerWidth < 576){
                            //     history.push("/home/profile")
                            // } else {

                            // }
                            let localstorageUser;
                            localstorageUser={
                                id:response.data.id,
                                email:response.data.email,
                                phone:"",
                                photo:response.data.photo,
                                alt_name:response.data.alt_name,
                                role_id:response.data.role_id
                            };
                            props.addUserCheck(true);
                            props.addUserrr(localstorageUser);
                            emailRef.current.value=null;
                            passwordRef.current.value=null;
                            closeModall()
                            history.push("/home/profile")
                        }
                        // localStorage.setItem("token", response.data.token)
                        Cookies.set('jwt', response.data.token)
                    });
            }else if (validate()){
                setaFormCheck(true);
                let timerFunction=setInterval(()=>{
                    setCount(prev=>prev-1);
                    if (countRef.current<0){
                        clearInterval(timerFunction);
                        closeModall();
                        setaFormCheck(false);
                        setCount(120);
                    }
                }, 100);
                emailRef.current.value=null;
                passwordRef.current.value=null;
                // toast.success("Kirish muvofiqiyatli yakunlandi")
            } else {
                setValidEmail(true);
                setValidPassword(true);
                toast.error("Email yoki Password da xatolik");
            }
        } else {
            toast.error("Email yoki Password da xatolik");
            setValidEmail(true);
            setValidPassword(true);
        }

    };
    return (
        <>
            <div className={"registrComponent"}>
                <div className={`avForm ${aFormCheck? "avFormNone": " "} `} >
                    <input type="text"  ref={emailRef}  onChange={handleInputChange} className={`form-control ${validEmail? "validationInput" : ""}`}  name="email" placeholder="Email address" />
                    <input type="password" ref={passwordRef}  onChange={handleInputChange} className={`form-control   ${validPassword? "validationInput": " "}`} name="password" placeholder="Password"   />
                    <button type="submit" className="signInButton" onClick={addUser}>Create Account</button>
                </div>
                <div className={` ${aFormCheck? "blockInput": " noneInput"}`}>
                    <input type="text" placeholder={"Sms kodni kiriting"} className={`form-control `}/>
                    <div className={ "counter"}>
                        {count} S
                    </div>
                    <div className="smsButton">
                        <button className="btn btn-danger" onClick={addUserSmsButton}>Sms Code</button>
                    </div>
                </div>
                <span className="privatePolice">By creating an account, you agree to the AliExpress.com Free Membership Agreement and <Link to={"/"}>Privacy Policy</Link></span>
                <p>Quick access with</p>
                <button className="cancelBtn" onClick={closeModall}>
                    <img src="/images/cancel.svg" alt="no image"/>
                </button>
                <div className="signIcons">
                    <div className="signIcon">
                        <img src="/images/vkontakte.svg" alt="no images"/>
                    </div>
                    <div className="signIcon">
                        <img src="/images/facebook (1).svg" alt="no images"/>
                    </div>
                    <div className="signIcon">
                        <img src="/images/odnoklassniki.svg" alt="no images"/>
                    </div>
                    <div className="signIcon">
                        <img src="/images/google.svg" alt="no images"/>
                    </div>
                </div>
            </div>
        </>
    );
}


function mapDispatchToProps(dispatch) {
    return {
        addUserCheck:function (boolean) {
            dispatch({
                type:"BOOLEAN",
                payload:boolean
            })
        },
        addUserrr:function (user) {
            dispatch({
                type: "USER",
                payload: user
            })
        }
    }
}

export default connect(null , mapDispatchToProps) (Registr);