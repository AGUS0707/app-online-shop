import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getRegion, getDistrict} from "../../../redux/actions/addresAction";
import axios from "axios";
import {API_PATH} from "../../../tools/constants";
import {toast} from "react-toastify";
import Cookies from "js-cookie";

function ShippingAddressForm(props) {
    // console.log(localStorage.getItem("user"))
// let a = localStorage.getItem("user")
    let data = JSON.parse(localStorage.getItem('user'))

    const [regionId, setRegionId] = useState("")
    const [product, setProduct] = useState({
        id: data.id,
        name: "",
        phone: "",
        region_id: "",
        district_id: "",
        index: "",
        street: ""
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
        if (product.name.length > 0 && product.phone.length > 0 && product.region_id.length !== undefined && product.district_id.length !== undefined && product.index.length > 0 && product.street.length  > 0){
            axios.post(API_PATH + "craddress", product, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                .then((res)=>{
                    props.history.push("/home/profile/shipping-address")

                })
        } else {
            toast.error("Ma'lumotlarni to'ldiring")
        }


        // axios.post(API_PATH + "address", data.id)
        //     .then((res)=>{
        //         props.setAddress(res.data)
        //     })

    }


// console.log(product)

    useEffect(()=>{
        props.getRegion()
        props.getDistrict()
    }, [])

    return (
        <div className="shippingAddress">
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
                            <button type="button" onClick={()=>{props.history.push("/home/profile/shipping-address")}}>
                                Bekor qilish
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        region: state.address.region,
        district: state.address.district,
    }
}

export default connect(mapStateToProps, {getRegion, getDistrict})(ShippingAddressForm) ;