import React from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Content1 from "./Content1";
import Carousel from "./CardCarousel/Carousel";
import TopRanking from "./topRanking";
import Main from "./Main/main";
import Products from "./Products";
import Footer from "./footer";
import Carousel2 from "./CardCarousel/Carousel2";


function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Search/>
            <TopRanking/>
            <Main/>
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

export default Home;