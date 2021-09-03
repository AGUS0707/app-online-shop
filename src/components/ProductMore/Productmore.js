import React, {useEffect, useState} from 'react';
import Navbar from "../homePage/navbar";
import Search from "../homePage/Search";
import ProductMoreMain from "./ProductMoreMain";
import "../../styles/productmoree.scss"
import GlobalLaptop from "./GlobalLaptop";
import {connect} from "react-redux";
import {set_state1} from "../../redux/actions/productAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

const Productmore = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(API_PATH + "product")
            .then((res)=>{
                props.set_state1({product: res.data})
            });

    }, [])

    // const [onePhoto_list, setOnePhoto_list] =


    useEffect(()=>{
        props.product.filter((item)=>{
            if (item.id == props.history.location.pathname.slice(props.history.location.pathname.search(":") + 1, props.history.location.pathname.length)) {
                console.log(props.history.location.pathname.slice(props.history.location.pathname.search(":") + 1, props.history.location.pathname.length))
                return props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
            }
        })

    })


    return (
        <div>
            <Navbar/>
            <Search/>
            <ProductMoreMain history={props.history}/>
            <GlobalLaptop/>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        oneProduct: state.product.oneProduct,
        product: state.product.product,
        photo_list: state.product.photo_list,
        // onePhoto_list: state.product.onePhoto_list,
        htmlString: state.product.htmlString,
        detailList: state.product.detailList,
        valueList: state.product.valueList,
    }
}

export default  connect(mapStateToProps, {set_state1})(Productmore);