import React, {useEffect, useState} from 'react';
import Card2 from "./CardCarousel/Card2";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {set_state1} from "../../redux/actions/productAction";

const Products = (props) => {

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
        <div className="container">
            <div className="row pb-3">

                {
                    props.product.map((item, index)=>{
                        return <div className="col-2"> <Link
                                                            className="text-decoration-none"
                                                             to={"/product/view/" + generateUrl(item.product_uz)}
                                                             onClick={(id, user_id)=>aa(item.id, item.user_id)}>

                            <Card2 key={index} name={item.product_uz} price={item.price} amount={item.amount} photo_list={item.photo_list[0]}/>
                        </Link></div>
                    })
                }

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

export default connect(mapStateToProps, {set_state1})(Products) ;