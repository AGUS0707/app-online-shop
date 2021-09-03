import React from 'react';
import "../../../styles/main.scss";
import AliceCarouselComponent from "./aliceCarousel";
import Category from "./category";
import MainRightComponent from "./mainRightComponent";
import SubCategory from "./SubCategory";

import {connect} from "react-redux";

function Main(props) {

    // console.log(props)

    return (
        <div className="main">
            <div className="container p-0">
                <div className="mainContent">
                    <div className="mainLeft">
                       <Category/>
                    </div>
                    <div className="mainCenter">
                       <AliceCarouselComponent/>

                        {props.subCategoryOpen ?  <SubCategory/> : ""}


                    </div>
                    <div className="mainRight">
                        <MainRightComponent history={props.history}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        category: state.category.category,
        subCategoryOpen: state.category.subCategoryOpen,
        subCategoryId: state.category.subCategoryId,
    }
}

export default connect(mapStateToProps, null)(Main) ;