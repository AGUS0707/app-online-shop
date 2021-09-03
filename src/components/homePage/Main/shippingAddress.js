import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../../tools/constants";
import ShippingAddressForm from "../../CellerPage/shippingAddressForm";
import {Modal, ModalBody} from "reactstrap";
import {toast} from "react-toastify";



function ShippingAddress(props) {

    useEffect(()=>{
        axios.post(API_PATH + "address", {id: data.id})
            .then((res)=>{
                setAddress(res.data)
            })

    },[])
    const [address, setAddress] = useState([])
    const [addressedit, setAddressedit] = useState([])
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [Id, setId] = useState("")

    let data = JSON.parse(localStorage.getItem('user'))

    function edit(id) {
        setOpen(true)
        address.filter((item)=>{
            return item.id === id ? setAddressedit(item) : ""
        })

    }
    function deleteAddres() {
        axios.post(API_PATH + "deladdress", {id: Id})
            .then((res)=>{
                toast.success("O'chdi brat")
                setOpen2(false)
                axios.post(API_PATH + "address", {id: data.id})
                    .then((res)=>{
                        setAddress(res.data)
                    })
            })
    }

    return (
        <div className="shippingAddressAdd">
            <div className="container">
                <div className="">
                    <h3>Yetkazib berish manzillari</h3>

                   {
                       address.length > 0 ? <div className="row">

                           {
                               address.map((item)=>{
                                   return <div className="addrescard col-4 mb-2">
                                      <div className="card h-100">
                                          <div className="card-body">
                                              <div className="d-flex align-items-center justify-content-between">
                                                  <div></div>
                                                  <p className="standart">Standart manzil</p>
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
                                                  <p className="adres ml-2">{item.street},    {item.region_uz},    {item.district_uz},    {item.index}</p>
                                              </div>
                                              <div className="d-flex align-items-center justify-content-between ml-4 mt-3">
                                                  <p className="tahrir" onClick={()=>edit(item.id)}>Tahrirlash</p>
                                                  <p className="tahrir" onClick={()=>{
                                                      setId(item.id)
                                                      setOpen2(true)
                                                  }}>O'chirish</p>
                                              </div>
                                          </div>
                                      </div>
                                   </div>
                               })
                           }
                       </div> : <div className="col-md-12">
                           <Link to="/home/profile/shipping-address/form" className="addAddressLink">
                               <button>
                                   <div className="plusImg"></div>
                                   Manzil qoshish
                               </button>
                           </Link>
                           <h3>Manzil kitobida hali manzillar yo'q.</h3>
                           <p>Xarid qilish jarayonini yanada osonlashtirish uchun manzillarni qo'shing.
                           </p>
                       </div>

                   }

                    {
                        open ? <div className="addresform">
                            <div className="addresform1">
                                    <div className="addresform2">
                                        <ShippingAddressForm open={open} setOpen={setOpen} setAddress={setAddress} addressEdit={addressedit}/>
                                    </div>
                            </div>
                        </div> : ""
                    }

                    <Modal isOpen={open2} toggle={()=>{setOpen2(false)}}>
                        <ModalBody>
                            <h3>Rostdan ham o'chirmoqchimisiz?</h3>
                            <div className="d-flex align-items-center justify-content-between">
                                <button type="button" onClick={deleteAddres}>Ha</button>
                                <button type="button" onClick={()=>setOpen2(false)}>Yo'q</button>
                            </div>

                        </ModalBody>
                    </Modal>


                </div>
            </div>
        </div>
    );
}

export default ShippingAddress;