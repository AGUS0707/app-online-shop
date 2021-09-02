import React from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {set_state} from "../../../redux/actions/categoryAction";

const SubCategory = (props) => {
    console.log(props.category)

    return (
        <div className="sub-category">

          <div className="position-relative">
              <div className="closeDiv" onClick={()=>props.set_state({subCategoryOpen: false, subCategoryId: ""})}><span className="icon icon-close"></span></div>

              <div className="row">
                  {
                      props.category.map((item)=>{
                          return item.category_id == props.subCategoryId ?  <div className="col-4">
                              <div className="subCategory mb-4">
                                  <p className="mb-3"><b>{item.category_uz}</b></p>

                                  {
                                      props.category.map((item1)=>{
                                          return item.id == item1.category_id ? <Link to="/"><p>{item1.category_uz}</p></Link> : ""
                                      })
                                  }

                              </div>
                          </div> : ""
                      })
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
    }
}

export default connect(mapStateToProps, {set_state})(SubCategory) ;