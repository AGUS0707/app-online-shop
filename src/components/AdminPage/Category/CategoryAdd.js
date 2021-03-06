import React, {useEffect, useState} from 'react';
import Category from "./Category";

import {AvField, AvForm} from "availity-reactstrap-validation"

import {connect} from "react-redux";
import {getCategory, saveCategory, set_state} from "../../../redux/actions/categoryAction";
import axios from "axios";
import {API_PATH} from "../../../tools/constants";
import Cookies from "js-cookie";
import {toast} from "react-toastify";

const CategoryAdd = (props) => {


    const [sub, setSub]=useState(false)
    const [subsub, setSubsub]=useState(false)
    const [category, setCategory] = useState({
        category_uz: "",
        category_ru: "",
        index: "",
        category_id: "",
        is_active: "",
    })
    const [value, setValue] = useState()
    const [value1, setValue1] = useState()

    const filterList = (e) => {
        props.set_state({value: e.target.value})
        props.set_state({submenu1: !props.submenu1})
    }
    let user=props.userReducer;

    useEffect(()=>{
        if (user.role_id === "1"){
            props.getCategory()
        }
    }, [])

    function handleInputChange(e) {

        setValue(e.target.value)

        if (!sub){
            // let newCategory2={
            //     ...category,
            //     category_id: 0
            // };
            // setCategory(newCategory2);


            let newCategory={
                ...category,
                [e.target.name]:e.target.value,
                category_id: 0
            };
            setCategory(newCategory);


        } else
        {
            let newCategory1={
                ...category,
                category_id:e.target.value,

            };
            setValue1(e.target.value)
            setCategory(newCategory1);
        }

    }

    function handleInputChange2(e) {
        let newCategory={
            ...category,
            category_id: e.target.value
        };
        setCategory(newCategory);
    }

    function handleInputChangeCheck(e){

        if (e.target.checked){

            setSub(true)

        } else
        {
            setSub(false)
            setSubsub(false)

            let newCategory={
                ...category,
                [e.target.name]:e.target.value,
                category_id: 0
            };
            setCategory(newCategory);
        }

    }

    function handleInputChangeCheck2 (e) {
        if (e.target.checked){
            setSubsub(true)
        } else {
            setSubsub(false)
            let newCategory={
                ...category,
                category_id: value
            };
            setCategory(newCategory);
        }
    }

    console.log(category)

    function addCategory() {
       if (category.category_uz.length > 0 && category.category_ru.length>0 && category.index.length>0 && category.category_id.length>0){
           axios.post(API_PATH + "crcategory", category, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
               .then((res) => {
                   toast.success("qoshildi")
                   props.history.push("/admin/category")
               })
               .catch((res) => {
                   toast.error("Ma'lumotlar saqlanmadi")
               })
       } else {
           toast.error("Ma'lumotlarni to'ldiring")
       }
    }

    return (
        <Category history={props.history}>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Category</div>
                            <div className="categoryadd"><button type="submit" onClick={addCategory} className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">

                        <label htmlFor="1" className="mt-3">category-uz</label>
                        <input type="text" id="1" className="form-control w-100"  name="category_uz" onChange={handleInputChange} placeholder="Category-uz" required/>

                        <label htmlFor="2" className="mt-3">category-ru</label>
                        <input type="text" id="2" className="form-control w-100"  name="category_ru" onChange={handleInputChange} placeholder="Category-ru" required/>

                        <label htmlFor="3" className="mt-3">index</label>
                        <input type="text" id="3" className="form-control w-100"  name="index" onChange={handleInputChange} placeholder="Index" required/>

                        <label htmlFor="4" className="mt-3">is_active</label>
                        <select id="4" className="form-control w-100"  name="is_active" onChange={handleInputChange} placeholder="Is_active" required>
                            <option>Choose</option>
                            <option value="1">Active</option>
                            <option value="0">NoActive</option>
                        </select>


                        <input type="checkbox" id="5" onChange={handleInputChangeCheck}/>
                        <label htmlFor="5" className="mt-3 ml-2">Sub category</label>

                       <div>
                           {
                               sub ? <>
                                   <label htmlFor="6" className="mt-3">Sub Category</label>
                                   <select id="6" className="form-control w-100"  name="category_id" onChange={handleInputChange} required>
                                       <option>Choose</option>
                                       {
                                           props.category.map((item)=>{
                                               return item.category_id == 0 ? <option value={item.id}>{item.category_uz}</option> : ""
                                           })
                                       }
                                   </select>
                                   <input type="checkbox" id="7" onChange={handleInputChangeCheck2} required/>
                                   <label htmlFor="7" className="mt-3 ml-2">Sub sub category</label>

                                   <div>
                                       {
                                           subsub ? <>
                                               <label htmlFor="8" className="mt-3">Sub sub Category</label>
                                               <select id="8" className="form-control w-100"  name="category_id" onChange={handleInputChange2} required>
                                                   <option>Choose</option>
                                                   {
                                                       props.category.map((item)=>{
                                                           return item.category_id === value ? <option value={item.id}>{item.category_uz}</option> : ""
                                                       })
                                                   }
                                               </select>
                                           </> : ""
                                       }
                                   </div>

                               </> : ""
                           }

                       </div>



                    </div>
                </div>

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
        userReducer: state.userReducer.userObject
    }
};

export default connect(mapStateToProps, {set_state, saveCategory, getCategory})(CategoryAdd);