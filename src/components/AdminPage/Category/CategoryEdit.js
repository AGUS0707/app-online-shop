import React, {useEffect} from 'react';
import Category from "./Category";

import {AvForm, AvField} from "availity-reactstrap-validation"

import {connect} from "react-redux";

import {getCategory, saveUpCategory, set_state} from "../../../redux/actions/categoryAction";

const CategoryEdit = (props) => {

    const filterList = (e) => {
        props.set_state({value: e.target.value})
        props.set_state({submenu1: !props.submenu1})
    }


    return (
        <Category history={props.history}>
            <AvForm onSubmit={(events, errors, values)=>{props.saveUpCategory(events, errors, values, props.history)}} model={props.selectedItem}>

            <div className="row">
                <div className="col-10 offset-1">
                    <div className="d-flex align-items-center justify-content-between brand">
                        <div>Category</div>
                        <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-10 offset-1">
                        <AvField type="text" label="Category-uz" name="category_uz" placeholder="Category" className="form-control w-100" required/>
                        <AvField type="text" label="Categor-ru" name="category_ru" placeholder="Category" className="form-control w-100" required/>
                        <AvField type="text" label="Index" name="index" placeholder="Index" className="form-control w-100" required/>

                        <AvField className="d-none" type="select" value={props.selectedItem.category_id} name="category_id">
                            <option value={props.selectedItem.category_id}>Bosh category</option>
                        </AvField>

                </div>
            </div>

            </AvForm>
        </Category>
    );
};

const mapStateToProps = (state) => {
    return {
        category: state.category.category,
        submenu: state.category.submenu,
        submenu1: state.category.submenu1,
        submenu2: state.category.submenu2,
        value: state.category.value,
        selectedItem: state.category.selectedItem
    }
};

export default connect(mapStateToProps, {set_state, saveUpCategory, getCategory})(CategoryEdit);