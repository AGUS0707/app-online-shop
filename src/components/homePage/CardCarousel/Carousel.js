import React, {useState} from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../../styles/carousel.scss"
import Card from "./Card";
import Sorts from "../../ProductMore/Sorts";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {set_state1} from "../../../redux/actions/productAction";

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1},
};


function Carousel (props) {

    // const [productList, setProductList]=React.useState(props.product)

    // let productList = props.product.slice(props.product.length-18, props.product.length)
    let productList = props.product

    let filterList=[]
    let items=[]
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


    items=productList.map((item, index)=>{
        if (index<3){
            {filterList=productList.slice((index+1)*6-6, (index+1)*6)}
            return  <div className="item" data-value={index.toString()}>
                {filterList.map((item2)=>{
                    return <Link to={"/product/view/" + generateUrl(item2.product_uz)} onClick={(id, user_id)=>aa(item2.id, item2.user_id)} className="text-decoration-none"><Card img={item2.photo_list[0].url} price={item2.price} amount={item.amount}/></Link>

                })}
            </div>
        }
    })
    items=items.filter((item)=>{
        if (item!==undefined)
            return item
    })



    return (
        <div className="karusel">
            <div className="container">
                <Sorts/>
                <div className="px-3">
                    <AliceCarousel
                        mouseTracking
                        infinite
                        items={items}
                        responsive={responsive}
                        controlsStrategy="alternate"
                        autoPlay
                        autoPlayInterval={2000}
                    />
                </div>
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

export default connect(mapStateToProps, {set_state1})(Carousel)  ;