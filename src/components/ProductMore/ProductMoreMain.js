import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {set_state1} from "../../redux/actions/productAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

import parse from 'html-react-parser';

const ProductMoreMain = (props) => {

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(props.oneProduct.price)
    const [price1, setPrice1] = useState({
        piece: 8010,
        price1: ""
    })
    const [url, setUrl] = useState("/images/like.png")
    let defaultprice = props.oneProduct.price

    function url1(id) {
        props.photo_list.map((item)=>{
            return item.id === id ? props.set_state1({onePhoto_list: item.url}) : ""
        })
    }

    return (
        <div className="container productmain p-0">
            <div className="row">
                <div className="col-4">
                    <div className="card border-0">
                        <img src={props.onePhoto_list} className="w-100 card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-center py-3">
                               {
                                   props.photo_list.map((item, index)=>{
                                       return  <div className={`card1 ${props.onePhoto_list === item.url ? "active" : ""}`}
                                                    onMouseOver={()=>url1(item.id)}>
                                           <img src={item.url} alt=""/>
                                       </div>
                                   })
                               }
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h3>
                        {parse(props.htmlString)}
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

                    <p style={{fontSize: "25px"}}>{props.oneProduct.price} so'm</p>

                    {
                        props.detailList.map((item)=>{
                            return <div>
                                <h5>{item.detail_uz}:</h5>

                                {
                                    props.valueList.map((item1)=>{
                                        return item.detail_id === item1.value_id ? <div className="d-flex align-items-center">
                                                <div className="cpu" onClick={() => {
                                                    setPrice1({piece: props.oneProduct.amount, price1: props.oneProduct.price})
                                                }}><h6>{item1.value_uz}</h6></div>
                                            </div> : ""

                                    })
                                }
                            </div>
                        })
                    }


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
                        <h1>Shipping: {price} so'm.</h1>
                        <h2>Estimated Delivery: 1 - 2 clock</h2>
                    </div>


                    <div className="buy d-flex align-items-center">
                        <div className="buynow d-flex align-items-center justify-content-center">
                            <Link to={`/product/buynow` + ":" + props.history.location.pathname.slice(props.history.location.pathname.search(":") + 1, props.history.location.pathname.length)} className="text-decoration-none"><p>Buy Now</p></Link>

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

const mapStateToProps = (state) => {
    return{
        oneProduct: state.product.oneProduct,
        product: state.product.product,
        photo_list: state.product.photo_list,
        url: state.product.url,
        htmlString: state.product.htmlString,
        onePhoto_list: state.product.onePhoto_list,
        detailList: state.product.detailList,
        valueList: state.product.valueList,
    }
}

export default connect(mapStateToProps, {set_state1})(ProductMoreMain) ;