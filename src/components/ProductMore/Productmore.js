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
import {Spinner} from "reactstrap";
import Cookies from "js-cookie";
import {toast} from "react-toastify";

const Productmore = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState()
    const [isLoadingCart, setIsLoadingCart] = useState(true)

    const [recProduct, setRecProduct] = useState()
    const [selProduct, setSelProduct] = useState()


    useEffect((e) => {
        window.scrollTo(0, 0)
        axios.get(API_PATH + "product")
            .then((res)=>{
                props.set_state1({product: res.data})

                let recProduct1 = []
                let selProduct1 = []

                res.data.filter((item)=>{

                    if (item.user_id === JSON.parse(localStorage.getItem("id")).user_id && recProduct1.length < 3 && JSON.parse(localStorage.getItem("id")).id!==item.id){
                        recProduct1 = recProduct1.concat(item)
                        // toast.success("asdf")
                        // console.log(recProduct)
                    }

                    if (item.user_id === JSON.parse(localStorage.getItem("id")).user_id && selProduct1.length < 7){
                        selProduct1 = selProduct1.concat(item)
                        // toast.success("asdf")
                    }

                    setRecProduct(recProduct1)
                    setSelProduct(selProduct1)


                    if (JSON.parse(localStorage.getItem("id")).id==item.id){
                        console.log(item)
                        props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
                    }
                    setIsLoading(false);

                })
            });

        axios.post(API_PATH+'cart', {id: localStorage.getItem("user").user_id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            setIsLoadingCart(false)
            setCount(response.data.length)
        })

    }, [])

    console.log(recProduct)


    // useEffect(()=>{
    //     props.product.filter((item)=>{
    //         if (item.id == props.history.location.pathname.slice(props.history.location.pathname.search(":") + 1, props.history.location.pathname.length)) {
    //             console.log(props.history.location.pathname.slice(props.history.location.pathname.search(":") + 1, props.history.location.pathname.length))
    //             return props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
    //         }
    //     })
    //
    // })


    return (
        <div>
            {
                isLoading || isLoadingCart ?  <div className="loader">
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
                </div>  :  <div>
                    <Navbar/>
                    <Search count={count}/>
                    <ProductMoreMain history={props.history} recProduct={recProduct}/>
                    <GlobalLaptop selProduct={selProduct}/>
                </div>
            }
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