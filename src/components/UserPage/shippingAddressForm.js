import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getRegion, getDistrict} from "../../redux/actions/addresAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";
import Cookies from "js-cookie";

function ShippingAddressForm(props) {
    // console.log(localStorage.getItem("user"))
// let a = localStorage.getItem("user")
    let data = JSON.parse(localStorage.getItem('user'));
    const [regionId, setRegionId] = useState("");
    const [nameCheck, setNameCheck]=useState(false);
    const [phoneCheck, setPhoneCheck]=useState(false);
    const [regionCheck, setRegionCheck]=useState(false);
    const [districtCheck, setDistrictCheck]=useState(false);
    const [indexCheck, setIndexCheck]=useState(false);
    const [streetCheck , setStreetCheck]=useState(false);
    const [homeCheck, setHomeCheck]=useState(false);
    const [address, setAddress] = useState({
        id: data.id,
        name: "",
        phone: "",
        region_id: "",
        district_id: "",
        index: "",
        street: "",
        home: ""
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
        if (address.name.length > 0 && address.phone.length > 0 && address.region_id.length>0 && address.district_id.length>0 && address.index.length > 0 && address.street.length > 0 && address.home.length > 0 ){
            axios.post(API_PATH + "craddress", address, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                .then((res)=>{
                    props.history.push("/home/profile/shipping-address");
                })
        }
        validation();
    }

    useEffect(()=>{
        props.getRegion();
        props.getDistrict();
        window.scrollTo(0, 0);
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
                                <input type="text" name="name"  className="form-control gg" onChange={handleInputChange} placeholder="Ism"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`input-group ${phoneCheck? "phoneValid": ""}`}>
                                <input type="text"  value={"+998"} disabled  className="form-control" />
                                <input type="text" name="phone" className="form-control" onChange={handleInputChange} placeholder={"Telefon raqam"}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="selectForm">
                            <div className={`region ${regionCheck? "regionValid": ""}`}>
                                <select className="form-control" name="region_id" onChange={handleInputChange}>
                                    <option value="">Region</option>
                                    {
                                        props.region.map((item)=>{
                                            return <option value={item.id}>{item.region_uz}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className={`district  ${districtCheck? "districtValid": ""}`}>
                                <select className="form-control" name="district_id" onChange={handleInputChange}>
                                    <option value="">District</option>
                                    {
                                        props.district.map((item)=>{
                                            return regionId === item.region_id ? <option value={item.id}>{item.district_uz}</option> : ""
                                        })
                                    }
                                </select>
                            </div>
                            <div className={`pochtaIndeksi ${indexCheck? "indexValid":""}`}>
                                <input type="text" name="index" className="form-control" onChange={handleInputChange} placeholder="Pochta indeksi"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Manzil</h5>
                        </div>
                        <div className="col-md-6">
                            <div className={`addressInput ${streetCheck? "streetValid": ""}`}>
                                <input type="text" name="street" className="form-control" onChange={handleInputChange} placeholder={"Kocha uy/kvartira/birlik"}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`homeInput ${homeCheck? "homeValid": ""}`}>
                                <input type="text" name="home" className="form-control" onChange={handleInputChange} placeholder={"uy raqami"}/>
                            </div>
                        </div>
                    </div>
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
};

export default connect(mapStateToProps, {getRegion, getDistrict})(ShippingAddressForm) ;