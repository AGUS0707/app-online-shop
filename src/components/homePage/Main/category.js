import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {connect} from "react-redux";

import {getCategory, set_state} from "../../../redux/actions/categoryAction";

function Category(props) {

    const [subCategory, setSubCategory] = useState([])

    useEffect(()=>{
        props.getCategory()

    },[])



    return (
        <div className="category">
            <div className="categoryContent">
                <div className="categoryIcon">
                    <img src="images/options-lines.svg" alt="no image"/>
                </div>
                <Link to={"/"}>Categories</Link>
            </div>
            <ul className="categoryList">
                {
                    props.category.map((item, index)=>{

                        return item.category_id === "0" ?  <li className={`categoryListItem ${props.subCategoryId === item.id ? "active" : ""}`}>
                            <div className="categoryListItemLink" onClick={()=>
                            {
                                props.set_state({subCategoryOpen: true, subCategoryId: item.id })

                            }
                            }>{item.category_uz}</div>
                        </li> : ""

                    })
                }

                </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

        category: state.category.category,
        subCategoryOpen: state.category.subCategoryOpen,
        subCategoryId: state.category.subCategoryId,
        subCategory: state.category.subCategory

    }
};


export default connect(mapStateToProps, {getCategory, set_state})(Category) ;