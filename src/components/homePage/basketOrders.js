import React from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Footer from "./footer";
import BasketOrdersComponent from "./basketOrdersComponent";

function BasketOrders(props) {
    return (
        <>
          <Navbar/>
          <Search/>
          <BasketOrdersComponent/>
          <Footer/>
        </>
    );
}

export default BasketOrders;