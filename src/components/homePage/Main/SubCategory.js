import React from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {set_state} from "../../../redux/actions/categoryAction";
import {set_state1} from "../../../redux/actions/productAction";
import axios from "axios";
import {API_PATH} from "../../../tools/constants";

const SubCategory = (props) => {
    // console.log(props.category)

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');


    return (
        <div className="sub-category">

          <div className="position-relative">
              <div className="closeDiv" onClick={()=>{
                  props.set_state({subCategoryOpen: false, subCategoryId: ""})
                  props.set_state1({category: true})
              }}><span className="icon icon-close"></span></div>

              <div className="row">
                  <div className="col-12">
                      <p className="text-center text-danger">{props.category_name}</p>
                  </div>
                 {
                     window.innerWidth > 576 ? <>
                         {
                             props.category.map((item)=>{
                                 return item.category_id == props.subCategoryId ?  <div className="col-4">
                                     <div className="subCategory mb-4">
                                         <p className="mb-3"><b>{item.category_uz}</b></p>

                                         {
                                             props.category.map((item1)=>{
                                                 return item.id == item1.category_id ? <Link to={"/category/" + generateUrl(item1.category_uz)} onClick={()=>{
                                                     localStorage.setItem("categoryId", item1.id)

                                                 }}><p>{item1.category_uz}</p></Link>: ""
                                             })
                                         }

                                     </div>
                                 </div> : ""
                             })
                         }
                     </> : ""
                 }

                  {
                      window .innerWidth < 576 ? <>
                          {
                              props.category.map((item)=>{
                                  return item.category_id == props.subCategoryId ?  <div className="col-6">
                                      <div className="subCategory mb-4">
                                          <p className="mb-3"><b>{item.category_uz}</b></p>

                                          {
                                              props.category.map((item1)=>{
                                                  return item.id == item1.category_id ? <Link to={"/category/" + generateUrl(item1.category_uz)} onClick={()=>{
                                                      localStorage.setItem("categoryId", item1.id)
                                                      props.set_state({categoryId: localStorage.getItem("categoryId")})
                                                      props.set_state({subCategoryOpen: false})

                                                      // axios.get(API_PATH + "product")
                                                      //     .then((res)=>{
                                                      //
                                                      //         let product=[]
                                                      //         res.data.forEac
                                                      //         h((item3)=>{
                                                      //             if (item3.category_id == item1.id){
                                                      //                 product = product.concat(item)
                                                      //             }
                                                      //             // setProduct1(product)
                                                      //             props.set_state({product1media: product})
                                                      //         })
                                                      //
                                                      //     })
                                                      // axios.get(API_PATH + "categorys")
                                                      //     .then((res)=>{
                                                      //         res.data.forEach((item2)=>{
                                                      //             if (item2.id == item1.id){
                                                      //                 // setCategory(item.category_uz)
                                                      //                 props.set_state({categorymedia: item.category_uz})
                                                      //             }
                                                      //         })
                                                      //     })


                                                  }}><p>{item1.category_uz}</p></Link>: ""
                                              })
                                          }

                                      </div>
                                  </div> : ""
                              })
                          }
                      </> : ""
                  }

              </div>
          </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        category: state.category.category,
        subCategoryId: state.category.subCategoryId,
        subCategory: state.category.subCategory,
        subCategoryOpen: state.category.subCategoryOpen,
        category_name: state.category.category_name,
        product1media: state.category.product1media,
    }
}

export default connect(mapStateToProps, {set_state, set_state1})(SubCategory) ;