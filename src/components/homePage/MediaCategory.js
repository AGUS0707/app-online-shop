import React, {useEffect, useState} from 'react';
import "../../styles/mediaCategory.scss"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {set_state} from "../../redux/actions/categoryAction";
import {set_state1} from "../../redux/actions/productAction";
import SubCategory from "./Main/SubCategory";
import {Collapse} from "reactstrap";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

const MediaCategory = (props) => {
    const height = {height: window.innerHeight.toString() + "px"}
    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    let headCtegory = []
    function filter(id) {
        props.set_state({subCategoryId: id})
        // props.set_state1({category: false})

        props.categoryfilter.forEach((item)=>{
            if (item.id == id) {
                if (!item.checked){
                    let newArray = {
                        ...item,
                        checked: true
                    }

                    headCtegory = headCtegory.concat(newArray)
                    props.set_state({categoryfilter: headCtegory})
                } else {
                    let newArray = {
                        ...item,
                        checked: false
                    }

                    headCtegory = headCtegory.concat(newArray)
                    props.set_state({categoryfilter: headCtegory})
                }
            } else {
                let newArray = {
                    ...item,
                    checked: false
                }

                headCtegory = headCtegory.concat(newArray)
                props.set_state({categoryfilter: headCtegory})
            }
        })

    }



    return (
        <div className={`mediacategory ${props.category ? "mediacategory1" : ""}`}>
            <div className="category">

                <div className="categoryList" style={height}>
                    <div className="d-flex align-items-center justify-content-between px-3 pt-3">
                        <h4 className="mb-0">Kategoriyalar</h4>
                        <span className="icon2 icon2-close" onClick={()=>{props.set_state1({category:false})}}></span>
                    </div>

                   <div className="p-3">
                       {
                           props.categoryfilter.map((item, index)=>{
                               return item.category_id === "0" ? <div className="categoryone">
                                   <div className="d-flex align-items-center justify-content-between bg-light p-2" onClick={(id)=>filter(item.id)}>
                                       <p className="text-dark">{item.category_uz}</p>
                                       <span className={` icon2 ${item.checked ? "icon2-top" : " icon2-bottom"}`}></span>
                                   </div>
                                   <Collapse  isOpen={item.checked}>

                                       <div className="bg">
                                           {
                                               props.categoryfilter.map((item2)=>{
                                                   return item2.category_id == props.subCategoryId ?  <div className="col-6">
                                                       <div className="subCategory mb-2">
                                                           <p className="mb-2 text-dark"><b>{item2.category_uz}</b></p>

                                                           {
                                                               props.categoryfilter.map((item1)=>{
                                                                   return item2.id == item1.category_id ? <Link className="text-decoration-none" to={"/category/" + generateUrl(item1.category_uz)} onClick={()=>{
                                                                       localStorage.setItem("categoryId", item1.id)
                                                                       props.set_state({subCategoryOpen: false})

                                                                       props.categoryfilter.forEach((item)=>{
                                                                           let newArray = {
                                                                               ...item,
                                                                               checked: false
                                                                           }

                                                                           headCtegory = headCtegory.concat(newArray)
                                                                           props.set_state({categoryfilter: headCtegory})
                                                                       })

                                                                       axios.get(API_PATH + "product")
                                                                           .then((res)=>{
                                                                               props.set_state1({category: false})

                                                                               let product=[]
                                                                               res.data.forEach((item5)=>{
                                                                                   if (item5.category_id == item1.id){
                                                                                       product = product.concat(item5)
                                                                                   }
                                                                                   props.set_state({product1media: product})
                                                                               })

                                                                           })

                                                                       axios.get(API_PATH + "categorys")
                                                                           .then((res)=>{
                                                                               props.set_state1({category: false})
                                                                               res.data.forEach((item6)=>{
                                                                                   if (item6.id == item1.id){
                                                                                       props.set_state({categorymedia: item6.category_uz})
                                                                                   }
                                                                               })
                                                                           })


                                                                   }}><p className="text-dark">{item1.category_uz}</p></Link>: ""
                                                               })
                                                           }

                                                       </div>
                                                   </div> : ""
                                               })
                                           }
                                       </div>

                                   </Collapse>
                               </div> : ""
                           })
                       }
                   </div>

                </div>

            </div>



        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        category: state.product.category,
        category1: state.category.category,
        subCategoryOpen: state.category.subCategoryOpen,
        subCategoryId: state.category.subCategoryId,
        subCategory: state.category.subCategory,
        category_name: state.category.category_name,
        categoryfilter: state.category.categoryfilter,
        categoryId: state.category.categoryId,
        product1media: state.category.product1media,
        categorymedia: state.category.categorymedia,

    }
}

export default connect(mapStateToProps, {set_state, set_state1})(MediaCategory) ;