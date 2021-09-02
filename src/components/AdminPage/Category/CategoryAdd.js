import React, {useEffect, useState} from 'react';
import Category from "./Category";

import {AvField, AvForm} from "availity-reactstrap-validation"

import {connect} from "react-redux";
import {getCategory, saveCategory, set_state} from "../../../redux/actions/categoryAction";

const CategoryAdd = (props) => {

    const filterList = (e) => {
        props.set_state({value: e.target.value})
        props.set_state({submenu1: !props.submenu1})
    }

    useEffect(()=>{
        props.getCategory()
    }, [])


    return (
        <Category history={props.history}>
            <AvForm onSubmit={(event, errors, values) => {props.saveCategory(event, errors, values, props.history)}}>

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

                        <AvField type="text" label="category-uz" name="category_uz" placeholder="Category-uz" className="form-control w-100" required/>
                        <AvField type="text" label="category-ru" name="category_ru" placeholder="Category-ru" className="form-control w-100" required/>
                        <AvField type="text" label="index" name="index" placeholder="Index" className="form-control w-100" required/>
                        <AvField type="select" label="is_active" name="is_active" placeholder="Active" className="form-control w-100" required>
                            <option>Choose</option>
                            <option value="1">Active</option>
                            <option value="0">NoActive</option>
                        </AvField>


                        <AvField type="select" label="Which category" name="category_id" onChange={(e)=>
                        {
                            e.target.value !== "0" ? props.set_state({submenu: true}) : props.set_state({submenu: false})
                            console.log(e.target.value)
                        }
                        }>
                            <option>Choose</option>
                            <option value="0">Bosh category</option>
                            <option>Sub category</option>
                        </AvField>
                        {
                            props.submenu ? <AvField type="select" label="Sub Category" name="category_id" onChange={filterList} className="form-control w-100">
                                <option>Tanlang</option>
                                {
                                    props.category.map((item, index) => {

                                        if (item.category_id === "0"){
                                            return <option value={item.id}>{item.category_uz}</option>
                                        }

                                    })
                                }
                            </AvField> : "" }
                        {props.submenu1 ? <input type="checkbox" id="5" onClick={() => props.set_state({submenu2: !props.submenu2})}/> : ""}
                        {props.submenu1 ? <label htmlFor="5">Sub sub category</label> : ""}
                        { props.submenu2 ? <AvField type="select" label="Sub sub Category" name="category_id" className="form-control w-100">
                            <option>Tanlang</option>
                            {
                                props.category.map((item, index) => {

                                    if (item.category_id === props.value){
                                        return <option value={item.id}>{item.category_uz}</option>
                                    }
                                })
                            }
                        </AvField> : ""}

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
        value: state.category.value
    }
};

export default connect(mapStateToProps, {set_state, saveCategory, getCategory})(CategoryAdd);