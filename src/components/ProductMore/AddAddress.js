import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";
import {toast} from "react-toastify";

const AddAddress = (props) => {

    useEffect(()=>{

        axios.post(API_PATH + "address", {id: data.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                props.setAddress(res.data)
            })

    }, [])

    function Add(id) {
        props.address.map((item)=>{
            return item.id === id ? props.setAddress1(item) : ""
        })

        props.setOpen1(false)

        // console.log(props.address)



    }

    let data = JSON.parse(localStorage.getItem('user'))

    return (
        <div>

            <div>
                <div className="close position-absolute" onClick={()=>{props.setOpen1(false)}}><span className="icon icon-closea"></span></div>
            </div>

            {
                props.address.map((item)=>{
                    return <div className="card">
                        <div className="card-body">

                            <div className="d-flex justify-content-between">
                                <div>
                                    <p><b>{item.name}, {item.phone}</b></p>

                                    <p>{item.street}</p>
                                    <p>{item.region_uz}, {item.district_uz}</p>
                                </div>

                                <div>
                                    <button type="button" className="btn btn-danger" onClick={()=>Add(item.id)}>Tanlang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default AddAddress;