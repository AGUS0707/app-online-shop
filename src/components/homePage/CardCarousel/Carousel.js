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

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1},
};


function Carousel (props) {

    // const [productList, setProductList]=React.useState(props.product)

    let productList = props.product.slice(props.product.length-18, props.product.length)

    let filterList=[]
    let items=[]

    items=productList.map((item, index)=>{
        if (index<3){
            {filterList=productList.slice((index+1)*6-6, (index+1)*6)}
            return  <div className="item" data-value={index.toString()}>
                {filterList.map((item2)=>{
                    return <Card img={item2.photo_list[0].url}/>

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
    );
};

const mapStateToProps = (state) => {
    return {
        product: state.product.product,
        oneProduct: state.product.oneProduct
    }
}

export default connect(mapStateToProps, null)(Carousel)  ;