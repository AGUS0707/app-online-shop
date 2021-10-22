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
import HomePageFixed from "./homePageFixed";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import "../../styles/loader.scss"

import {connect} from "react-redux";

import {set_state1} from "../../redux/actions/productAction";
import {set_state} from "../../redux/actions/categoryAction";
    import {getCategory} from "../../redux/actions/categoryAction";

import {Spinner} from "reactstrap"
    import Cookies from "js-cookie";
    import MediaCategory from "./MediaCategory";



function Home(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingCart, setIsLoadingCart] = useState(true);
    const [count, setCount] = useState(0);

    let user = JSON.parse(localStorage.getItem("user"))

    // console.log(props)


    useEffect(()=>{

        axios.post(API_PATH + "orderuser", {id: 30}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                console.log(res.data)
            })


        props.set_state({subCategoryOpen: false, subCategoryId: ""})
        props.set_state1({category: false})
        localStorage.setItem("searchProduct", "")
        axios.get(API_PATH + "product")
            .then((res)=>{
                // console.log(res.data)
                props.set_state1({product: res.data})
                setIsLoading(false);

            })
        props.getCategory()

       if(user !== null){
           axios.post(API_PATH+'cart', {id: user.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
               setIsLoadingCart(false)
               // setCount(response.data.length)
               props.set_state({countCart: response.data.length})
           }).catch(()=>{
               setIsLoadingCart(false)
           })
       } else {
           setIsLoadingCart(false)
       }


    }, [])

    return (
        <div className={`home ${props.category ? "home1" : ""}`}>


            {isLoading || props.setIsLoadingCat || isLoadingCart ?
                <div className="loader">
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
                </div> : <>
                    <Navbar/>
                    <Search count={props.countCart} history={props.history}/>
                    <TopRanking/>
                    <Main history={props.history}/>
                    {/*<MediaCategory/>*/}
                    <div style={{backgroundColor: "#f2f2f2"}}>
                        <Content1/>
                        <Carousel/>
                        {
                            props.product.length > 6 ? <Carousel2/> : ""
                        }
                        <Products/>
                        <Footer/>
                        <HomePageFixed count={props.countCart}/>


                    </div>


                </>
            }



        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        product: state.product.product,
        setIsLoadingCat: state.category.setIsLoadingCat,
        category: state.product.category,
        countCart: state.category.countCart,
    }
}

export default connect(mapStateToProps, {set_state1, getCategory, set_state})(Home) ;