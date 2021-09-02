import React, {useEffect, useState} from 'react';
import Card2 from "./CardCarousel/Card2";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {set_state1} from "../../redux/actions/productAction";

const Products = (props) => {

    // console.log(props)

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
     // const [product, setProduct]=useState({})
    // function aa(id) {
    //      window.scrollTo(0, 0)
    //     props.product.forEach((item)=>{
    //         if (id==item.id){
                // set_state1({oneProduct: item});
                // localStorage.setItem("product",  JSON.stringify(item))
        //     }
        // })
    // }

    // useEffect(()=>{
    //     localStorage.setItem("product", props.oneProduct)
    // }, [])

    return (
        <div className="container">
            <div className="row pb-3">

                {
                    props.product.map((item, index)=>{
                        return <div className="col-2"> <Link
                                                            className="text-decoration-none"
                                                             to={"/product/view/" + generateUrl(item.product_uz) + ":" + item.id}
                                                             onClick={()=>{
                                                                 window.scrollTo(0, 0)
                                                                 props.set_state1({oneProduct: item})
                                                                 // props.set_state1({productUrl: "/product/view/" + generateUrl(item.product_uz)})
                                                             }}>

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
    }
}

export default connect(mapStateToProps, {set_state1})(Products) ;