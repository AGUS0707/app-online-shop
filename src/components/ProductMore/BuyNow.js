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
import {getCountry, getDistrict, getRegion} from "../../redux/actions/addresAction";
import ShippingAddressForm from "./shippingAddressForm";
import AddAddress from "./AddAddress";
import Cookies from "js-cookie";
import Payment from "./Payment";
import {toast} from "react-toastify";
import {Spinner} from "reactstrap";
import HomePageFixed from "../homePage/homePageFixed";


const BuyNow = (props) => {



    let data = JSON.parse(localStorage.getItem('user'))
    let count1 = JSON.parse(localStorage.getItem('product'))
    const [count, setCount] = useState(count1.count)
    const [count2, setCount2] = useState(0)
    const [price, setPrice] = useState(9664.34)
    const [address, setAddress] = useState([])
    const [address1, setAddress1] = useState({})
    let defaultprice = 9664.34
    const [open, setOpen] = useState(false)
    const [openm, setOpenm] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [addres, setaddres] = useState({})
    const [loading, setLoading] = useState(true)
    const [loading1, setLoading1] = useState(true)
    const [description1, setDescription1] = useState("")
    const [detail, setDetail] = useState()
    const [value, setValue] = useState()

    let detail12 = [];
    let value12 = [];
    useEffect(()=>{
        window.scrollTo(0, 0)
        if (window.localStorage.length === 0){
            props.history.push("/")
        }
        axios.get(API_PATH + "product")
            .then((res)=>{
                setLoading(false)
                res.data.filter((item)=>{
                    if (JSON.parse(localStorage.getItem("id")).id==item.id){
                        props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
                    }
                })
            });

        props.getCountry();
        props.getDistrict();
        props.getRegion()


        axios.post(API_PATH + "address", {id: data.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                .then((res)=>{
                    setLoading1(false)
                    setAddress(res.data)

                    if (address1.name !==undefined){
                        // toast.success("sdd")
                        setaddres(address1)
                    } if (res.data.length === 1){
                        // toast.success("ishladi")
                        res.data.map((item)=>{
                            return setaddres(item)
                        })
                    } if (res.data.length > 1){
                        // toast.success("ishladi")
                        res.data.map((item, index)=>{
                            return index === res.data.length-1 ? setaddres(item) : ""
                        })
                    }

                })

        JSON.parse(localStorage.getItem("product")).detail.filter((item)=>{
            detail12 = detail12.concat(item.detail_id.toString())
            setDetail(detail12)
        })

        JSON.parse(localStorage.getItem("product")).value.filter((item)=>{
            value12 = value12.concat(item.value_id.toString())
            setValue(value12)

        })

        if (JSON.parse(localStorage.getItem("user")) !== null){
            axios.post(API_PATH+'cart', {id: JSON.parse(localStorage.getItem("user")).id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
                setCount2(response.data.length)
            })
        }


    }, [])



    let product_id = JSON.parse(localStorage.getItem("product")).id

    function description(e) {
        setDescription1(e.target.value)
    }


    const order = [{
            district_id: addres.district_id,
            street: addres.street,
            home: addres.home,
            user_id:addres.user_id,
            description:  description1,
            product_id: product_id,
            product_price: props.oneProduct.price,
            sale_price: props.oneProduct.sale_price,
            pay_id: props.pay_id,
            pay_name: props.pay_name,
            amount: count.toString(),
            serial_number: props.oneProduct.serial_number,
            detail: detail,
            value: value
        }]




    function BuyNow () {
        // console.log(order[0].amount.length)
        // console.log(order)
        // if (order[0].district_id.length > 0 && order[0].street.length > 0 && order[0].home.length > 0 && order[0].user_id.length > 0 && order[0].description.length > 0 && order[0].product_id !== undefined > 0 && order[0].product_price.length > 0 && order[0].sale_price.length > 0 && order[0].pay_id.length > 0 && order[0].pay_name.length > 0 && order[0].amount !== undefined && order[0].serial_number.length > 0 && order[0].detail.length > 0 && order[0].value.length > 0){

            axios.post(API_PATH + "crorder", order, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                .then((res)=>{
                    console.log(props)
                    window.open(`${res.data}`)
                    toast.success("To'lovni amalga oshirishingiz mumkin!")
                })
        // console.log(order)

        // } else {
        //     toast.error("Ma'lumotlarni to'liq to'ldiring")
        // }



    }

    const [regionId, setRegionId] = useState("")
    const [product, setProduct] = useState({
        id: data.id,
        name: "",
        phone: "",
        region_id: "",
        district_id: "",
        index: "",
        street: "",
        home: ""
    })

    function handleInputChange (e) {
        if (e.target.name === "region_id"){
            setRegionId(e.target.value)
        }

        let newProduct={
            ...product,
            [e.target.name]:e.target.value,
        };
        setProduct(newProduct)
    }
    function AddAddres () {
        if (product.name.length > 0 && product.phone.length > 0 && product.region_id.length !== undefined && product.district_id.length !== undefined && product.index.length > 0 && product.street.length > 0  && product.home.length > 0){
            axios.post(API_PATH + "craddress", product, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                .then((res)=>{
                    setOpenm(false)
                    setAddress(res.data)
                    setAddress1({})

                    if (address1.name !==undefined){
                        setaddres(address1)
                    } if (res.data.length === 1){
                        res.data.map((item)=>{
                            return setaddres(item)
                        })
                    } if (res.data.length > 1){
                        res.data.map((item, index)=>{
                            return index === res.data.length-1 ? setaddres(item) : ""
                        })
                    }

                })




        } else {
            toast.error("Ma'lumotlarni to'ldiring")
        }


        // axios.post(API_PATH + "address", data.id)
        //     .then((res)=>{
        //         props.setAddress(res.data)
        //     })

    }

    return (
        <div className="buynow bg-light">

            {
                loading || loading1 ?  <div className="loader">
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
                </div>  : <>
                    <div className="bg-white py-3">
                        <div className="container">
                            <Link to="/" className="text-decoration-none"><h3>LOGOTIP</h3></Link>
                        </div>
                    </div>
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-9">

                                <div className="bg-white p-3 rounded">
                                    <h4>Shipping Information</h4>

                                    {/*{address.map((item)=>{*/}
                                    {/*    return <p>{item.id}</p>*/}
                                    {/*})}*/}

                                    <div className="d-flex align-items-center justify-content-between col10f">

                                        <div className="col10">
                                            {


                                                address1.name !==undefined ? <div>
                                                    <p className="mb-1" style={{fontWeight: "bold"}}>{address1.name}, {address1.phone}</p>
                                                    <p>{address1.street}asasa</p>
                                                    <p>{address1.region_uz}, {address1.district_uz}, {address1.index}, uy raqami: {address1.home}</p>
                                                </div> : address.length === 1 ? address.map((item)=>{
                                                    return <div>
                                                        <p className="mb-1" style={{fontWeight: "bold"}}>{item.name}, {item.phone}</p>
                                                        <p>{item.street}</p>
                                                        <p>{item.region_uz}, {item.district_uz}, {item.index}, uy raqami: {item.home}</p>
                                                    </div>
                                                }) : address.length > 1 ? address.map((item, index)=>{
                                                    return index === address.length-1 ? <div>
                                                        <p className="mb-1" style={{fontWeight: "bold"}}>{item.name}, {item.phone}</p>
                                                        <p>{item.street}</p>
                                                        <p>{item.region_uz}, {item.district_uz}, {item.index}, uy raqami: {item.home}</p>
                                                    </div> : ""
                                                })  : ""


                                            }
                                        </div>

                                        {
                                            address.length >= 1 ? <div className="col10">

                                                <p className="text-primary " onClick={()=>{
                                                    if (window.innerWidth > 576){
                                                        setOpen(true)
                                                    } else {
                                                        setOpenm(true)
                                                    }
                                                }}>+ Yangi addres qo'shish</p>
                                                <p className="text-primary ml-3 mt-2" onClick={()=>{
                                                    setOpen1(true)
                                                }}>Yangi address tanlash</p>

                                            </div> : ""

                                        }
                                    </div>


                                    {
                                        address.length === 0 ? <p className="text-primary mt-4" onClick={()=>{
                                            if (window.innerWidth > 576){
                                                setOpen(true)
                                            } else {
                                                setOpenm(true)
                                            }
                                        }}>+ Add new addres</p> : ""
                                    }

                                    {
                                        openm ? <div className="shippingAddress">
                                            <div className="container">
                                                <h3>Mening yetkazib berish manzilim</h3>
                                                <form className="shippingForm">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <h5>Contact</h5>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="nameInput">

                                                                <input type="text" name="name" className="form-control gg" onChange={handleInputChange} placeholder="Ism"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-group">
                                                                <input type="text"  value={"+998"} disabled  className="form-control" />
                                                                <input type="number" name="phone" className="form-control" onChange={handleInputChange} placeholder={"Telefon raqam"}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="selectForm">
                                                            <div className="region">
                                                                <select className="form-control" name="region_id" onChange={handleInputChange}>
                                                                    <option>Region</option>
                                                                    {
                                                                        props.region.map((item)=>{
                                                                            return <option value={item.id}>{item.region_uz}</option>
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div className="district">
                                                                <select className="form-control" name="district_id" onChange={handleInputChange}>
                                                                    <option>District</option>
                                                                    {
                                                                        props.district.map((item)=>{
                                                                            return regionId === item.region_id ? <option value={item.id}>{item.district_uz}</option> : ""
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div className="pochtaIndeksi">
                                                                <input type="text" name="index" className="form-control" onChange={handleInputChange} placeholder="Pochta indeksi"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <h5>Manzil</h5>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="addressInput">
                                                                <input type="text" name="street" className="form-control" onChange={handleInputChange} placeholder={"Kocha uy/kvartira/birlik"}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="homeInput">
                                                                <input type="text" name="home" className="form-control" onChange={handleInputChange} placeholder={"uy raqami"}/>
                                                            </div>
                                                        </div>
                                                        {/*<div className="col-md-6">*/}
                                                        {/*    <div className="addressInput">*/}
                                                        {/*        <input type="text" className="form-control" onChange={handleInputChange} placeholder={"Apt , Suit,  Unit"}/>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                    {/*<div className="row">*/}
                                                    {/*    <div className="col-md-12">*/}
                                                    {/*        <div className="mainChecked">*/}
                                                    {/*            <input type="checkbox" className="form-control"/>*/}
                                                    {/*            <div className="mainCheckedText">Odatiy qilib sozlash</div>*/}
                                                    {/*        </div>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button type="button" onClick={AddAddres}>
                                                                Saqlash
                                                            </button>
                                                            <button type="button" onClick={()=>{setOpenm(false)}}>
                                                                Bekor qilish
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>: ""
                                    }



                                    {
                                        open ? <div className="addresform">
                                            <div className="addresform1">
                                                <div className="addresform1_1">
                                                    <div className="addresform2">
                                                        <ShippingAddressForm address1={address1} setaddres={setaddres} setAddress1={setAddress1}  address={address} setAddress={setAddress} open={open} setOpen={setOpen}/>
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
                                                        <AddAddress address1={address1} setAddress1={setAddress1} setOpen1={setOpen1} address={address} setAddress={setAddress} addres={addres} setaddres={setaddres}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : ""
                                    }


                                </div>

                                <div className="bg-white py-3 rounded mt-3">
                                    <h4 className="ml-2">Payment Methods</h4>

                                    <Payment/>

                                    {/*<p className="text-primary mt-4">+ Select payment method</p>*/}
                                </div>

                                <div className="bg-white p-3 rounded mt-3">
                                    <h4>Order Review</h4>

                                    <p className="mt-4">Seller: Global laptop & monitor factory Store</p>

                                    <div className="line"></div>

                                    <div className="row">
                                        <div className="col-2 col22">
                                            <img src={props.onePhoto_list} className="w-100" alt=""/>
                                        </div>
                                        <div className="col-8">
                                            {parse(props.htmlString)}
                                            {/*<p className="mt-2"><b>Color:</b>16G RAM 1TB HDD</p>*/}

                                            {
                                               JSON.parse(localStorage.getItem("product")).detail.map((item)=>{
                                                   return <p className="mt-2"><b className="mr-2">{item.detail_uz}:</b>
                                                       {
                                                           JSON.parse(localStorage.getItem("product")).value.map((item1)=>{
                                                               return item.detail_id.toString() === item1.det_id ? <>
                                                               {item1.value_uz}
                                                               </> : ""
                                                           })
                                                       }
                                                   </p>
                                               })
                                            }

                                            <h6 className="my-3">UZ {count * props.oneProduct.price} so'm</h6>

                                            <p><b className="text-primary">Shipping: UZ {count * props.oneProduct.price} so'm </b> via Fedex IP
                                                Estimated Delivery Time:7-15 Days &#x279C;</p>

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
                            <div className="col-3">
                                <div className="buyProduct">
                                    <div>
                                        <h3>Buyurtma haqida qisqacha malumot</h3>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p><b>Nomi: </b></p>
                                            <p>{props.oneProduct.product_uz}</p>
                                        </div>

                                        <input type="text" className="form-control my-3" onChange={description} placeholder="Sotuvchiga xabar yo'llang"/>

                                        <div className="line11"></div>


                                        <div className="d-flex align-items-center justify-content-between">
                                            <p><b>Jami: </b></p>
                                            <p>{count * props.oneProduct.price} so'm</p>
                                        </div>
                                        <button type="button" onClick={BuyNow}>Sotib olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        open1 ? "" : <HomePageFixed count={count2}/>
                    }
                    <Footer/>
                </>
            }

        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        oneProduct: state.product.oneProduct,
        product: state.product.product,
        region: state.address.region,
        district: state.address.district,
        photo_list: state.product.photo_list,
        onePhoto_list: state.product.onePhoto_list,
        htmlString: state.product.htmlString,
        country: state.address.country,
        detailList: state.product.detailList,
        valueList: state.product.valueList,
        pay_id: state.product.pay_id,
        pay_name: state.product.pay_name
    }
}

export default  connect(mapStateToProps, {set_state1, getCountry, getDistrict, getRegion})(BuyNow);