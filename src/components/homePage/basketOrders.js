import React, {useEffect, useState} from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Footer from "./footer";
import BasketOrdersComponent from "./basketOrdersComponent";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";
import HomePageFixed from "./homePageFixed";

function BasketOrders(props) {

    const [count, setCount] = useState(0);
    let user = JSON.parse(localStorage.getItem("user"))
    const [modalForm, setModalForm] = useState(false);
    const [modalList, setModalList] = useState(false);


    useEffect(()=>{

        axios.post(API_PATH+'cart', {id: user.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            setCount(response.data.length)
        }).catch(()=>{
        })

    },[])
    return (
        <>
          <Navbar/>


            {
                window.innerWidth < 576 ? !modalForm && !modalList ? <Search count={count} history={props.history}/> : "" : <Search count={count} history={props.history}/>
            }

          <BasketOrdersComponent modalForm={modalForm} setModalForm={setModalForm} modalList={modalList} setModalList={setModalList}/>
          <Footer/>

            {
                !modalForm && !modalList ? <HomePageFixed count={count}/> : ""
            }
        </>
    );
}

export default BasketOrders;