import React, {useEffect, useState} from 'react';
import Navbar from "./navbar";
import Search from "./Search";
import Footer from "./footer";
import Products from "./Products";
import {Link} from "react-router-dom";
import Card2 from "./CardCarousel/Card2";
import {connect} from "react-redux";
import {set_state1} from "../../redux/actions/productAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

import {Spinner} from "reactstrap"
import "../../styles/loader.scss"
import Cookies from "js-cookie";

const Categories = (props) => {

    const [product1, setProduct1] = useState([])
    const [category, setCategory] = useState()
    const [open1, setOpen1] = useState(true)
    const [open, setOpen] = useState(true)
    const [count, setCount] = useState()
    const [isLoadingCart, setIsLoadingCart] = useState(true)


    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.get(API_PATH + "product")
            .then((res)=>{

                setOpen1(false)

                let product=[]
                res.data.forEach((item)=>{
                    if (item.category_id == localStorage.getItem("categoryId")){
                        product = product.concat(item)
                    }
                    setProduct1(product)
                })

            })
        axios.get(API_PATH + "categorys")
            .then((res)=>{
                setOpen(false)
                res.data.forEach((item)=>{
                    if (item.id == localStorage.getItem("categoryId")){
                        setCategory(item.category_uz)
                    }
                })
            })

        axios.post(API_PATH+'cart', {id: localStorage.getItem("user").user_id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            setIsLoadingCart(false)
            setCount(response.data.length)
        })
    }, [])

    // console.log(product1)

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    function aa(id, user_id) {
        window.scrollTo(0, 0)
        localStorage.setItem("id", JSON.stringify({
            id: id,
            user_id: user_id
        }))
        props.product.forEach((item)=>{
            if (id===item.id){
                props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
            }
        })
    }

    return (
        <div>
            {
                open || open1 || isLoadingCart ? <div className="loader">
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
                </div>  : <>
                    <Navbar/>
                    <Search count={count}/>

                    {
                        product1.length > 0 ?  <div className="pt-3" style={{backgroundColor: "#f2f2f2"}}>
                            <div className="container">
                                <h3><b>{category}</b> categoriasi dagi productlar</h3>
                                <div className="row pb-3">

                                    {
                                        product1.map((item, index)=>{
                                            return  <div className="col-2"> <Link
                                                className="text-decoration-none"
                                                to={"/product/view/" + generateUrl(item.product_uz)}
                                                onClick={(id, user_id)=>aa(item.id, item.user_id)}>

                                                <Card2 key={index} name={item.product_uz} price={item.price} amount={item.amount} photo_list={item.photo_list[0]}/>
                                            </Link></div>
                                        })
                                    }

                                </div>
                            </div>
                        </div> : <div className="pt-3" style={{backgroundColor: "#f2f2f2"}}>
                            <div className="container py-5">
                                <h3 className="text-center"><b>{category}</b> categoriasida da productlar yoq</h3>

                            </div>
                        </div>
                    }

                    <Footer/>
                </>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        product: state.product.product,
        oneProduct: state.product.oneProduct,
        productUrl: state.product.productUrl,
        photo_list: state.product.photo_list,
        onePhoto_list: state.product.onePhoto_list,
        htmlString: state.product.htmlString,
        valueList: state.product.valueList,
        detailList: state.product.detailList,
    }
}


export default connect(mapStateToProps, {set_state1})(Categories) ;