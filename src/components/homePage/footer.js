import React from 'react';
import "../../styles/footer.scss";
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerTop">
                    <div className="footerTopContent">
                        <div className="card">
                            <div className="card-body">
                                <div className="cardIcon mx-auto">
                                    <img src="/images/coin.svg" alt="no images"/>
                                </div>
                                <div className="cardTitle">Katta qiymat</div>
                                <div className="cardDescription">
                                    Biz 100 milliondan ortiq mahsulotlarga raqobatbardosh narxlarni taklif qilamiz.
                                </div>
                            </div>
                        </div>
                        <div className="lines">

                        </div>
                    </div>
                    <div className="footerTopContent">
                        <div className="card">
                            <div className="card-body">
                                <div className="cardIcon mx-auto">
                                    <img src="/images/truck.svg" alt="no images"/>
                                </div>
                                <div className="cardTitle">Dunyo bo'ylab xaridlar</div>
                                <div className="cardDescription">
                                    Biz 200 dan ortiq mamlakat va mintaqalarga jo'natamiz va bizning saytimiz 12 tilda keladi.
                                </div>
                            </div>
                        </div>
                        <div className="lines">

                        </div>
                    </div>
                    <div className="footerTopContent">
                        <div className="card">
                            <div className="card-body">
                                <div className="cardIcon mx-auto">
                                    <img src="/images/credit-card.svg" alt="no images"/>
                                </div>
                                <div className="cardTitle">Xavfsiz to'lov</div>
                                <div className="cardDescription">
                                    Dunyodagi eng mashhur va xavfsiz to'lov usullari bilan to'lang.
                                </div>
                            </div>
                        </div>
                        <div className="lines">

                        </div>
                    </div>
                    <div className="footerTopContent">
                        <div className="card">
                            <div className="card-body">
                                <div className="cardIcon mx-auto">
                                    <img src="/images/verified.svg" alt="no images"/>
                                </div>
                                <div className="cardTitle">Ishonch bilan xarid qiling</div>
                                <div className="cardDescription">
                                    Xaridorlarni himoya qilish siyosati sizning butun sayohatingizni qamrab oladi.
                                </div>
                            </div>
                        </div>
                        <div className="lines">

                        </div>
                    </div>
                    <div className="footerTopContent">
                        <div className="card">
                            <div className="card-body">
                                <div className="cardIcon mx-auto">
                                    <img src="/images/users.svg" alt="no images"/>
                                </div>
                                <div className="cardTitle">Yordam markazi</div>
                                <div className="cardDescription">
                                    Biz 100 milliondan ortiq mahsulotlarga raqobatbardosh narxlarni taklif qilamiz.
                                </div>
                            </div>
                        </div>
                        <div className="lines">

                        </div>
                    </div>
                    <div className="footerTopContent">
                        <div className="card">
                            <div className="card-body">
                                <div className="cardIcon mx-auto">
                                    <img src="/images/android.svg" alt="no images"/>
                                    <img src="/images/apple.svg" alt="no images"/>
                                </div>
                                <div className="cardTitle">Katta qiymat</div>
                                <div className="cardDescription">
                                    Biz 100 milliondan ortiq mahsulotlarga raqobatbardosh narxlarni taklif qilamiz.
                                </div>
                            </div>
                        </div>
                        <div className="lines">

                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="row">
                        <div className="col-md-5">
                            <h6>Aloqada boling</h6>
                            <div className="connectionIcon">
                                <Link  to="/"className="connectionIconItem">

                                </Link>
                                <Link  to="/" className="connectionIconItem">

                                </Link>
                                <Link  to="/" className="connectionIconItem">

                                </Link>
                                <Link  to="/" className="connectionIconItem">

                                </Link>
                                <Link  to="/" className="connectionIconItem">

                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-4">
                                    <div className="shoppingFooter">
                                        <h6>Biz bilan xarid qilish</h6>
                                        <Link to="/">Tolovlarni amalga oshirish</Link>
                                        <Link to="/">Yetkazib berish imkoniyatlari</Link>
                                        <Link to="/">Xaridor himoyasi</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="customer">
                                        <h6>Mijozlarga xizmat ko'rsatish</h6>
                                        <Link to="/">Mijozlarga xizmat ko'rsatish</Link>
                                        <Link to="/">Transaction Services Agreement</Link>
                                        <Link to="/">Take our feedback survey</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="colobrate">
                                        <h6>Biz bilan hamkorlik qiling</h6>
                                        <Link to="/">Hamkorlik</Link>
                                        <Link to="/">Hamkorlik dasturi</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;