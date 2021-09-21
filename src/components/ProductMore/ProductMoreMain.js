import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {set_state1} from "../../redux/actions/productAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

import parse from 'html-react-parser';
import {toast} from "react-toastify";
import Cookies from "js-cookie";

const ProductMoreMain = (props) => {

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(props.oneProduct.price)
    const [choose, setChoose] = useState(false)
    const [detail, setDetail] = useState("")

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');


    const [url, setUrl] = useState("/images/like.png")
    const product={
        amount:props.oneProduct.amount,
        brand_name:props.oneProduct.brand_name,
        detail: "",
        id: props.oneProduct.id,
        min_order: props.oneProduct.min_order,
        price: props.oneProduct.price,
        product_ru: props.oneProduct.product_ru,
        product_uz: props.oneProduct.product_uz,
        user_id: props.oneProduct.user_id,
        value: "",
        xarakteristika: props.oneProduct.xarakteristika,
        count: count
    }

    let defaultprice = props.oneProduct.price
    let data = JSON.parse(localStorage.getItem('user'))
    let boolean = localStorage.getItem("boolean")



    let valueListThis=[];
    function choosevalue(valueid, detailid, count) {


        // console.log(valueid)
        // console.log(detailid)

        // setDetail(detailid)

        // if (detail ===)

        // console.log(count)

        valueListThis=valueListThis.concat(valueid);
        console.log(valueListThis)


    }




    function url1(id) {
        props.photo_list.map((item)=>{
            return item.id === id ? props.set_state1({onePhoto_list: item.url}) : ""
        })
    }


    function aa(id, user_id) {
        window.scrollTo(0, 0)
        localStorage.setItem("id", JSON.stringify({
            id: id,
            user_id: user_id
        }))
        props.product.forEach(( item)=>{
            if (id===item.id){
                props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
            }
        })
    }


    function handleInput() {
        if (boolean === "true"){
            props.history.push("/product/buynow")
            localStorage.setItem("product", JSON.stringify(product))
            console.log(count)
        } else {
            toast.error("Login qiling")
        }
    }

    return (
        <div className="container productmain p-0">
            <div className="row">
                <div className="col-4">
                    <div className="card border-0">
                        <img src={props.onePhoto_list} style={{height: "450px"}} className="w-100 card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-center py-3">
                               {
                                   props.photo_list.map((item, index)=>{
                                       return  <div className={`card1 ${props.onePhoto_list === item.url ? "active" : ""}`}
                                                    onMouseOver={()=>url1(item.id)}>
                                           <img src={item.url} width="50"  height="50" alt=""/>
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
                        props.detailList.map((item, index)=>{
                            return <div>
                                <h5>{item.detail_uz}:</h5>

                               <div className="row">
                                   {
                                       props.valueList.map((item1)=>{
                                           return item.detail_id == item1.det_id ? <div className="col-2">
                                               <div className="cpu" onClick={(valueid, detailid, count)=>choosevalue(item1.value_id, item.detail_id, index)}><h6>{item1.value_uz}</h6></div>
                                           </div> : ""

                                       })
                                   }
                               </div>
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


                            <p>{price} so'm</p>


                        </div>
                    </div>

                    <div className="price">
                        <h1>Shipping: {price} so'm.</h1>
                        <h2>Estimated Delivery: 1 - 2 clock</h2>
                    </div>


                    <div className="buy d-flex align-items-center">
                        <div className="buynow d-flex align-items-center justify-content-center" onClick={handleInput}>
                            {/*<Link to={`/product/buynow`} className="text-decoration-none"><p>Buy Now</p></Link>*/}
                            <p>Buy Now</p>

                        </div>
                        <div className="addcart d-flex align-items-center justify-content-center" onClick={()=>{

                            if (boolean === "true"){
                                axios.post(API_PATH + "crcart", {user_id: data.id, amount: count, product_id: props.oneProduct.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                                    .then((res)=>{
                                        toast.success("Qo'shildi")
                                    })
                            } else {
                                toast.error("Login qiling")
                            }
                        }}>
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
                    {
                        props.recProduct.map((item)=>{
                            return <>
                                <Link
                                    className="text-decoration-none"
                                    to={"/product/view/" + generateUrl(item.product_uz)}
                                    onClick={(id, user_id)=>aa(item.id, item.user_id)}
                                >
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={item.photo_list[0].url} width="120" height="120" alt=""/>
                                    </div>
                                    <h5 className="text-center mt-2">{item.price} so'm</h5>
                                </Link>
                            </>
                        })
                    }

                    {/*<div className="d-flex align-items-center justify-content-center mt-3">*/}
                    {/*    <img src="/images/cardimg.webp" width="120" height="120" alt=""/>*/}
                    {/*</div>*/}
                    {/*<h5 className="text-center mt-2">22 494,58 rubl.</h5>*/}
                    {/*<div className="d-flex align-items-center justify-content-center mt-3">*/}
                    {/*    <img src="/images/cardimg.webp" width="120" height="120" alt=""/>*/}
                    {/*</div>*/}
                    {/*<h5 className="text-center mt-2">22 494,58 rubl.</h5>*/}
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