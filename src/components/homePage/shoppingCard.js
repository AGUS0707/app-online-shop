import React, {useEffect, useState} from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Footer from "./footer";
import Basket from "./basket";
import "../../styles/loader.scss"
import axios from "axios";
import Cookies from "js-cookie";
import {API_PATH} from "../../tools/constants";
import HomePageFixed from "./homePageFixed";
import MediaCategory from "./MediaCategory";
import {connect} from "react-redux";
import {set_state1} from "../../redux/actions/productAction";


function ShoppingCard(props) {

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(()=> {
        props.set_state1({category: false})
        if (user !== null){
            axios.post(API_PATH + 'cart', {id: user.id}, {headers: {"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response) => {
                setCount(response.data.length);
            })
        }
    },[])

    const [count, setCount] = useState(0);

    return (
        <>
                   <Navbar/>
                   <Search count={count} history={props.history}/>
                   <Basket/>
                   <Footer/>
                   {/*<MediaCategory/>*/}
                   <HomePageFixed count={count}/>
           }
        </>
    );

}

const mapStateToProps = (state) =>{
    return {
        category: state.product.category
    }
}


export default connect(mapStateToProps, {set_state1})(ShoppingCard) ;