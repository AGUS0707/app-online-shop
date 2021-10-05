import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
function Email(props) {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="electronPochta">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="confirmationEmail">
                            <div className="confirmationEmailText">
                                <h6>tasdiqlovchi elektron pochta</h6>
                                <p>Hisobni ro'yxatdan o'tkazish paytida ko'rsatilgan manzil orqali parolni tiklash</p>
                            </div>
                            <div className="confirmationEmailButton">
                                <Link to="/home/profile/edit-email/confirmation">Hozir tekshirish</Link>
                            </div>
                        </div>
                        <div className="contactSupport">
                            <div className="contactSupportText">
                                <h6>Qo'llab -quvvatlash xizmatiga murojaat qiling</h6>
                                <p>Hisobingizni tasdiqlay olmasangiz, qo'llab -quvvatlash xizmatiga murojaat qiling.</p>
                            </div>
                            <div className="contactSupportButton">
                                <Link to="/">Hozir tekshirish</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Email;