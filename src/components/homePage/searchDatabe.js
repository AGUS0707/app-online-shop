import React, {useEffect, useState} from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Footer from "./footer";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Card2 from "./CardCarousel/Card2";
import {set_state1} from "../../redux/actions/productAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom"
import HomePageFixed from "./homePageFixed";
import "../../styles/mediaproducts.scss"

function SearchDatabe(props) {

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const [count, setCount] = useState(0);
    let user = JSON.parse(localStorage.getItem("user"))
    let history = useHistory();


    useEffect(()=>{
        window.scrollTo(0, 0);
        if (window.localStorage.length === 0){
            history.push("/")
        }

        if (user !== null){
            axios.post(API_PATH+'cart', {id: user.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
                setCount(response.data.length)
            }).catch(()=>{
            })
        }

    },[])

    function aa(id, user_id) {
        window.scrollTo(0, 0);
        localStorage.setItem("id", JSON.stringify({
            id: id,
            user_id: user_id
        }));
        props.productListSearchReducer.productList.forEach((item)=>{
            if (id===item.id){
                props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
            }
        })
    }
    return (
        <div>
            <Navbar/>
            <Search count={count} history={props.history}/>
            <>
                {props.productListSearchReducer.productList.length>0? <div style={{backgroundColor:"#f2f2f2"}} className="pt-4">
                    <div className="container">
                        <div className="row pb-3">
                            {
                                props.productListSearchReducer.productList.map((item, index)=>{
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
            <HomePageFixed count={count}/>
            <Footer/>
        </div>
    );
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {set_state1}) (SearchDatabe);