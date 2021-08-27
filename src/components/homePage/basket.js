import React, { useState} from 'react';
import "../../styles/basket.scss";
import {Link} from "react-router-dom";

function Basket(props) {
    const [check, setCheck] = useState(false);
    const [count, setCount] = useState(0);
    function change(e) {
        console.log(e.target.checked);
    }
    function decrement() {
        setCount(prev=>prev-1)
    }
    function increment() {
        setCount(prev=>prev+1)
    }
    return (
        <div className="shoppingCard">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="shoppingCardLeft">
                            <div className="shoppingCardLeftHeader ">
                                <div className="shoppingCardText">
                                    Savatcha
                                </div>
                                <div className="shoppingAllSelect d-flex align-items-center">
                                    <span className={`check ${check ? "checked" : " "} `}
                                          onClick={() => setCheck(!check)}>
                                        <span className="checkedImg">
                                            <input type="checkbox" onChange={change}/>
                                        </span>
                                    </span>
                                    <span className="checkText">Hammasini belgilash</span>
                                </div>
                            </div>
                            <div className="shoppingCardList">
                                <div className="shoppingCardItem">
                                    <div
                                        className="shoppingCardItemHeader d-flex align-items-center justify-content-between">
                                        <div className="shoppingCardContact d-flex align-items-center">
                                            <Link to="/" className="contactImg"></Link>
                                            <span>Aloqa</span>
                                        </div>
                                        <div className="shoppingCardContactRight">
                                            <Link to="/" className="text-decoration-none">Kuponlarni oling</Link>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="shoppingCardItemMain">
                                        <div className="shoppingCardItemMainLeft d-flex align-items-center">
                                            <div className="shoppingProductCheck">
                                                <span
                                                    className={`shoppingProductCheckk ${check ? "shoppingProductChecked" : " "} `}
                                                    onClick={() => setCheck(!check)}>
                                                    <span className="checkedImg">
                                                        <input type="checkbox" onChange={change}/>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="shoppingProductImg">
                                                <img src="/images/page.webp" alt="no image"/>
                                            </div>
                                        </div>
                                        <div className="shoppingCardItemMainCenter">
                                            <Link  to="/" className="shoppingProductLink"><p>1:50 Qotishma Diecast 4 g'ildirakli belkurak yuklagichi Ikki
                                                tomonlama ekskavatorli forklift buldozeri Orqaga ketmonli yuk mashinasi
                                                Bolalar uchun sovg'a o'yinchoqlar</p></Link>
                                            <p className="price">18.13 AQSh dollar</p>
                                            <div className="sale d-flex align-items-center">
                                                <img
                                                    src="https://ae01.alicdn.com/kf/H360058adc16e44848f39a15e13126760H.png"
                                                    alt="no iamge"/>
                                                    <span className="saleText">
                                                        17.81 AQSh dollar
                                                    </span>
                                            </div>
                                            <div className="percentSale">
                                                Har bir sarflangan 30,00 AQSh dollariga 3,00 AQSh dollari chegirma
                                            </div>
                                            <div className="deliveryText">
                                                <span> Yetkazib berish bepul</span>
                                                AliExpress standart etkazib berish orqali
                                                Taxminiy etkazib berish 21 sentyabr
                                            </div>
                                        </div>
                                        <div className="shoppingCardItemMainRight ">
                                            <div className="deleteHeartIcons d-flex align-items-center">
                                                <div className="heartIcon">
                                                    <img src="/images/heart.svg" alt="no image"/>
                                                </div>
                                                <div className="deleteIcon">
                                                    <img src="/images/trash.svg" alt="no images"/>
                                                </div>
                                            </div>
                                            <div className="productCount d-flex align-items-center">
                                                <button  onClick={decrement}>
                                                    <img src="/images/minus.svg" alt="no images"/>
                                                </button>
                                                <span>{count}</span>
                                                <button onClick={increment}>
                                                    <img src="/images/plus.svg" alt="no images"/>
                                                </button>
                                            </div>
                                            <div className="limitText">
                                                Cheklangan miqdorda
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="purchaseButton">Sotib olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment d-flex align-items-center">
                            <div className="paymentLeft">
                                <h4>Tolov usullari</h4>
                                <div className="paymentIcons  d-flex justify-content-center">
                                   <div className="paymentIconContent d-flex align-items-center">
                                       <div className="paymentIcon">
                                           <img src="/images/civi.png" alt="no image"/>
                                       </div>
                                       <div className="paymentIcon">
                                           <img src="/images/uzkart.png" alt="no image"/>
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div className="paymentRight">
                                <div className="security d-flex justify-content-center">
                                    <div className="securityContent d-flex align-items-center">
                                        <div className="securityIcon">
                                            <img src="/images/verified.svg" alt="no image"/>
                                        </div>
                                        <div className="securityText">
                                            Xaridoe ximoyasi
                                        </div>
                                    </div>
                                </div>
                                <div className="securityDescription">
                                    Agar mahsulot tasvirlanganidek bo'lmasa yoki etkazib berilmagan bo'lsa, to'liq qaytarib oling.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="shoppingCardRight">
                            <h3>Buyurtma haqida qisqacha malumot</h3>
                            <div className="totalPrice d-flex justify-content-between">
                                <div className="totalPriceText">
                                    jami:
                                </div>
                                <div className="totalPriceNumber">
                                    43.68 aqsh dollar
                                </div>
                            </div>
                            <div className="deliveryText d-flex justify-content-between">
                               <div className="deliveryLeft">
                                   yuk tashish:
                               </div>
                                <div className="deliveryRight">
                                    yetkazib berish 2.63 dollar
                                </div>
                            </div>
                            <hr/>
                            <div className="total d-flex justify-content-between align-items-center">
                                <div className="totalText">
                                    jami:
                                </div>
                                <div className="totalNumber">
                                    46.31 Aqsh dollar
                                </div>
                            </div>
                            <div className="totalPurchaseButton">
                                <button>Sotib olish (0)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basket;