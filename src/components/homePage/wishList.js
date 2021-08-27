import React from 'react';
import {Link} from "react-router-dom";

function WishList(props) {
    return (
        <div className="wishList">
            <div className="container">
                <div className="wishListText">
                    <h3>Mening istaklarim</h3>
                </div>
                <div className="wishListCategory">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wishListCategoryContent">
                                <select name="category" className="form-control">
                                    <option value="tur">Turkum</option>
                                    <option value="ona">Ona va bola</option>
                                </select>
                                [<Link to="/"> Bildirishnomalarni o'rnatish </Link>]
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="wishListContents">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <div className="wishListImg">
                                    <img src="/images/page.webp" alt="no image"/>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="wishListProductContent">
                                    <Link to="/">Kichkintoy o'g'il bolalar etiklari yumshoq tuvali poyabzal, yulduzlar
                                        bilan, sirg'almaydigan kichkintoylar, yangi tug'ilgan chaqaloqlar uchun oddiy
                                        poyafzal</Link>
                                    <div className="wishListPrice">
                                        <p>US $ 3.71 - US $ 4.74 <span>/ Parcha</span></p>
                                        <button>3 kun qoldi</button>
                                    </div>
                                    <div className="oldPrice">
                                        US $ 5.98 - US $ 7.65 / Parcha
                                    </div>
                                    <div className="priceTo">
                                       <div className="priceToImg">
                                           <img src="http://ae01.alicdn.com/kf/Hc3d16824b07d45e1b49ab6dfd3836b83h.png"
                                                alt="no image"/>
                                       </div>
                                             <span>3.59 AQSh dollar</span>
                                    </div>
                                    <div className="wishListOrders">
                                        <div className="starGroup">
                                            <img src="/images/star (1).svg" alt="no image"/>
                                            <img src="/images/star (1).svg" alt="no image"/>
                                            <img src="/images/star (1).svg" alt="no image"/>
                                            <img src="/images/star (1).svg" alt="no image"/>
                                            <img src="/images/star (1).svg" alt="no image"/>
                                        </div>
                                        <div className="starText">
                                            Buyurtmalar (11777)
                                        </div>
                                    </div>
                                    <div className="sellerConnect">
                                        <div className="sellerConnectLeft">
                                            <div className="shopLeftIcon"></div>
                                            <Link to="/">Mercior rasmiy dokani </Link>
                                        </div>
                                        <div className="sellerConnectRight">
                                            <div className="shopRightIcon">

                                            </div>
                                            <Link to="/">Sotuvchi bilan boglanish</Link>
                                        </div>
                                    </div>
                                    <div className="sellerCupon">
                                        <button>Sotuvchi kuponini oling
                                            <img src="/images/arrow-down-filled-triangle.svg"
                                                 alt="no image"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="wishListDelete">
                                    <p>2020 yil 20 avgustda qoshilgan</p>
                                    <Link to="/">Ochirish</Link>
                                    <Link to="/">Oxshash malumotni toping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishList;