import React, {useEffect} from 'react';
import Navbar from "../homePage/navbar";
import Search from "../homePage/Search";
import ProductMoreMain from "./ProductMoreMain";
import "../../styles/productmoree.scss"
import GlobalLaptop from "./GlobalLaptop";

const Productmore = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <Navbar/>
            <Search/>
            <ProductMoreMain/>
            <GlobalLaptop/>
        </div>
    );
};

export default Productmore;