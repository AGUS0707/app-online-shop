import React, {useState} from 'react';
import "../../styles/profileContent.scss";
import {Link, Switch, Route} from "react-router-dom";
import UserAddPhotos from "./userAddPhotos";
import ProfileSetting from "./profileSetting";
import EditProfile from "./editProfile";
import Email from "./email";
import EmailUpdate from "./emailUpdate";
import PasswordUpdate from "./passwordUpdate";
import ReceiveEmail from "./receiveEmail";
import Orders from "./orders";
import ShippingAddress from "./shippingAddress";
import ShippingAddressForm from "./shippingAddressForm";
// import WishList from "../wishList";
import {connect} from 'react-redux';
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";
function ProfileContent(props) {
    const [menu, setMenu]=useState(false);
    let path=window.location.pathname;
    const [count, setCount]=useState(1);
    const [active, setActive]=useState(0);
    function clearUser() {
        props.clearUserCheck(false);
        props.clearUserRedux({});
        localStorage.setItem("shoppingCardList", "");
        props.shoppingCardCountFunction(0);
        axios.get(API_PATH+'logout', {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
    }
    return (
        <div className="profileContent">
            <div className="container">
                <div className="profileContentMenu d-flex align-items-start ">
                    <div className="profileContentLeft">
                        <div className="profile-menu-text mb-2 " >
                            Menyu
                            <div className="imgMenu d-none" onClick={()=>setMenu(!menu)}>
                                <img src="/images/menu (1).svg" alt="no iamge"/>
                            </div>
                        </div>
                        <div className="positionDiv">
                            <ul className={`profile-menu-list ${menu? "menu-list-block": "menu-list-none"}`}>
                                <li className="profile-menu-item">
                                    <Link to="/home/profile" onClick={()=>{
                                        setMenu(false)
                                        setActive(1)
                                    }} className={`profile-menu-link ${path==="/home/profile"||path==="/home/profile/photos"||path==="/home/profile/edit_profile"||path==="/home/profile/edit-email"||path==="/home/profile/edit-email/confirmation"||path==="/home/profile/receive-email"? "active": ""} `}>Shaxsiy malumotlar</Link>
                                </li>
                                <li className="profile-menu-item">
                                    <Link to="/home/profile/orders" onClick={()=>{
                                        setMenu(false)
                                        setActive(2)
                                    }} className={`profile-menu-link ${path==="/home/profile/orders"? "active": ""} `}>Mening buyurtmalarim</Link>
                                </li>
                                <li className="profile-menu-item">
                                    <Link to="/home/profile/shipping-address" onClick={()=>{
                                        setMenu(false)
                                        setActive(3)
                                    }} className={`profile-menu-link ${path==="/home/profile/shipping-address" || path==="/home/profile/shipping-address/form"? "active": ""} `}>Yetkazib berish manzillar</Link>
                                </li>
                                <li className="profile-menu-item">
                                    <Link to="/home/profile/edit-password" onClick={()=>{
                                        setMenu(false)
                                        setActive(4)
                                    }} className={`profile-menu-link ${path==="/home/profile/edit-password"? "active": ""} `}>Parolni o'zgartirish</Link>
                                </li>
                                <li className="profile-menu-item">
                                    <Link to="/" onClick={clearUser} className="profile-menu-link">Profildan chiqish</Link>
                                </li>
                                {/*<li className="profile-menu-item">*/}
                                {/*    <Link to="/home/profile/wish-list"  className="profile-menu-link">Tanlangan mahsulotlar</Link>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                    <div className="profileContentRight">
                        <Switch>
                            <Route path="/home/profile"  exact component={ProfileSetting}/>
                            <Route path="/home/profile/photos"  exact component={UserAddPhotos}/>
                            <Route path="/home/profile/edit_profile" exact component={EditProfile}/>
                            <Route path="/home/profile/edit-email" exact component={Email}/>
                            <Route path="/home/profile/edit-email/confirmation" exact component={EmailUpdate}/>
                            <Route path="/home/profile/edit-password" component={PasswordUpdate}/>
                            <Route path="/home/profile/receive-email" component={ReceiveEmail}/>
                            <Route path="/home/profile/orders" component={Orders}/>
                            <Route path="/home/profile/shipping-address" exact component={ShippingAddress }/>
                            <Route path="/home/profile/shipping-address/form" component={ShippingAddressForm}/>
                            {/*<Route path="/home/profile/wish-list" component={WishList}/>*/}
                        </Switch>
                    </div>
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)( ProfileContent);