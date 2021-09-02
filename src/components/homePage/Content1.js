import React from 'react';
import "../../styles/content1.scss"
import {Link} from "react-router-dom";

const Content1 = () => {
    return (
        <div className="container content1 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center" style={{width: "400px"}}>
                <div>
                    <img src="/images/card1.webp" alt=""/>
                </div>
                <div className="ml-3">
                    <h3>Katta qiymatli <br/> narsalar</h3>
                    <p>Har doim biror narsa sotiladi!</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="d-flex align-items-center" style={{width: "400px"}}>
                <div>
                    <img src="/images/card2.webp" alt=""/>
                </div>
                <div className="ml-3">
                    <h3>Xavotirsiz xaridlar</h3>
                    <p>Har bir buyurtma xaridorni himoya qilish huquqiga ega</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="d-flex align-items-center" style={{width: "400px"}}>
                <div>
                    <img src="/images/card33.webp" alt=""/>
                </div>
                <div className="ml-3">
                    <h3>Xavfsiz to'lov</h3>
                    <p>Dunyoning eng yaxshi to'lov usullari bilan to'lang</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="d-flex align-items-center" style={{width: "400px"}}>
                <div>
                    <img src="/images/card5.webp" alt=""/>
                </div>
                <div className="ml-3">
                    <h3>Shahr bo'ylab <br/> yetkazib berish</h3>
                    <p>Xohlagan narsangiz, xohlagan joyingizga yetkaziladi</p>
                </div>
            </div>
        </div>
    );
};

export default Content1;