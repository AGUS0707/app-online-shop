import React, {useEffect, useState} from 'react';
import Navbar from "../homePage/navbar";
import Search from "../homePage/Search";
import ProductMoreMain from "./ProductMoreMain";
import "../../styles/productmoree.scss"
import GlobalLaptop from "./GlobalLaptop";
import {connect} from "react-redux";
import {set_state1} from "../../redux/actions/productAction";
import {set_state} from "../../redux/actions/categoryAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {Spinner} from "reactstrap";
import Cookies from "js-cookie";
import {toast} from "react-toastify";
import HomePageFixed from "../homePage/homePageFixed";

const Productmore = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0)
    const [isLoadingCart, setIsLoadingCart] = useState(true)
    const [count1, setCount1] = useState(parseFloat(props.oneProduct.min_order))
    const [price, setPrice] = useState(props.oneProduct.price * props.oneProduct.min_order)
    const [checkToast, setCheckToast] = useState(true)
    const [modal, setModal]=useState(false);
    const [recProduct, setRecProduct] = useState()
    const [selProduct, setSelProduct] = useState()

    const [detailLists1, setDetailLists1] = useState()
    const [valueLists1, setValueLists1] = useState()

    let detailLists = [];
    let valueLists = [];


    useEffect((e) => {
        window.scrollTo(0, 0)

        props.set_state1({checkdetval: false})
        if (window.localStorage.length === 0){
            props.history.push("/")
        }

        axios.get(API_PATH + "product")
            .then((res)=>{

                res.data.forEach(( item)=>{
                    if (JSON.parse(localStorage.getItem("id")) !== null){
                        if (JSON.parse(localStorage.getItem("id")).id===item.id){
                            props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
                            // console.log(item.min_order)
                            setCount1(parseFloat(item.min_order))
                            setPrice(item.price * item.min_order)
                        }
                    }
                })

                props.set_state1({product: res.data})

                let recProduct1 = []
                let selProduct1 = []

                res.data.filter((item)=>{

                   if (JSON.parse(localStorage.getItem("id")) !== null){
                       if (item.user_id === JSON.parse(localStorage.getItem("id")).user_id && recProduct1.length < 3 && JSON.parse(localStorage.getItem("id")).id!==item.id){
                           // toast.success("asdf")
                           recProduct1 = recProduct1.concat(item)
                           // toast.success("asdf")
                           // console.log(recProduct)
                       }

                   }
                   if (JSON.parse(localStorage.getItem("id")) !== null){
                       if (item.user_id === JSON.parse(localStorage.getItem("id")).user_id && selProduct1.length < 5){
                           selProduct1 = selProduct1.concat(item)
                           // toast.success("asdf")
                       }
                   }

                    // setRecProduct(recProduct1)

                    props.set_state1({recProduct: recProduct1})
                    props.set_state1({selProduct: selProduct1})

                    // setSelProduct(selProduct1)


                    if (JSON.parse(localStorage.getItem("id"))){
                        if (JSON.parse(localStorage.getItem("id")).id==item.id){
                            // console.log(item)
                            props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz})
                            // valueList: item.value, detailList: item.detail

                            item.detail.forEach((item1)=>{
                                // console.log(item1)

                                let newArray = {
                                    ...item1,
                                    checked: false
                                }
                                detailLists = detailLists.concat(newArray)
                                // setDetailLists1(detailLists)
                                props.set_state1({detailList: detailLists})
                                // console.log(detailLists)

                            })
                            item.value.forEach((item2)=>{
                                let newArray1 = {
                                    ...item2,
                                    checked: false
                                }
                                valueLists = valueLists.concat(newArray1)
                                // setValueLists1(valueLists)
                                props.set_state1({valueList:valueLists})
                                // console.log(valueLists)

                            })

                        }
                    }
                    setIsLoading(false);

                })
            });

        if (JSON.parse(localStorage.getItem("user")) !== null){
            axios.post(API_PATH+'cart', {id: JSON.parse(localStorage.getItem("user")).id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
                setIsLoadingCart(false)
                props.set_state({countCart: response.data.length})
            }) .catch(()=>{
                setIsLoadingCart(false)
            })
        } else {
            setIsLoadingCart(false)

        }

    }, [])

    return (
        <div>
            {
                isLoading || isLoadingCart ?  <div className="loader">
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
                </div>  :  <div>
                    <Navbar/>
                    {
                        window.innerWidth < 576 ? !modal ? <Search count={count}/> : "" : <Search count={count}/>
                    }
                    <ProductMoreMain checkToast={checkToast} setCheckToast={setCheckToast} setModal={setModal} modal={modal} count1={count1} setCount1={setCount1} price={price} setPrice={setPrice} setDetailLists={setDetailLists1} setValueLists={setValueLists1}  history={props.history}/>
                    <GlobalLaptop setCount1={setCount1} setPrice={setPrice}/>
                    {
                        !modal ? <HomePageFixed count={count}/> : ""
                    }
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
        recProduct: state.product.recProduct,
        selProduct: state.product.selProduct,
    }
}

export default  connect(mapStateToProps, {set_state1, set_state})(Productmore);