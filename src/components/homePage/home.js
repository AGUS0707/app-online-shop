    import React, {useEffect} from 'react';
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

import {connect} from "react-redux";

import {set_state1} from "../../redux/actions/productAction";

function Home(props) {

    // console.log(props)

    useEffect(()=>{
        axios.get(API_PATH + "product")
            .then((res)=>{
                // console.log(res.data)
                props.set_state1({product: res.data})
            })
    }, [])

    return (
        <div className="home">
            <Navbar/>
            <Search/>
            <TopRanking/>
            <Main history={props.history}/>
           <div style={{backgroundColor: "#f2f2f2"}}>
               <Content1/>
               <Carousel/>
               <Carousel2/>
               <Products/>
               <Footer/>
           </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        product: state.product.product
    }
}

export default connect(mapStateToProps, {set_state1})(Home) ;