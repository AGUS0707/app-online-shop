import React from 'react';
import {Link} from "react-router-dom";

function Orders(props) {
    return (
        <div className="orders">
            <h3>Barcha buyurtmalar</h3>
            <div className="purchase">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="purchaseList">
                                <li className="purchaseListItem">
                                    <Link className="purchaseListLink" to="/">Tolov kutilmoqda (0) </Link>
                                </li>
                                <li className="purchaseListItem">
                                    <Link className="purchaseListLink" to="/">Yetkazib berish kutilmoqda (0) </Link>
                                </li>
                                <li className="purchaseListItem">
                                    <Link className="purchaseListLink" to="/">Buyurtma yuborildi (0) </Link>
                                </li>
                                <li className="purchaseListItem">
                                    <Link className="purchaseListLink" to="/">Ochiq nizolar (0) </Link>
                                </li>
                                <li className="purchaseListItem">
                                    <Link className="purchaseListLink" to="/">Oqilmagan xabarlar (0) </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ordersFilter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="orderNumber">
                                <label htmlFor="order-number">Buyurtma raqami:</label>
                                <input type="number" className="form-control" id="order-name"/>
                            </div>
                            <div className="orderName">
                                <label htmlFor="order-name">Mahsulot nomi:</label>
                                <input type="text" className="form-control" id="order-name"/>
                            </div>
                            <div className="searchButton">
                                <button>Qidirish</button>
                            </div>
                            <div className="otherFilter">
                                <button>Boshqa filtrlar</button>
                                <div className="arrowIcon">
                                    <img src="/images/arrow-down-filled-triangle.svg" alt="no images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ordersList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="orderListName">
                                Mahsulot nomi
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="orderListName">
                                Qoshimcha
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="orderListName">
                                Buyurtma holati
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="orderListName">
                                Harakat
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ordersN">
                                    <div className="order-name">
                                        <span> Buyurtma № </span>122222214421212 <Link to="/">Batafsil</Link>
                                    </div>
                                </div>
                                <div className="order-time">
                                    <span>  Buyurtma vaqti :</span>16 avgust 2021 yil 23:00
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="marketName">
                                    <span>Supermarket:</span> tong supermarket
                                </div>
                                <div className="goToMarket">
                                    <div className="goToMarketLink1">
                                        Dokonga borish
                                    </div>
                                    <div className="lines"></div>
                                    <div className="goToMarketIcon">
                                        <img src="/images/envelope.svg" alt="no image"/>
                                    </div>
                                    <div className="messageSeller">Sotuvchiga xabar</div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="price">
                                    <p>Narxi:</p>
                                    <p>$ 20.23</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="product">
                                    <div className="productLeft">
                                        <div className="productImg">
                                            <img src="/images/page1.webp" alt="no image"/>
                                        </div>
                                    </div>
                                    <div className="productRight">
                                        <div className="productText">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ducimus,
                                            quidem? A delectus error, facere inventore magnam minus molestiae, neque
                                        </div>
                                        <div className="productPrice">
                                            $31.84 X1
                                        </div>
                                        <div className="productFeatures">
                                            Xususiyatlari 4K 3B sumkasi
                                        </div>
                                        <div className="delivery">
                                            <div className="previousIcon">
                                                <img src="/images/previous.svg" alt="no image"/>
                                            </div>
                                            <div className="deliveryIcon">
                                                <img src="/images/delivery (1).svg" alt="no image"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-2">
                                <div className="deliveryTimeOut">
                                    <div className="sendText">
                                        Yuborish kutilmoqda
                                    </div>
                                    <div className="mobilVersion">
                                        Mobil versiyasidan
                                    </div>
                                    <div className="timeOut">
                                        <div className="timeOutIcon">
                                            <img src="/images/oclock.svg" alt="no images"/>
                                        </div>
                                        <div className="timeOutText">
                                            Yetkazib berish
                                        </div>
                                        <div className="timeOutDate">
                                                7 kun 7 soat 8 daqiqa
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="movementText">
                                    Jarayon vaqtini oshirish
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;