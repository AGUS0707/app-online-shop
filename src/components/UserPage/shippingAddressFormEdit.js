import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getRegion, getDistrict} from "../../redux/actions/addresAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";
import Cookies from "js-cookie";

function ShippingAddressFormEdit(props) {
    // console.log(localStorage.getItem("user"))
// let a = localStorage.getItem("user")
    let data = JSON.parse(localStorage.getItem('user'))
    let regionid=props.addressEdit.region_id;

    const [regionId, setRegionId] = useState(regionid);
    const [nameCheck, setNameCheck]=useState(false);
    const [phoneCheck, setPhoneCheck]=useState(false);
    const [regionCheck, setRegionCheck]=useState(false);
    const [districtCheck, setDistrictCheck]=useState(false);
    const [indexCheck, setIndexCheck]=useState(false);
    const [streetCheck , setStreetCheck]=useState(false);
    const [homeCheck, setHomeCheck]=useState(false);
    const [address, setAddress] = useState({
        user_id: data.id,
        id: props.addressEdit.id,
        name: props.addressEdit.name,
        phone: props.addressEdit.phone,
        region_id: props.addressEdit.region_id,
        district_id: props.addressEdit.district_id,
        index: props.addressEdit.index,
        street: props.addressEdit.street,
        home: props.addressEdit.home
    });
    function handleInputChange (e) {
        if (e.target.name === "region_id"){
            setRegionId(e.target.value)
        }
        let newProduct={
            ...address,
            [e.target.name]:e.target.value,
        };
        setAddress(newProduct)
    }
    function validation() {
        if (address.name.length>0){
            setNameCheck(false)
        }else {
            setNameCheck(true);
        }
        if (address.phone.length>0){
            setPhoneCheck(false);
        }else {
            setPhoneCheck(true);
        }
        if (address.region_id.length>0){
            setRegionCheck(false);
        }else {
            setRegionCheck(true);
        }
        if (address.district_id.length>0){
            setDistrictCheck(false);
        }else {
            setDistrictCheck(true);
        }
        if (address.index.length>0){
            setIndexCheck(false);
        }else {
            setIndexCheck(true);
        }
        if (address.street.length>0){
            setStreetCheck(false);
        }else {
            setStreetCheck(true);
        }
        if (address.home.length>0){
            setHomeCheck(false);
        }else {
            setHomeCheck(true);
        }
    }
    function AddAddres () {
        axios.post(API_PATH + "upaddress", address ,{headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((response)=>{
                props.setOpen(false);
                axios.post(API_PATH + "address", {id: data.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                    .then((res)=>{
                        props.setAddress(res.data);
                    })
            });
        validation()
    }
// console.log(product)
    useEffect(()=>{
        props.getRegion();
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
                            <div className={`nameInput ${nameCheck? "nameValid": ""}`}>
                                <input type="text" name="name" defaultValue={props.addressEdit.name}  className="form-control gg" onChange={handleInputChange} placeholder="Ism"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`input-group ${phoneCheck? "phoneValid": ""}`}>
                                <input type="text"  value={"+998"} disabled  className="form-control" />
                                <input type="text" name="phone" defaultValue={props.addressEdit.phone} className="form-control" onChange={handleInputChange} placeholder={"Telefon raqam"}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="selectForm">
                            <div className={`region ${regionCheck? "regionValid": ""}`}>
                                <select defaultValue={props.addressEdit.region_id} className="form-control" name="region_id" onChange={handleInputChange}>
                                    <option value="">Region</option>
                                    {
                                        props.region.map((item)=>{
                                            return <option value={item.id}>{item.region_uz}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className={`district  ${districtCheck? "districtValid": ""}`}>
                                <select className="form-control" defaultValue={props.addressEdit.district_id} name="district_id" onChange={handleInputChange}>
                                    <option value="">District</option>
                                    {
                                        props.district.map((item)=>{
                                            return regionId === item.region_id ? <option value={item.id}>{item.district_uz}</option> : ""
                                        })
                                    }
                                </select>
                            </div>
                            <div className={`pochtaIndeksi ${indexCheck? "indexValid":""}`}>
                                <input type="text" name="index" defaultValue={props.addressEdit.index} className="form-control" onChange={handleInputChange} placeholder="Pochta indeksi"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Manzil</h5>
                        </div>
                        <div className="col-md-6">
                            <div className={`addressInput ${streetCheck? "streetValid": ""}`}>
                                <input type="text" name="street" defaultValue={props.addressEdit.street} className="form-control" onChange={handleInputChange} placeholder={"Kocha uy/kvartira/birlik"}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`homeInput ${homeCheck? "homeValid": ""}`}>
                                <input type="text" name="home" defaultValue={props.addressEdit.home} className="form-control" onChange={handleInputChange} placeholder={"uy raqami"}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" onClick={AddAddres}>
                                Saqlash
                            </button>
                            <button type="button" onClick={()=>{props.setOpen(false)}}>
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

export default connect(mapStateToProps, {getRegion, getDistrict})(ShippingAddressFormEdit) ;