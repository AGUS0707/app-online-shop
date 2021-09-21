import React, {useState} from 'react';
import {Link, } from "react-router-dom";
import MainRightComponentCarousel from "./mainRightComponentCarousel";
import "../../../styles/mainRightComponent.scss";
import Modal from "./modal";
import {connect} from "react-redux";

function MainRightComponent(props) {

    // console.log(props)

    const [sign, setSign]=React.useState(true);
    const [modal, setModal]=useState(false);
    const openModal=()=>{
        setModal(true)
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
        return <div>scsac</div>
    }
    return (
        <>
            <div className="mainAccount">
                <div className="mainAccountContent">
                    <div className="mainAccountIcon">
                        <img src={`${props.userReducer.userObject.photo===null? "https://tezchange.ru/online-shop/storage/app/user/profile.png": props.userReducer.userObject.photo===undefined? "https://tezchange.ru/online-shop/storage/app/user/profile.png": props.userReducer.userObject.photo }`} alt={props.userReducer.userObject.alt_name===null? "":props.userReducer.userObject.alt_name}/>
                    </div>
                </div>
                <div className={`userName ${props.userCheckReducer.userCheck? " " : "userNameNone"}`}>
                    Salom <br/>
                    {
                        props.userCheckReducer.userCheck===true? props.userReducer.userObject.email: " "
                    }
                </div>
                <Link to="/" className={` ${props.userCheckReducer.userCheck===true? "unsubscribeNone": "unsubscribe"}`}>
                    Welcome to AliExpress
                </Link>
                <div className="unsubscribeButtons">
                    <div className={`${props.userCheckReducer.userCheck===true?"unsubscribeButtonContentNone": "unsubscribeButtonsContent"}`}>
                        <div className="unsubscribeButtonsContent1">
                            <Link className={"unsubscribeButtons1"} to={"/"} onClick={registrClick}>
                                Join
                            </Link>
                            <Link className={"unsubscribeButtons2"} to={"/"} onClick={signInClick}>
                                Sign in
                            </Link>
                        </div>
                    </div>
                    <Modal history={props.history} setSign={setSign} sign={sign} modal={modal} setModal={setModal}/>
                </div>
                <div className={` profile ${props.userCheckReducer.userCheck===true? "profile-block":"profile-none"}`}>
                    <div className="profile-icons-content">
                        {
                            props.userReducer.userObject.role_id === "1" ?  <Link to="/admin/profile" className="profile-icons-mask1">
                                <div className="profile-img1"></div>
                            </Link> : props.userReducer.userObject.role_id === "3" ? <Link to="/seller" className="profile-icons-mask1_1">
                                <div className="profile-img1_1"></div>
                            </Link> : ""
                        }
                        <Link to={"/home/profile"} className="profile-icons-mask2">
                            <div className="profile-img2"></div>
                        </Link>
                        <Link to="/" className="profile-icons-mask3">
                            <div className="profile-img3"></div>
                        </Link>
                        <Link to="/" className="profile-icons-mask4">
                            <div className="profile-img4"></div>
                        </Link>
                    </div>
                </div>
            </div>
            <>
                <MainRightComponentCarousel/>
            </>

        </>
    );
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null) (MainRightComponent);