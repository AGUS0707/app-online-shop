import React, {useEffect, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../../styles/mainRightComponentCarousel.scss";
import axios from "axios";
import {API_PATH} from "../../../tools/constants";
import {set_state1} from "../../../redux/actions/productAction";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};



function MainRightComponentCarousel(props) {
    // useEffect(()=>{
        // axios.get(API_PATH+'product').then((response)=>{

            // console.log(response.data)
        // })
    // }, []);

    // const [productList, setProductList]=React.useState();
let productList = props.product.slice(props.product.length-6, props.product.length)

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



    let filterList=[];
    let items=[];
    items=productList.map((item, index)=>{
        if (index<3){
            {filterList=productList.slice((index+1)*2-2, (index+1)*2)}
            // console.log(filterList)
            return  <div className="item" data-value={index.toString()}>
                {filterList.map((item2)=>{
                    return <Link to={"/product/view/" + generateUrl(item2.product_uz)} className="text-decoration-none" onClick={(id, user_id)=>aa(item2.id, item2.user_id)}>
                        <div className="itemContent">
                            <div className="itemImgContent">
                                <img src={item2.photo_list[0].url} alt={item2.photo_list[0].alt_name}/>
                            </div>
                            <div className="price text-dark">8.3$</div>
                            <div className="sold text-dark">9 Sold</div>
                        </div>
                    </Link>
                })}
            </div>
        }
    });
    items=items.filter((item)=>{
        if (item!==undefined)
            return item
    })
    return (
        <div className="mainRightComponentCarousel1 __mainRightComponentCarousel1 ">
            <h6>Flash takliflari</h6>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        product: state.product.product,
        oneProduct: state.product.oneProduct,
        productUrl: state.product.productUrl,
    }
}

export default connect(mapStateToProps, {set_state1})(MainRightComponentCarousel) ;