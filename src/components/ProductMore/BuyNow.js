import React, {useEffect, useState} from 'react';
import Footer from "../homePage/footer";
import "../../styles/buynow.scss"
import img from "../../images/users.png"
import {connect} from "react-redux";
import {set_state1} from "../../redux/actions/productAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {Link} from "react-router-dom";

import parse from "html-react-parser"
import {getCountry} from "../../redux/actions/addresAction";
import ShippingAddressForm from "./shippingAddressForm";
import AddAddress from "./AddAddress";


const BuyNow = (props) => {

    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.get(API_PATH + "product")
            .then((res)=>{
                props.set_state1({product: res.data})
            });
        props.getCountry()

        axios.post(API_PATH + "address", {id: data.id})
            .then((res)=>{
                setAddress(res.data)
            })

    }, [])



    props.product.filter((item)=>{
        if (item.id == props.history.location.pathname.slice(props.history.location.pathname.search(":") + 1, props.history.location.pathname.length)) {
            // console.log(props.history.location.pathname.slice(props.history.location.pathname.search(":") + 1, props.history.location.pathname.length))
            return props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz})
        }
    })


    let data = JSON.parse(localStorage.getItem('user'))
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(9664.34)
    const [address, setAddress] = useState([])
    const [address1, setAddress1] = useState({})
    let defaultprice = 9664.34
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [addres, setaddres] = useState(false)

    // console.log(address)
    // console.log(address1.length)

    return (
        <div className="buynow bg-light">
            <div className="bg-white py-3">
                <div className="container">
                    <Link to="/" className="text-decoration-none"><h3>LOGOTIP</h3></Link>
                </div>
            </div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-8">

                        <div className="bg-white p-3 rounded">
                            <h4>Shipping Information</h4>

                            {/*{address.map((item)=>{*/}
                            {/*    return <p>{item.id}</p>*/}
                            {/*})}*/}

                            <div className="d-flex align-items-center justify-content-between">

                                <div>
                                    {
                                        address1.name !==undefined ? <div>
                                            <p className="mb-1" style={{fontWeight: "bold"}}>{address1.name}, {address1.phone}</p>
                                            <p>{address1.street}asasa</p>
                                            <p>{address1.region_uz}, {address1.district_uz}, {address1.index}</p>
                                        </div> : address.length === 1 ? address.map((item)=>{
                                            return <div>
                                                <p className="mb-1" style={{fontWeight: "bold"}}>{item.name}, {item.phone}</p>
                                                <p>{item.street}</p>
                                                <p>{item.region_uz}, {item.district_uz}, {item.index}</p>
                                            </div>
                                        }) : address.length > 1 ? address.map((item, index)=>{
                                            return index === address.length-1 ? <div>
                                                <p className="mb-1" style={{fontWeight: "bold"}}>{item.name}, {item.phone}</p>
                                                <p>{item.street}</p>
                                                <p>{item.region_uz}, {item.district_uz}, {item.index}</p>
                                            </div> : ""
                                        })  : ""


                                    }
                                </div>

                                {
                                    address.length >= 1 ? <div>

                                        <p className="text-primary " onClick={()=>{setOpen(true)}}>+ Yangi addres qo'shish</p>
                                        <p className="text-primary ml-3 mt-2" onClick={()=>{
                                            setOpen1(true)
                                        }}>Yangi address tanlash</p>

                                    </div> : ""

                                }
                            </div>


                            {
                                address.length === 0 ? <p className="text-primary mt-4" onClick={()=>{setOpen(true)}}>+ Add new addres</p> : ""
                            }



                            {
                                open ? <div className="addresform">
                                    <div className="addresform1">
                                       <div className="addresform1_1">
                                           <div className="addresform2">
                                               <ShippingAddressForm setAddress1={setAddress1}  address={address} setAddress={setAddress} open={open} setOpen={setOpen}/>
                                           </div>
                                       </div>
                                    </div>
                                </div> : ""
                            }

                            {
                                open1 ? <div className="addresfor">
                                    <div className="addresform1">
                                        <div className="addresform1_1">
                                            <div className="addresform2">
                                                <AddAddress setAddress1={setAddress1} setOpen1={setOpen1} address={address} setAddress={setAddress}/>
                                            </div>
                                        </div>
                                    </div>
                                </div> : ""
                            }


                        </div>

                        <div className="bg-white p-3 rounded mt-3">
                            <h4>Payment Methods</h4>

                            <p className="text-primary mt-4">+ Select payment method</p>
                        </div>

                        <div className="bg-white p-3 rounded mt-3">
                            <h4>Order Review</h4>

                            <p className="mt-4">Seller: Global laptop & monitor factory Store</p>

                            <div className="line"></div>

                            <div className="row">
                                <div className="col-2">
                                    <img src={props.onePhoto_list} className="w-100" alt=""/>
                                </div>
                                <div className="col-8">
                                    {parse(props.htmlString)}
                                    <p className="mt-2"><b>Color:</b>16G RAM 1TB HDD</p>

                                    <h6 className="my-3">UZ {props.oneProduct.price} so'm</h6>

                                    <p><b className="text-primary">Shipping: US $128.46</b> via Fedex IP
                                        Estimated Delivery Time:7-15 Days &#x279C;</p>

                                    <p className="mt-3 text-primary">+ Leave message</p>
                                </div>
                                <div className="col-2">
                                    <div className="d-flex align-items-center count">
                                        <div className="minus" onClick={() => {
                                            if (count > 1) {
                                                setCount(count - 1)
                                                setPrice(price - defaultprice)
                                            }

                                        }}><span className={`icon icon-minus ${count === 1 ? "nodrop" : "pointer"}`}></span></div>
                                        <h4>{count}</h4>
                                        <div className="minus" onClick={() => {
                                            setCount(count + 1)
                                            setPrice(defaultprice * (count + 1))
                                        }}><span className="icon icon-plus"></span></div>



                                    </div>
                                </div>
                            </div>

                            <div className="line"></div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="buyProduct">

                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        oneProduct: state.product.oneProduct,
        product: state.product.product,
        photo_list: state.product.photo_list,
        onePhoto_list: state.product.onePhoto_list,
        htmlString: state.product.htmlString,
        country: state.address.country
    }
}

export default  connect(mapStateToProps, {set_state1, getCountry})(BuyNow);