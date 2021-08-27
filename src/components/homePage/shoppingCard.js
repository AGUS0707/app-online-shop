import React from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Footer from "./footer";
import Basket from "./basket";

function ShoppingCard(props) {
    return (
        <>
            <Navbar/>
            <Search/>
            <Basket/>
            <Footer/>
        </>
    );
}

export default ShoppingCard;