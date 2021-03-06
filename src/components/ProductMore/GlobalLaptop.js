import React, {useEffect, useState} from 'react';
import Overview from "./Overview";
import CustomerReviews from "./CustomerReviews";
import Products from "../homePage/Products";
import Footer from "../homePage/footer";
import Spesification from "./Spesification";
import {set_state1} from "../../redux/actions/productAction";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

const GlobalLaptop = (props) => {

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    function aa(id, user_id) {
        window.scrollTo(0, 0)
        localStorage.setItem("id", JSON.stringify({
            id: id,
            user_id: user_id
        }))
        props.set_state1({checkdetval: false})

        props.product.forEach(( item)=>{
            if (id===item.id){
                props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})

                props.setCount1(parseFloat(item.min_order))
                props.setPrice(item.price * item.min_order)

            }
        })

        let recProduct1 = []
        let selProduct1 = []

        props.product.filter((item)=>{
            if (item.user_id === JSON.parse(localStorage.getItem("id")).user_id && recProduct1.length < 3 && JSON.parse(localStorage.getItem("id")).id!==item.id){
                // toast.success("asdf")
                recProduct1 = recProduct1.concat(item)
                // toast.success("asdf")
                // console.log(recProduct)
            }

            if (item.user_id === JSON.parse(localStorage.getItem("id")).user_id && selProduct1.length < 5){
                selProduct1 = selProduct1.concat(item)
                // toast.success("asdf")
            }

            props.set_state1({recProduct: recProduct1})
            props.set_state1({selProduct: selProduct1})
        })

    }

    const [count, setCount] = useState(1)
    return (
        <div>
            <div className="globallaptop">

                <div className="container">
                    <div className="global">
                        <h1 className="text-center">Global laptop & monitor factory Store</h1>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="row d-flex align-items-center">
                                <div className="col-2">
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
                                </div>
                                {
                                    props.selProduct.map((item)=>{
                                        return  <div className="col-2">
                                            <Link
                                                className="text-decoration-none"
                                                to={"/product/view/" + generateUrl(item.product_uz)}
                                                onClick={(id, user_id)=>aa(item.id, item.user_id)}
                                            >
                                                <div className="card border-0 bg-light" style={{width: "180px"}}>
                                                    <div className="card-body d-flex align-items-center justify-content-center">
                                                        <div className="store d-flex align-items-center justify-content-center ">
                                                            <div>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <img src={item.photo_list[0].url} className="w-100" alt=""/>
                                                                </div>
                                                                <p className="text-center">{item.price} so'm</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    })
                                }
                                {/*<div className="store">*/}
                                {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                                {/*    <p className="text-center">22 494,58 rubl</p>*/}
                                {/*</div>*/}
                                {/*<div className="store">*/}
                                {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                                {/*    <p className="text-center">22 494,58 rubl</p>*/}
                                {/*</div>*/}
                                {/*<div className="store">*/}
                                {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                                {/*    <p className="text-center">22 494,58 rubl</p>*/}
                                {/*</div>*/}
                                {/*<div className="store">*/}
                                {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                                {/*    <p className="text-center">22 494,58 rubl</p>*/}
                                {/*</div>*/}
                                {/*<div className="store">*/}
                                {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                                {/*    <p className="text-center">22 494,58 rubl</p>*/}
                                {/*</div>*/}
                                {/*<div className="store">*/}
                                {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                                {/*    <p className="text-center">22 494,58 rubl</p>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8 offset-2">
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



                                    {/*<p>Report item</p>*/}
                                </div>


                                {
                                    count === 1 ? <Overview htmlstring={props.htmlString} oneProduct={props.oneProduct} photo_list={props.photo_list}/> : count === 2 ? <CustomerReviews/> : count === 3 ? <Spesification brand={props.oneProduct}/> : ""
                                }



                            </div>
                        </div>
                    </div>

                    <h1 className="seller">Seller Recommendations</h1>

                </div>

                <Products/>
                <Footer/>

            </div>
            <div className="globalmedia">
                <div className="rowww">
                    <div className="">
                        <div className="d-flex align-items-center">
                            <div className="mr-3">
                                <div className="contac">
                                    <h3>Global laptop & mo ...</h3>
                                    <p><b>94.7%</b> Positive Feedback</p>
                                    <p><b>816</b> Followers</p>

                                    <a href="tel:+998945094401" className="text-decoration-none">
                                        <div className="d-flex align-items-center" style={{cursor: "pointer"}}>
                                            <span className="icon11 icon-message11"></span>
                                            <h4>Contact</h4>
                                        </div>
                                    </a>

                                    <div className="follow d-flex align-items-center">
                                        <div className="plus d-flex align-items-center justify-content-center">+ Follow</div>
                                        <div className="visit d-flex align-items-center justify-content-center">Visit Store</div>
                                    </div>
                                </div>
                            </div>
                            {
                                props.selProduct.map((item)=>{
                                    return  <div className="mr-3 cardcha">
                                        <Link
                                            className="text-decoration-none"
                                            to={"/product/view/" + generateUrl(item.product_uz)}
                                            onClick={(id, user_id)=>aa(item.id, item.user_id)}
                                        >
                                            <div className="card border-0 bg-light" style={{width: "180px"}}>
                                                <div className="card-body d-flex align-items-center justify-content-center">
                                                    <div className="store d-flex align-items-center justify-content-center ">
                                                        <div>
                                                            <div className="d-flex align-items-center justify-content-center">
                                                                <img src={item.photo_list[0].url} className="w-100" alt=""/>
                                                            </div>
                                                            <p className="text-center">{item.price} so'm</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                })
                            }
                            {/*<div className="store">*/}
                            {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                            {/*    <p className="text-center">22 494,58 rubl</p>*/}
                            {/*</div>*/}
                            {/*<div className="store">*/}
                            {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                            {/*    <p className="text-center">22 494,58 rubl</p>*/}
                            {/*</div>*/}
                            {/*<div className="store">*/}
                            {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                            {/*    <p className="text-center">22 494,58 rubl</p>*/}
                            {/*</div>*/}
                            {/*<div className="store">*/}
                            {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                            {/*    <p className="text-center">22 494,58 rubl</p>*/}
                            {/*</div>*/}
                            {/*<div className="store">*/}
                            {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                            {/*    <p className="text-center">22 494,58 rubl</p>*/}
                            {/*</div>*/}
                            {/*<div className="store">*/}
                            {/*    <img src="/images/cardimg.webp" className="w-100" alt=""/>*/}
                            {/*    <p className="text-center">22 494,58 rubl</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

                <h5 className="ml-3">Seller recomendation</h5>

                <Products/>


                <Footer/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        oneProduct: state.product.oneProduct,
        product: state.product.product,
        photo_list: state.product.photo_list,
        url: state.product.url,
        htmlString: state.product.htmlString,
        selProduct: state.product.selProduct,
        recProduct: state.product.recProduct,
        checkdetval: state.product.checkdetval



    }
}

export default connect(mapStateToProps, {set_state1})(GlobalLaptop);