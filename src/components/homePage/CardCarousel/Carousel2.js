import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-alice-carousel/lib/alice-carousel.css';
import "../../../styles/carousel.scss"
import Card from "./Card";
import Sorts2 from "../../ProductMore/Sorts2";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {set_state1} from "../../../redux/actions/productAction";


function Carousel (props) {


    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint:676,
                settings: {
                    slidesToShow: 2
                }
            }
        ],
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        cssEase: "linear"
    };

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

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

    return (
        <div className="karusel2">
            <div className="container">
                <Sorts2/>
                <Slider {...settings}>

                    {
                        props.product.map((item, index)=>{
                            return <div className="item" data-value={index.toString()}>
                                <Link to={"/product/view/" + generateUrl(item.product_uz)} onClick={(id, user_id)=>aa(item.id, item.user_id)} className="text-decoration-none"><Card img={item.photo_list[0].url} price={item.price} amount={item.amount}/></Link>
                            </div>
                        })
                    }

                </Slider>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        product: state.product.product,
        oneProduct: state.product.oneProduct,
        productUrl: state.product.productUrl,
        photo_list: state.product.photo_list,
        onePhoto_list: state.product.onePhoto_list,
        htmlString: state.product.htmlString,
        valueList: state.product.valueList,
        detailList: state.product.detailList,
    }
}


export default connect(mapStateToProps, {set_state1})(Carousel) ;