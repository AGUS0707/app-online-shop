import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import useStateRef from "react-usestateref";
import {toast} from "react-toastify";
import axios from "axios";
import {connect} from "react-redux";
import {API_PATH} from "../../../tools/constants"
import {useHistory} from "react-router-dom"
import Cookies from "js-cookie";


function Sign(props) {

    const passwordRef=useRef(null);
    const emailRef=useRef(null);
    const history = useHistory();
    const [aFormCheck, setaFormCheck]=useState(false);
    const [user, setUser, userRef]=useStateRef({
        email:0,
        password:0,
        phone:0
    });
    const [count, setCount , countRef]=useStateRef(120);
    const [validEmail, setValidEmail]=useState(false);
    const [validPassword, setValidPassword]=useState(false);


    function closeModall  () {
        props.setModal(false);
        emailRef.current.value=null;
        passwordRef.current.value=null;
        setValidEmail(false);
        setValidPassword(false);
    }
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
        axios.post(API_PATH+'login', {email:userRef.current.email, password:userRef.current.password, phone:userRef.current.phone})
            .then((response)=>{
                if (response.data!==0){
                    if (response.data.role_id === "1"){
                        closeModall();
                        history.push("/admin/profile");
                    }
                    if (response.data.role_id==="3"){
                        closeModall();
                        history.push("/seller")
                    }
                    if (response.data.role_id==="4"){
                        closeModall();
                        history.push("/")
                    }
                    let localstorageUser;
                    localstorageUser={
                        id:response.data.id,
                        email:response.data.email,
                        photo:response.data.photo,
                        phone:response.data.phone,
                        alt_name:response.data.alt_name,
                        role_id:response.data.role_id
                    };
                    props.addUserrr(localstorageUser);
                    props.addUserCheck(true);
                    toast.success("Kirish muvofiqiyatli yakunlandi");
                }else{
                    toast.error("Bunday foydalanuvchi topilmadi")
                }
                Cookies.set('jwt', response.data.token)
            });
    }

    const addUser=()=>{
        if (emailRef.current.value.length>0&& passwordRef.current.value.length>0){
            if (validateEmail()){
                const newwwUser={
                    ...user,
                    phone: 0
                };
                setUser(newwwUser);
                axios.post(API_PATH+'login', {email:userRef.current.email, password:userRef.current.password, phone:userRef.current.phone})
                    .then((response)=>{
                        if (response.data!==0){
                            if (response.data.role_id === "1"){
                                closeModall();
                                history.push("/admin/profile");
                            }
                            if (response.data.role_id==="3"){
                                closeModall();
                                history.push("/seller")
                            }
                            if (response.data.role_id==="4"){
                                closeModall();
                                history.push("/")
                            }
                            let localstorageUser;
                            localstorageUser={
                                id:response.data.id,
                                email:response.data.email,
                                photo:response.data.photo,
                                phone:"",
                                alt_name:response.data.alt_name,
                                role_id:response.data.role_id
                            };
                            props.addUserCheck(true);
                            props.addUserrr(localstorageUser);
                            toast.success("Kirish muvofiqiyatli yakunlandi");
                        }else {
                            toast.error("Bunday foydalanuvchi topilmadi")
                        }
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
            } else {
                setValidEmail(true);
                setValidPassword(true);
                toast.error("Email yoki Password da xatolik")
            }
        }else {
            toast.error("Email yoki Password da xatolik")
            setValidEmail(true);
            setValidPassword(true);
        }
    };


    return (
        <>
            <div className="signInComponent">
                <div className={`avForm ${aFormCheck? "avFormNone": " "} `} >
                    <input type="text"  ref={emailRef}  onChange={handleInputChange} className={`form-control ${validEmail? "validationInput" : ""}`}  name="email" placeholder="Email address"  />
                    <input type="password"  ref={passwordRef}  onChange={handleInputChange} className={`form-control   ${validPassword? "validationInput": " "}`} name="password" placeholder="Password"  />
                    {/*<Link to={props.userReducer.userObject.role_id === "1" ? "/admin/profile" : props.userReducer.userObject.role_id === "3" ? "/seller" : "/"}>*/}
                        <button type="submit" className="signInButton" onClick={addUser}>Sign In</button>
                        {/*</Link>*/}
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
                <div className="forget">
                    <Link to="/">Forget password?</Link>
                </div>
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
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps) (Sign);