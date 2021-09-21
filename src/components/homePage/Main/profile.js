import React, {useEffect, useState} from 'react';
import Navbar from "../navbar";
import Search from "../Search";
import ProfileContent from "./profileContent";
import Footer from "../footer";

import {Spinner} from "reactstrap";
import axios from "axios";
import {API_PATH} from "../../../tools/constants";
import Cookies from "js-cookie";


function Profile(props) {

    const [count, setCount] = useState()
    const [isLoadingCart, setIsLoadingCart] = useState(true)

    useEffect(()=>{
        axios.post(API_PATH+'cart', {id: localStorage.getItem("user").user_id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            setIsLoadingCart(false)
            setCount(response.data.length)
        })
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
                </>
            }
        </div>
    );
}

export default Profile;