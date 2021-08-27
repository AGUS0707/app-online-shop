import React, {useState} from 'react';

import {Link} from "react-router-dom";

const ProductMoreMain = () => {

    const [src, setSrc] = useState("/images/computer2.webp")
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(9664.34)
    const [price1, setPrice1] = useState({
        piece: 8010,
        price1: 464546.5454
    })
    const [url, setUrl] = useState("/images/like.png")
    let defaultprice = 9664.34

    return (
        <div className="container productmain p-0">
            <div className="row">
                <div className="col-4">
                    <div className="card border-0">
                        <img src={src} className="w-100 card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-center py-3">
                                <div className={`card1 ${src === "/images/computer2.webp" ? "active" : ""}`}
                                     onMouseOver={() => {
                                         setSrc("/images/computer2.webp")

                                     }}>
                                    <img src="/images/computer2.webp" alt=""/>
                                </div>
                                <div className={`card1 ${src === "/images/computer1.webp" ? "active" : ""}`}
                                     onMouseOver={() => {
                                         setSrc("/images/computer1.webp")
                                     }}>
                                    <img src="/images/computer1.webp" alt=""/>
                                </div>
                                <div className={`card1 ${src === "/images/computer3.webp" ? "active" : ""}`}
                                     onMouseOver={() => {
                                         setSrc("/images/computer3.webp")
                                     }}>
                                    <img src="/images/computer3.webp" alt=""/>
                                </div>
                                <div className={`card1 ${src === "/images/computer4.webp" ? "active" : ""}`}
                                     onMouseOver={() => {
                                         setSrc("/images/computer4.webp")
                                     }}>
                                    <img src="/images/computer4.webp" alt=""/>
                                </div>
                                <div className={`card1 ${src === "/images/computer5.webp" ? "active" : ""}`}
                                     onMouseOver={() => {
                                         setSrc("/images/computer5.webp")
                                     }}>
                                    <img src="/images/computer5.webp" alt=""/>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h3>Core i7 Laptop 15.6 inch 8G/16G RAM 128G/256G/512G/1TB SSD Notebook Computer Metal Body IPS
                        Backlit Keyboard Laptop Gaming
                    </h3>

                    <div className="d-flex align-items-center">
                        <span className="icon icon-stars1"></span>
                        <span className="icon icon-stars1"></span>
                        <span className="icon icon-stars1"></span>
                        <span className="icon icon-stars1"></span>
                        <span className="icon icon-stars1"></span>

                        <p className="mb-0">1 Reviews</p>

                        <h4 className="mb-0">6 ta buyurtma</h4>
                    </div>

                    <div className="line"></div>

                    <p style={{fontSize: "25px"}}>{price1.price1} rubl</p>

                    <h5>Color:</h5>

                    <div className="row">
                        <div className="col-4">
                            <div className="cpu" onClick={() => {
                                setPrice1({piece: 2010, price1: 465464.2321321})
                            }}><h6>8GB RAM 128G SSD</h6></div>
                        </div>
                        <div className="col-4">
                            <div className="cpu" onClick={() => {
                                setPrice1({piece: 7878, price1: 9878789.2321321})
                            }}><h6>8GB RAM 128G SSD</h6></div>
                        </div>
                        <div className="col-4">
                            <div className="cpu" onClick={() => {
                                setPrice1({piece: 3232, price1: 9898.2321321})
                            }}><h6>8GB RAM 128G SSD</h6></div>
                        </div>
                        <div className="col-4">
                            <div className="cpu" onClick={() => {
                                setPrice1({piece: 787, price1: 21121.2321321})
                            }}><h6>8GB RAM 128G SSD</h6></div>
                        </div>
                        <div className="col-4">
                            <div className="cpu" onClick={() => {
                                setPrice1({piece: 2010, price1: 87987.2321321})
                            }}><h6>8GB RAM 128G SSD</h6></div>
                        </div>
                    </div>
                    <div className="count">
                        <h3>Quantity:</h3>
                        <div className="d-flex align-items-center">
                            <div className="minus" onClick={() => {
                                if (count > 1) {
                                    setCount(count - 1)
                                    setPrice(price - defaultprice)
                                }

                            }}><span className={`icon icon-minus ${count === 1 ? "nodrop" : "pointer"}`}></span></div>
                            <h4>{count}</h4>
                            <div className="minus" onClick={() => {
                                setCount(count + 1)
                                setPrice(defaultprice * (count + 1))
                            }}><span className="icon icon-plus"></span></div>


                            <p>{price1.piece} pieces available</p>


                        </div>
                    </div>

                    <div className="price">
                        <h1>Shipping: {price} rubl.</h1>
                        <h2>Estimated Delivery: 1 - 2 clock</h2>
                    </div>


                    <div className="buy d-flex align-items-center">
                        <div className="buynow d-flex align-items-center justify-content-center">
                            <Link to="/product/buynow" className="text-decoration-none"><p>Buy Now</p></Link>

                        </div>
                        <div className="addcart d-flex align-items-center justify-content-center">
                            <p>Add to Cart</p>

                        </div>
                        <div className="like d-flex align-items-center justify-content-center" onClick={() => {
                            if (url === "/images/like.png") {
                                setUrl("/images/like2.png")
                            } else {
                                setUrl("/images/like.png")
                            }
                        }}>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={url} className="mr-1" alt=""/>
                                100
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <p className="text-center">Recomended For <br/> You</p>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src="/images/cardimg.webp" width="120" height="120" alt=""/>
                    </div>
                    <h5 className="text-center mt-2">22 494,58 rubl.</h5>
                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <img src="/images/cardimg.webp" width="120" height="120" alt=""/>
                    </div>
                    <h5 className="text-center mt-2">22 494,58 rubl.</h5>
                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <img src="/images/cardimg.webp" width="120" height="120" alt=""/>
                    </div>
                    <h5 className="text-center mt-2">22 494,58 rubl.</h5>
                </div>
            </div>
        </div>
    );
};

export default ProductMoreMain;