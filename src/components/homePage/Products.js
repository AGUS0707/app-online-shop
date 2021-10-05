import React, {useEffect, useState} from 'react';
import Card2 from "./CardCarousel/Card2";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {set_state1} from "../../redux/actions/productAction";
import "../../styles/mediaproducts.scss"

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

    return (
        <div className="container">
           <div className="nomediaproduct">
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
           <div className="mediaproducts">
               <div className="row pb-3">

                   {
                       props.product.map((item, index)=>{
                           return <div className="col-6"> <Link
                               className="text-decoration-none"
                               to={"/product/view/" + generateUrl(item.product_uz)}
                               onClick={(id, user_id)=>aa(item.id, item.user_id)}>

                               <Card2 key={index} name={item.product_uz} price={item.price} amount={item.amount} photo_list={item.photo_list[0]}/>
                           </Link></div>
                       })
                   }

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
        recProduct: state.product.recProduct,
        selProduct: state.product.selProduct,
    }
}

export default connect(mapStateToProps, {set_state1})(Products) ;