import React, {useEffect, useState} from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Footer from "./footer";
import Basket from "./basket";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";

import {Spinner} from "reactstrap"
import "../../styles/loader.scss"


import {connect} from "react-redux";

function ShoppingCard(props) {

    useEffect(()=>{
        if (props.userCheckReducer.userCheck){
            axios.post(API_PATH+'cart', {id:props.userReducer.userObject.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
                props.shoppingCardListFunction(response.data);
                setCount(response.data.length);
                setLoad(true);
            }).catch((error)=>{
                setLoad(true);
                props.shoppingCardListUpdateFunction([]);
            })
        }else {
            setLoad(true);
            props.shoppingCardListUpdateFunction([]);
        }
    }, []);

    const [load, setLoad] = useState(false);
    const [count, setCount] = useState();


    return (
        <>
           {
               !load ?  <div className="loader">
                   <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
               </div> : <>
                   <Navbar/>
                   <Search count={count}/>
                   <Basket history={props.history} load={load}/>
                   <Footer/>
               </>
           }
        </>
    );
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        shoppingCardListFunction:function (shopping_list) {
            dispatch({
                type:"SHOPPING_CARD_LIST",
                payload:shopping_list
            })
        },
        shoppingCardListUpdateFunction:function (shopping_list) {
            dispatch({
                type: "UPDATE_SHOPPING_CARD_LIST",
                payload: shopping_list
            })
        },
        shoppingCardCountFunction:function (count) {
            dispatch({
                type:"SHOPPING_CARD_COUNT",
                payload:count
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard) ;