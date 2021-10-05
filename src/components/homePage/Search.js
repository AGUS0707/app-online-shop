import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "../../styles/search.scss";
import {connect} from "react-redux";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {useLocation} from 'react-router-dom'
const Search = (props) => {
    const [product_name, setProductName]=useState("");
    function filterList(e) {
        if (e.key==="Enter"){
            if (product_name!==""){
                axios.get(API_PATH + "product")
                    .then((res)=>{
                        let newArray=[];
                        res.data.forEach((item)=>{
                            if (item.product_uz.toUpperCase().includes(product_name.toUpperCase()))
                                newArray=newArray.concat(item);
                        });
                        props.filterProductList(newArray);
                        if (window.location.pathname!=='/home/search'){
                            props.history.push('/home/search');
                        }
                    });
            }
        }
    }
    function filterListClick() {
        if (product_name!==""){
            axios.get(API_PATH + "product")
                .then((res)=>{
                    let newArray=[];
                    res.data.forEach((item)=>{
                        if (item.product_uz.toUpperCase().includes(product_name.toUpperCase()))
                            newArray=newArray.concat(item);
                    });
                    props.filterProductList(newArray);
                    if (window.location.pathname!=='/home/search'){
                        props.history.push('/home/search');
                    }
                });
        }
    }

    return (
        <div className={`search ${window.innerWidth < 576 ? "search1" : ""}`}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between px-2">
                    <div className="h11">
                        <Link to="/" className="text-decoration-none"><h1 className="text-dark">LOGOTIP</h1></Link>
                    </div>
                    <div className="media-burger">
                        <span className="icon icon-burger"></span>
                    </div>
                    {
                        window.location.pathname.includes("/home/shopping") || window.location.pathname.includes("/home/profile") || window.location.pathname.includes("/category/") || window.location.pathname.includes("/product/view/") ? "" : <div>
                            <div  className="qidiruv d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <input onKeyPress={filterList} type="text" defaultValue={localStorage.getItem("searchProduct")} name="product_name" placeholder="Mahsulot qidirilmoqda..." onChange={(e)=>{
                                        setProductName(e.target.value)
                                        localStorage.setItem("searchProduct", e.target.value)
                                    }} className="form-control w-100"/>
                                </div>
                                <Link onClick={filterListClick}     className="px-2">
                                    <span className="icon icon-search"></span>
                                </Link>
                            </div>
                        </div>
                    }
                    <Link to="/home/shopping" className="korzinka">
                        <span className="icon icon-cart"></span>
                        <div className="count">{props.category.countCart}</div>
                    </Link>
                    <div className="media-til">
                        <select className="border-0">
                            <option>Uzb</option>
                            <option>Rus</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
      return {
          shoppingCardCountFunction:function (count) {
              dispatch({
                  type: "SHOPPING_CARD_COUNT",
                  payload: count
              })
          },
          filterProductList:function (filter_list) {
              dispatch({
                  type: "PRODUCT_LIST_SEARCH",
                  payload: filter_list
              })
          }
      }
}
export default connect(mapStateToProps, mapDispatchToProps) (Search);