import React, {useEffect, useState} from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Footer from "./footer";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Card2 from "./CardCarousel/Card2";
import {set_state1} from "../../redux/actions/productAction";
import HomePageFixed from "./homePageFixed";
import "../../styles/mediaproducts.scss"
import MediaCategory from "./MediaCategory";
import Modal from "./Main/modal";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";

function SearchDatabe(props) {

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const [sign, setSign]=React.useState(true);
    const [modal, setModal]=useState(false);

    function aa(id, user_id) {
        window.scrollTo(0, 0);
        localStorage.setItem("id", JSON.stringify({
            id: id,
            user_id: user_id
        }));
        props.searchProductListReducer.searchProductList.forEach((item)=>{
            if (id===item.id){
                props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
            }
        })
    }

    const openModal=()=>{
        setModal(true)
    };
    const registrClick=()=>{
        openModal();
        setSign(false)
    };
    return (
        <div>
            <Navbar/>
            <Search history={props.history}/>
            <>
                {props.searchProductListReducer.searchProductList.length>0? <div style={{backgroundColor:"#f2f2f2"}} className="pt-4">
                    <div className="container">
                        <div className="row pb-3">
                            {
                                props.searchProductListReducer.searchProductList.map((item, index)=>{
                                    return <div className="col-2 searchdatabe"> <Link
                                        className="text-decoration-none"
                                        to={"/product/view/" + generateUrl(item.product_uz)}
                                        onClick={(id, user_id)=>aa(item.id, item.user_id)}>
                                        <Card2 key={index} name={item.product_uz} price={item.price} amount={item.amount} photo_list={item.photo_list[0]}/>
                                    </Link></div>
                                })
                            }
                        </div>
                    </div>
                </div>:<div className="notProduct pt-5 pb-5" style={{borderTop:"1px solid #f1f1f1", borderBottom:"1px solid #f1f1f1"}}>
                    <div className="notProductImg d-flex justify-content-center">
                        <img className="media-img" src="https://olcha.uz/_nuxt/img/products-notfound.31b1733.png" alt="no iamge"/>
                    </div>
                    <h4 className="text-center">Bu parametrlar uchun hech qanday mahsulot topilmadi</h4>
                </div>}
            </>
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
            <Footer/>
        </div>
    );
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {set_state1}) (SearchDatabe);