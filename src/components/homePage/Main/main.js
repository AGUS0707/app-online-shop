import React from 'react';
import "../../../styles/main.scss";
import AliceCarouselComponent from "./aliceCarousel";
import Category from "./category";
import MainRightComponent from "./mainRightComponent";

function Main() {

    return (
        <div className="main">
            <div className="container p-0">
                <div className="mainContent">
                    <div className="mainLeft">
                       <Category/>
                    </div>
                    <div className="mainCenter">
                       <AliceCarouselComponent/>
                    </div>
                    <div className="mainRight">
                        <MainRightComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;