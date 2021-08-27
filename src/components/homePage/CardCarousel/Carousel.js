import React, {useState} from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../../styles/carousel.scss"
import Card from "./Card";
import Sorts from "../../ProductMore/Sorts";

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1},
};


function Carousel () {

    const [productList, setProductList]=React.useState([
        {
            url:"images/cardimg2.webp"
        },
        {
            url: "images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url: "images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url: "images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },
        {
            url:"images/cardimg2.webp"
        },

    ])

    let filterList=[]
    let items=[]

    items=productList.map((item, index)=>{
        if (index<3){
            {filterList=productList.slice((index+1)*6-6, (index+1)*6)}
            return  <div className="item" data-value={index.toString()}>
                {filterList.map((item2)=>{
                    return <Card img={item2.url}/>

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

export default Carousel;