import React, {useEffect, useState} from 'react';
import "../../styles/addressModalForm.scss";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";
import {connect} from "react-redux";
import {toast} from "react-toastify";
import useStateRef from 'react-usestateref';
function AddressModalForm(props) {
    const [userAddress, setUserAddress, userAddressRef]=useStateRef({
        id:props.userReducer.userObject.id,
        name:"",
        phone:"",
        region_id:"",
        district_id:"",
        index:"",
        street:"",
        home:""
    });
    const [districts, setDistricts]=useState([]);
    const [region, setRegion]=useState([]);
    const [region1, setRegion1]=useState([]);
    useEffect(  ()=> {
        axios.get(API_PATH+'regions', {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            setRegion1(response.data);
        });
        axios.get(API_PATH+'districts', {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            setDistricts(response.data);
        });
    },[]);


     function handleInputChange(e) {
        let newObject={
            ...userAddress,
            [e.target.name]:e.target.value
        };
        setUserAddress(newObject);

        if (e.target.name === "region_id"){
            setRegion(e.target.value)
        }
    }
    function validation() {
        let nameInput=document.querySelector('.nameInput');
        let inputPhone=document.querySelector('.inputPhone');
        let region=document.querySelector('.region');
        let district=document.querySelector('.district');
        let pochtaIndeksi=document.querySelector('.pochtaIndeksi');
        let addressInput=document.querySelector('.addressInput');
        let  homeInput=document.querySelector('.homeInput');
        if (userAddressRef.current.name.length>0)
            nameInput.classList.remove('validationInput');
        else {
            nameInput.classList.add('validationInput');
        }
        if (userAddressRef.current.phone.length>0)
            inputPhone.classList.remove('inputPhoneValid');
        else {
            inputPhone.classList.add('inputPhoneValid');
        }
        if (userAddressRef.current.region_id.length>0)
            region.classList.remove('regionValid');
        else {
            region.classList.add('regionValid');
        }
        if (userAddressRef.current.district_id.length>0)
            district.classList.remove('districtValid');
        else {
            district.classList.add('districtValid');
        }
        if (userAddressRef.current.index.length>0)
            pochtaIndeksi.classList.remove('indexValid');
        else {
            pochtaIndeksi.classList.add('indexValid');
        }
        if (userAddressRef.current.street.length>0)
            addressInput.classList.remove('streetValid');
        else {
            addressInput.classList.add('streetValid');
        }
        if (userAddressRef.current.home.length>0)
            homeInput.classList.remove('homeInputValid');
        else {
            homeInput.classList.add('homeInputValid');
        }
    }
    function addAddress() {
        validation();
        if (userAddress.name.length>0&&userAddress.phone.length>0&&userAddress.region_id.length>0&&userAddress.district_id.length>0&&userAddress.index.length>0&&userAddress.street.length>0){
            axios.post(API_PATH+'craddress', userAddress, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
                toast.success("Address muvofiqiyatli qoshildi");
                props.setModalForm(false);
                axios.post(API_PATH + "address", {id: props.userReducer.userObject.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                    .then((res)=>{
                        props.setAddressList(res.data);
                        props.setDefaultAddress(res.data[res.data.length-1]);
                    })
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
    return (
        <div className={`modalForm ${props.modalForm? "modalFormBlock":""}`}>
           <div className="modalForm1">
               <div className="modalContent">
                   <div className="shippingAddress">
                       <div className="imgX" onClick={()=>props.setModalForm(false)}>
                           <img src="/images/cancel.svg" alt="no imaga"/>
                       </div>
                       <div className="container">
                           <div className="shippingForm"  >
                               <div className="row">
                                   <div className="col-md-12">
                                       <h5>Contact</h5>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="nameInput">
                                           <input type="text" name="name" className="form-control  gg" onChange={handleInputChange} placeholder="Ism" required={true} />
                                       </div>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="input-group inputPhone">
                                           <input type="text"  value="+998" disabled  className="form-control" />
                                           <input type="text" name="phone" className="form-control" onChange={handleInputChange} placeholder={"Telefon raqam"} required={true} />
                                       </div>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="text d-none">Hudud</div>
                                   <div className="selectForm">
                                       <div className="region">
                                           <select className="form-control" name="region_id" onChange={handleInputChange} required={true}>
                                               <option value=""  >viloyat</option>
                                               {region1.map((item)=>{
                                                   return <option value={item.id}>{item.region_uz}</option>
                                               })}

                                           </select>
                                       </div>
                                       <div className="district">
                                           <select className="form-control" name="district_id" onChange={handleInputChange} required={true}>
                                               <option value={""}>tuman</option>
                                               {districts.map((item)=>{
                                                   return region === item.region_id ? <option value={item.id}>{item.district_uz}</option> : ""
                                               })}
                                           </select>
                                       </div>
                                       <div className="pochtaIndeksi">
                                           <input type="text" name="index" className="form-control" onChange={handleInputChange} placeholder="Pochta indeksi" required={true}/>
                                       </div>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-md-12">
                                       <h5>Manzil</h5>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="addressInput">
                                           <input type="text" name="street" className="form-control" onChange={handleInputChange} placeholder={"Kocha"} required={true}/>
                                       </div>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="homeInput">
                                           <input type="text" name="home" className="form-control" onChange={handleInputChange} placeholder={"uy manzili"} required={true}/>
                                       </div>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-md-12">
                                       <button type="submit" onClick={addAddress} >Saqlash</button>

                                       <button type="button" onClick={()=>props.setModalForm(false)}>
                                           Bekor qilish
                                       </button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, null) (AddressModalForm) ;