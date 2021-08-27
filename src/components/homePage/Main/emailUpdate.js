import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function EmailUpdate(props) {
    return (
        <div className="emailUpdate">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="confirmation">
                            <div className="confirmationIcon">
                                <img src="/images/caution.svg" alt="no image"/>
                            </div>
                            <div className="confirmationText">
                                Siz tasdiqlovchi elektron pochtani tanladingiz, iltimos, quyidagi ma'lumotlarni
                                to'ldiring:
                            </div>
                        </div>
                        <div className="thisEmail">
                            <span>Email pochtangiz:</span>
                            <span>{props.userReducer.userObject.email}</span>
                        </div>
                        <div className="verificationCode">
                            <div className="verificationCodeText">
                                Tasdiqlash kodi:
                            </div>
                            <div className="verificationCodeInput">
                                <input type="text" placeholder="6 simvol" required={true}/>
                            </div>
                            <div className="verificationCodeButton">
                                <button>Yangi kod qabul qilinishiga 32 soniya qoldi.</button>
                            </div>
                        </div>
                        <div className="checkButton">
                            <button>Tasdiqlash</button>
                            <Link to="/">Boshqa tasdiqlash usulidan foydalaning</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(EmailUpdate);