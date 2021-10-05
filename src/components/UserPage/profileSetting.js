import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function ProfileSetting(props) {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="profile-name">
                <div className="profile-name-content">
                    <div className="profile-user-left">
                        <Link to="/home/profile/photos" className="profile-img" >
                            <img src={props.userReducer.userObject.photo} alt={props.userReducer.userObject.alt_name===null? "":props.userReducer.userObject.alt_name}/>
                            <img src="https://ae01.alicdn.com/tps/i1/TB1us8NHpXXXXbkXFXXcy0wIpXX-70-70.png"
                                 alt="no image"/>
                        </Link>
                    </div>
                    <div className="profile-user-right">
                        <div className="profile-name-text">
                            {props.userReducer.userObject.email}
                        </div>
                        <div className="unread">
                            <div className="unreadIcon">
                                <img src="/images/envelope.svg" alt="no image"/>
                            </div>
                            <div className="unreadLink">
                                <Link to={"/"}>Oqilmagan habarlar:</Link>
                            </div>
                            <div className="unreadCount">
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resurs">
                <ul className="resurs-list">
                    <li className="resurs-item">
                        <div className="resurs-count">0</div>
                        <div className="resurs-description">
                            Barcha buyurtmalar
                        </div>
                    </li>
                    <li className="resurs-item">
                        <div className="resurs-count">0</div>
                        <div className="resurs-description">
                            To'lov kutilmoqda
                        </div>
                    </li>
                    <li className="resurs-item">
                        <div className="resurs-count">0</div>
                        <div className="resurs-description">
                            Yuborish kutilmoqda
                        </div>
                    </li>
                    <li className="resurs-item">
                        <div className="resurs-count">0</div>
                        <div className="resurs-description">
                            Buyurtma yuborildi
                        </div>
                    </li>
                    <li className="resurs-item">
                        <div className="resurs-count">0</div>
                        <div className="resurs-description">
                            Ko'rib chiqish <br/> kutilmoqda
                        </div>
                    </li>
                    <li className="resurs-item">
                        <div className="resurs-count">0</div>
                        <div className="resurs-description">
                            Ochiq tortishuvlar
                        </div>
                    </li>
                </ul>
            </div>
            <div className="editProfile">
                <div className="editProfileContent">
                    <div className="personalText">
                        Shaxsiy cabinet
                    </div>
                    <ul className="personalCabinet">
                        <li className="personalCabinetItem">
                            <Link to={"/home/profile/photos"}>Rasm yuklash</Link>
                        </li>
                        <li className="personalCabinetItem">
                            <Link to={"/home/profile/edit_profile"}>Profilni ozgartirish</Link>
                        </li>
                    </ul>
                </div>
                <div className="editProfileContent">
                    <div className="personalText">
                        Xavfszlik sozlamalari
                    </div>
                    <ul className="personalCabinet">
                        <li className="personalCabinetItem">
                            <Link to={"/home/profile/edit-email"}>E-pochta manzilini ozgartiring </Link>
                        </li>
                        <li className="personalCabinetItem">
                            <Link to={"/home/profile/edit-password"}>Kalit soz ozgartirish</Link>
                        </li>
                        {/*<li className="personalCabinetItem">*/}
                        {/*    <Link to={"/"}>Xavfszlik savolini berish</Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
                <div className="editProfileContent">
                    <div className="personalText">
                        Elektron pochta xabarnomalari pochta
                    </div>
                    <ul className="personalCabinet">
                        <li className="personalCabinetItem">
                            <Link to={"/home/profile/receive-email"}> Elektron pochta xabarnomalari pochta</Link>
                        </li>
                    </ul>
                </div>
                <div className="socialMedia">
                    <div className="personalText">
                        Ijtimoiy tarmoqlar
                    </div>
                    <ul className="personalCabinet">
                        <li className="personalCabinetItem">
                            <div className="socialMediaIcon">
                                <img src="/images/facebook (1).svg" alt="no images"/>
                            </div>
                            <div className="socialMediaName">
                                Facebook
                            </div>
                            <Link to={"/"} className="socialMediaConnect">
                                Connect
                            </Link>
                        </li>
                        <li className="personalCabinetItem">
                            <div className="socialMediaIcon">
                                <img src="/images/messenger (2).svg" alt="no images"/>
                            </div>
                            <div className="socialMediaName">
                                Messenger
                            </div>
                            <Link to={"/"} className="socialMediaConnect">
                                Connect
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, null) (ProfileSetting);