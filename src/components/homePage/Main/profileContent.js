import React, {useState} from 'react';
import "../../../styles/profileContent.scss";
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
import WishList from "../wishList";
function ProfileContent(props) {
    return (
        <div className="profileContent">
            <div className="container">
                <div className="profileContentMenu d-flex align-items-start ">
                    <div className="profileContentLeft">
                        <div className="profile-menu-text">
                            Menyu
                        </div>
                        <ul className="profile-menu-list">
                            <li className="profile-menu-item">
                                <Link to="/home/profile" className="profile-menu-link">Shaxsiy malumotlar</Link>
                            </li>
                            <li className="profile-menu-item">
                                <Link to="/home/profile/orders" className="profile-menu-link">Mening buyurtmalarim</Link>
                            </li>
                            <li className="profile-menu-item">
                                <Link to="/home/profile/shipping-address" className="profile-menu-link">Yetkazib berish manzillar</Link>
                            </li>
                            <li className="profile-menu-item">
                                <Link to="/home/profile/edit_profile" className="profile-menu-link">Parolni o'zgartirish</Link>
                            </li>
                            <li className="profile-menu-item">
                                <Link to="/home/profile/wish-list"  className="profile-menu-link">Tanlangan mahsulotlar</Link>
                            </li>
                        </ul>
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
                            <Route path="/home/profile/wish-list" component={WishList}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileContent;