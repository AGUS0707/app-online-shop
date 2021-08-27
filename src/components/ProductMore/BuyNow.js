import React, {useEffect, useState} from 'react';
import Footer from "../homePage/footer";
import "../../styles/buynow.scss"
import img from "../../images/users.png"

const BuyNow = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(9664.34)
    let defaultprice = 9664.34

    return (
        <div className="buynow bg-light">
            <div className="bg-white py-3">
                <div className="container">
                    <h3>LOGOTIP</h3>
                </div>
            </div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-8">

                        <div className="bg-white p-3 rounded">
                            <h4>Shipping Information</h4>

                            <p className="text-primary mt-4">+ Add new addres</p>
                        </div>

                        <div className="bg-white p-3 rounded mt-3">
                            <h4>Payment Methods</h4>

                            <p className="text-primary mt-4">+ Select payment method</p>
                        </div>

                        <div className="bg-white p-3 rounded mt-3">
                            <h4>Order Review</h4>

                            <p className="mt-4">Seller: Global laptop & monitor factory Store</p>

                            <div className="line"></div>

                            <div className="row">
                                <div className="col-2">
                                    <img src={img} className="w-100" alt=""/>
                                </div>
                                <div className="col-8">
                                    <p>Core i7 Laptop 15.6 inch 8G/16G RAM 128G/256G/512G/1TB SSD Notebook Computer
                                        Metal Body IPS Backlit Keyboard Laptop Gaming</p>
                                    <p className="mt-2"><b>Color:</b>16G RAM 1TB HDD</p>

                                    <h6 className="my-3">US $739.00</h6>

                                    <p><b className="text-primary">Shipping: US $128.46</b> via Fedex IP
                                        Estimated Delivery Time:7-15 Days &#x279C;</p>

                                    <p className="mt-3 text-primary">+ Leave message</p>
                                </div>
                                <div className="col-2">
                                    <div className="d-flex align-items-center count">
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



                                    </div>
                                </div>
                            </div>

                            <div className="line"></div>
                        </div>

                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );
};

export default BuyNow;