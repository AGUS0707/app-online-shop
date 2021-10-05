import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {Modal, ModalBody} from "reactstrap";
import {toast} from "react-toastify";
import Cookies from "js-cookie";
import {Spinner} from "reactstrap";
import ShippingAddressFormEdit from "./shippingAddressFormEdit";
function ShippingAddress(props) {
    useEffect(()=>{
        window.scrollTo(0, 0);
        axios.post(API_PATH + "address", {id: data.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                setAddress(res.data);
                setLoader(true);
            })
    },[]);
    const [address, setAddress] = useState([]);
    const [addressedit, setAddressedit] = useState({});
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [Id, setId] = useState("");
    const [loader, setLoader] = useState(false);
    let data = JSON.parse(localStorage.getItem('user'))

    function edit(id) {
        setOpen(true);
        address.filter((item)=>{
            return item.id === id ? setAddressedit(item) : ""
        })
    }
    function deleteAddres() {
        axios.post(API_PATH + "deladdress", {id: Id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                setOpen2(false);
                axios.post(API_PATH + "address", {id: data.id},{headers:{"Authorization": "Bearer " + Cookies.get('jwt')}} )
                    .then((res)=>{
                        setAddress(res.data)
                    })
            })
    }
    function deleteAddressMobile(id) {
        axios.post(API_PATH + "deladdress", {id: id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                axios.post(API_PATH + "address", {id: data.id},{headers:{"Authorization": "Bearer " + Cookies.get('jwt')}} )
                    .then((res)=>{
                        setAddress(res.data)
                    })
            })
    }
    return (
        <>
            {loader?<div className="shippingAddressAdd">
                <div className="container">
                    <div className="">
                        <h3>Yetkazib berish manzillari</h3>

                        <div className={`col-md-12 toy ${address.length>0? "pl-0": ""}`}>
                            <Link to="/home/profile/shipping-address/form" className="addAddressLink">
                                <button className={`${address.length>0?"mb-3 mt-2": ""}`}>
                                    <div className="plusImg"></div>
                                    Manzil qoshish
                                </button>
                            </Link>
                            <h3 className={`${address.length>0?"d-none": ""}`}>Manzil kitobida hali manzillar yo'q.</h3>
                            <p className={`${address.length>0?"d-none": ""}`}>Xarid qilish jarayonini yanada osonlashtirish uchun manzillarni qo'shing.
                            </p>
                        </div>
                        <div className="row">
                            {
                                address.map((item)=>{
                                    return <div className="addrescard col-md-4 mb-2">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div></div>
                                                    {/*<p className="standart">Standart manzil</p>*/}
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">

                                                    <div className="d-flex align-items-center">
                                                        <span className="icon icon-user"></span>
                                                        <p className="name ml-2">{item.name}</p>
                                                    </div>
                                                    <div>
                                                        <p className="name">{item.phone}</p>
                                                    </div>

                                                </div>

                                                <div className="d-flex mt-4">
                                                    <span className="icon icon-gps"></span>
                                                    <p className="adres ml-2">{item.street},    {item.region_uz},    {item.district_uz},    {item.index},  uy raqami: {item.home}</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between ml-4 mt-3">
                                                    <p className="tahrir1" onClick={()=>edit(item.id)}>Tahrirlash</p>
                                                    <p className="tahrir2" onClick={()=>{
                                                        setId(item.id);
                                                        setOpen2(true)
                                                    }}>O'chirish</p>
                                                    <p className="tahrirMobile d-none" onClick={()=>deleteAddressMobile(item.id)} >O'chirish</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>


                        {
                            open ? <div className="addresform">
                                <div className="addresform1">
                                    <div className="addresform2">
                                        <ShippingAddressFormEdit setLoader={setLoader} open={open} setOpen={setOpen} setAddress={setAddress} addressEdit={addressedit}/>
                                    </div>
                                </div>
                            </div> : ""
                        }

                        <Modal isOpen={open2} toggle={()=>{setOpen2(false)}}>
                            <ModalBody>
                                <h3 className="text-center mb-3">Rostdan ham o'chirmoqchimisiz?</h3>
                                <div className="d-flex align-items-center justify-content-between">
                                    <button type="button" className="btn btn-success" onClick={deleteAddres}>Ha</button>
                                    <button type="button" className="btn btn-danger" onClick={()=>setOpen2(false)}>Yo'q</button>
                                </div>

                            </ModalBody>
                        </Modal>


                    </div>
                </div>
            </div>:<div className="loader">
                <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
            </div>}
        </>
    );
}

export default ShippingAddress;