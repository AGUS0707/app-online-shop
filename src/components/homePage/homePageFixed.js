import React, {useEffect, useState} from 'react';
import "../../styles/homepagefixed.scss"
import {Link} from "react-router-dom";
import Modal from "./Main/modal";
import {connect} from "react-redux";
import {set_state1} from "../../redux/actions/productAction";
import {set_state} from "../../redux/actions/categoryAction";
import MediaCategory from "./MediaCategory";
import SubCategory from "./Main/SubCategory";
import {getCategory} from "../../redux/actions/categoryAction";
import {toast} from "react-toastify";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";


const HomePageFixed = (props) => {
    const [sign, setSign]=React.useState(true);
    const [modal, setModal]=useState(false);
    let headCtegory = [];
    let user = JSON.parse(localStorage.getItem("user"))
    const openModal=()=>{
        setModal(true)
    };
    const registrClick=()=>{
        openModal();
        setSign(false)
    };
    useEffect(()=>{
        // console.log(typeof localStorage.getItem("boolean"))
        props.set_state1({category: false})
        if(user !== null){
            axios.post(API_PATH+'cart', {id: user.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
                props.set_state({countCart: response.data.length})
            })
        }
       if (window.location.pathname !== "/"){
           axios.get( API_PATH + "categorys")
               .then((res) => {
                   props.set_state({category: res.data})
                   props.set_state({setIsLoadingCat: false})
                   res.data.forEach((item)=>{

                       let newArray = {
                           ...item,
                           checked: false
                       }

                       headCtegory = headCtegory.concat(newArray)
                       props.set_state({categoryfilter: headCtegory})
                   })

               })
       } else {
           props.category.category.forEach((item)=>{

               let newArray = {
                   ...item,
                   checked: false
               }

               headCtegory = headCtegory.concat(newArray)
               props.set_state({categoryfilter: headCtegory})
           })
       }


    },[])

    return (
        <div className="homepagefixed">
            <div className="container position-relative">
                <div className="d-flex align-items-center justify-content-between">
                   <Link to="/" className="text-decoration-none">
                       <div className="home">

                           <div className="d-flex align-items-center justify-content-center">
                               <span className="icon1 icon-home11"></span>
                           </div>
                           <p className="text-center">Bosh sahifa</p>

                       </div>
                   </Link>

                    <div className="home" onClick={()=>{props.set_state1({category: !props.product.category})}}>

                        <div className="d-flex align-items-center justify-content-center">
                            <span className="icon1 icon-category11"></span>
                        </div>
                        <p className="text-center">Category</p>



                    </div>

                    {
                        props.product.category ? <MediaCategory/> : ""

                    }

                    {/*{ props.category.subCategoryOpen ? <SubCategory/> : ""}*/}

                    <Link to="/home/shopping" className="text-decoration-none">
                        <div className="home">

                            <div className="d-flex align-items-center justify-content-center korzinka">
                                <span className="icon1 icon-shopping-cart11"></span>
                                <div className="count"><p className="text-danger">{props.category.countCart}</p></div>
                            </div>
                            <p className="text-center">Savatcha</p>

                        </div>
                    </Link>

                    {
                        props.userCheckReducer.userCheck ? <Link to="/home/profile" className="text-decoration-none">
                            <div className="home">

                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="icon1 icon-profile11"></span>
                                </div>
                                <p className="text-center">Profile</p>

                            </div>
                        </Link> : <div className="home" onClick={registrClick}>

                            <div className="d-flex align-items-center justify-content-center">
                                <span className="icon1 icon-register11"></span>
                            </div>
                            <p className="text-center">Register</p>

                        </div>
                    }



                </div>
            </div>
            <Modal history={props.history} setSign={setSign} sign={sign} modal={modal} setModal={setModal}/>
        </div>
    );
};

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {set_state1, getCategory, set_state})(HomePageFixed) ;