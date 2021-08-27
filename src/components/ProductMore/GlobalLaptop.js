import React, {useState} from 'react';
import Overview from "./Overview";
import CustomerReviews from "./CustomerReviews";
import Products from "../homePage/Products";
import Footer from "../homePage/footer";
import Spesification from "./Spesification";

const GlobalLaptop = () => {

    const [count, setCount] = useState(1)

    return (
        <div className="globallaptop">

            <div className="container">
                <div className="global">
                    <h1 className="text-center">Global laptop & monitor factory Store</h1>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="contac">
                                <h3>Global laptop & mo ...</h3>
                                <p><b>94.7%</b> Positive Feedback</p>
                                <p><b>816</b> Followers</p>

                                <a href="tel:+998945094401" className="text-decoration-none">
                                    <div className="d-flex align-items-center" style={{cursor: "pointer"}}>
                                        <span className="icon icon-message"></span>
                                        <h4>Contact</h4>
                                    </div>
                                </a>

                                <div className="follow d-flex align-items-center">
                                    <div className="plus d-flex align-items-center justify-content-center">+ Follow</div>
                                    <div className="visit d-flex align-items-center justify-content-center">Visit Store</div>
                                </div>
                            </div>
                            <div className="store">
                                <img src="/images/cardimg.webp" className="w-100" alt=""/>
                                <p className="text-center">22 494,58 rubl</p>
                            </div>
                            <div className="store">
                                <img src="/images/cardimg.webp" className="w-100" alt=""/>
                                <p className="text-center">22 494,58 rubl</p>
                            </div>
                            <div className="store">
                                <img src="/images/cardimg.webp" className="w-100" alt=""/>
                                <p className="text-center">22 494,58 rubl</p>
                            </div>
                            <div className="store">
                                <img src="/images/cardimg.webp" className="w-100" alt=""/>
                                <p className="text-center">22 494,58 rubl</p>
                            </div>
                            <div className="store">
                                <img src="/images/cardimg.webp" className="w-100" alt=""/>
                                <p className="text-center">22 494,58 rubl</p>
                            </div>
                            <div className="store">
                                <img src="/images/cardimg.webp" className="w-100" alt=""/>
                                <p className="text-center">22 494,58 rubl</p>
                            </div>
                            <div className="store">
                                <img src="/images/cardimg.webp" className="w-100" alt=""/>
                                <p className="text-center">22 494,58 rubl</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="comment">
                    <div className="d-flex align-items-center justify-content-between sticky1">
                        <div className="d-flex align-items-center">
                            <div className={`${count === 1  ? "borderone" : ""}`} onClick={() => {
                                setCount(1)
                            }}>
                                <h3>Umumiy</h3>
                            </div>
                            <div className={`${count === 2  ? "borderone" : ""}`} onClick={() => {
                                setCount(2)
                            }}>
                                <h3>Mijozlar sharhlari</h3>
                            </div>
                            <div className={`${count === 3  ? "borderone" : ""}`} onClick={() => {
                                setCount(3)
                            }}>
                                <h3>Xususiyatlar</h3>
                            </div>
                        </div>



                        <p>Report item</p>
                    </div>


                    {
                        count === 1 ? <Overview/> : count === 2 ? <CustomerReviews/> : count === 3 ? <Spesification/> : ""
                    }



                </div>

                <h1 className="seller">Seller Recommendations</h1>




            </div>
            <Products/>
            <Footer/>
        </div>
    );
};

export default GlobalLaptop;