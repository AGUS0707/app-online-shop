import React, {useEffect, useState} from 'react';
import Navbar from "../homePage/navbar";
import Search from "../homePage/Search";
import ProfileContent from "./profileContent";
import Footer from "../homePage/footer";

import {Spinner} from "reactstrap";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";
import HomePageFixed from "../homePage/homePageFixed";

import {connect} from "react-redux";
import {set_state} from "../../redux/actions/categoryAction";


function Profile(props) {

    const [count, setCount] = useState(0)
    const [isLoadingCart, setIsLoadingCart] = useState(true)

    let user = JSON.parse(localStorage.getItem("user"))

    useEffect(()=>{

        if (window.localStorage.length === 0){
            props.history.push("/")
        }

        if (user !== null){
            axios.post(API_PATH+'cart', {id: user.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
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
        <div className="profile">
            {
                isLoadingCart ? <div className="loader">
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
                </div>  : <>
                    <Navbar/>
                    <Search count={count}/>
                    <ProfileContent/>
                    <Footer/>
                    <HomePageFixed count={count}/>
                </>
            }
        </div>
    );
}

export default connect(null, {set_state})(Profile) ;