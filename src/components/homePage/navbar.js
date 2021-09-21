import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../../styles/navbarTop.scss";
import LoginsLink from "./Main/loginsLink";
import {connect} from "react-redux";
import Modal from "./Main/modal"
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";
function Navbar(props) {
    const [sign, setSign]=React.useState(true);
    const [modal, setModal]=useState(false);
    let userCheck=props.userCheckReducer.userCheck;
    const openModal=()=>{
        setModal(true);
    };
    const signInClick=()=>{
        openModal();
        setSign(true);
    };
    const registrClick=()=>{
        openModal();
        setSign(false)
    };
    function Modall() {
        return <Modal setSign={setSign} sign={sign} modal={modal} setModal={setModal}/>
    }
    function clearUser() {
       props.clearUserCheck(false);
       props.clearUserRedux({});
       localStorage.setItem("shoppingCardList", "");
       props.shoppingCardCountFunction(0);
       axios.get(API_PATH+'logout', {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
    }

    return (
        <div className="navbar-top">
            <div className="container">
                <ul className="navbarNav">
                    <li className="nav-item">
                        <Link to={"/"}>Sell on AliExpress
                            <ul>
                                <li>
                                    <Link to={"/"}>Log In</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Sign In</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Log In</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Log In</Link>
                                </li>
                            </ul>
                            <span>
                                <img src="/images/arrow-down-filled-triangle.svg"
                                 alt="no images"
                                />
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/"} className="help">Help
                            <span>
                                <img src="/images/arrow-down-filled-triangle.svg" alt="no images"/>
                            </span>
                        </Link>
                        <Link to="/" >By Protection</Link>
                    </li>
                    <li className="nav-item">
                        <button>
                            <div className="language">
                                <img src="/images/uzbekistan.svg" alt="no images"/>
                                /
                                <span>English</span>
                                /
                                <span>USD</span>
                            </div>
                            <span>
                                <img src="/images/arrow-down-filled-triangle.svg"
                                     alt="no images" className="arrowDown"/>
                            </span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <div className="wishList">
                            <Link to={"/"}>
                                <span></span>
                                Wish List
                            </Link>
                        </div>
                        <div className="account">
                            <Link to={userCheck? "/home/profile": "/"} className={"accountText"} onClick={userCheck?"": openModal}>
                                <span></span>
                                Account
                            </Link>
                            <span className="arrowDown"><img src="/images/arrow-down-filled-triangle.svg"
                                                             alt="no images"/></span>
                            <div className="accountBar">
                                <div className="userContact">
                                    <div className="userContactContent">
                                        <div className={` ${userCheck?"userContactImg": "userContactImgNone"}`}>
                                            <img src={`${props.userReducer.userObject.photo===null? "https://tezchange.ru/online-shop/storage/app/user/profile.png": props.userReducer.userObject.photo}`} alt=""/>
                                        </div>
                                        <div className={`userNamee ${userCheck? "": "userNameNone"}`}>
                                            Xush kelibsiz <br/>
                                            {
                                                userCheck===true? props.userReducer.userObject.email: " "
                                            }
                                        </div>
                                    </div>
                                </div>
                                <Link to="/" onClick={clearUser} className={`${userCheck===true? "sign-out-block":"sign-out-none"}`}>Sign Out</Link>
                                <hr className={userCheck? "": "hrNone"}/>
                                <div className={` ${userCheck===true? "userBlock": "userNone"}`}>
                                    <p>Welcome to AliExpress</p>
                                    <LoginsLink registrClick={registrClick} signInClick={signInClick}/>
                                </div>
                                <ul className="accountMenu">
                                    <li className="accountMenuItem"><Link className={"accountMenuItemLink"} to={userCheck?"/home/profile/orders": "/"} onClick={userCheck? "": openModal}>Mening buyurtmalarim</Link></li>
                                    <li className="accountMenuItem"><Link className={"accountMenuItemLink"} to={"/"}>Muy Massege</Link></li>
                                    <li className="accountMenuItem"><Link className={"accountMenuItemLink"} to={"/"}>Muy Order</Link></li>
                                    <li className="accountMenuItem"><Link className={"accountMenuItemLink"} to={"/"}>Muy Order</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {Modall()}
        </div>
    );
}

function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        clearUserCheck:function (boolean) {
            dispatch({
                type:"DELETE_CHECK",
                payload:boolean
            })
        },
        clearUserRedux:function (delete_user) {
            dispatch({
                type: "DELETE_USER",
                payload: delete_user
            })
        },
        shoppingCardCountFunction:function (count) {
            dispatch({
                type:"SHOPPING_CARD_COUNT",
                payload:count
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Navbar);



