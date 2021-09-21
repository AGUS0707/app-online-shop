    import React, {useEffect, useState} from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Content1 from "./Content1";
import Carousel from "./CardCarousel/Carousel";
import TopRanking from "./topRanking";
import Main from "./Main/main";
import Products from "./Products";
import Footer from "./footer";
import Carousel2 from "./CardCarousel/Carousel2";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import "../../styles/loader.scss"

import {connect} from "react-redux";

import {set_state1} from "../../redux/actions/productAction";
import {getCategory} from "../../redux/actions/categoryAction";

import {Spinner} from "reactstrap"
    import Cookies from "js-cookie";


function Home(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingCart, setIsLoadingCart] = useState(true);
    const [count, setCount] = useState();


    useEffect(()=>{
        axios.get(API_PATH + "product")
            .then((res)=>{
                // console.log(res.data)
                props.set_state1({product: res.data})
                setIsLoading(false);

            })
        props.getCategory()

        axios.post(API_PATH+'cart', {id: localStorage.getItem("user").user_id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            setIsLoadingCart(false)
            setCount(response.data.length)
        })


    }, [])

    return (
        <div className="home">


            {isLoading || props.setIsLoadingCat || isLoadingCart ?
                <div className="loader">
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
                </div> : <>
                    <Navbar/>
                    <Search count={count}/>
                    <TopRanking/>
                    <Main history={props.history}/>
                    <div style={{backgroundColor: "#f2f2f2"}}>
                        <Content1/>
                        <Carousel/>
                        <Carousel2/>
                        <Products/>
                        <Footer/>
                    </div>
                </>
            }



        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        product: state.product.product,
        setIsLoadingCat: state.category.setIsLoadingCat
    }
}

export default connect(mapStateToProps, {set_state1, getCategory})(Home) ;