import React, {useEffect, useState} from 'react';
import AdminLayout from "../AdminLayout";
import axios from "axios";
import {API_PATH} from "../../../tools/constants";
import Cookies from "js-cookie";
import {connect} from "react-redux";
import {set_state1} from "../../../redux/actions/productAction";


const Orders = (props) => {

    useEffect(()=>{
        axios.get(API_PATH + "orderadmin", {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                props.set_state1({orderProduct: res.data})
            })
    },[])

    return (
        <AdminLayout history={props.history}>

            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th>№</th>
                    <th>id</th>
                    <th>user_id</th>
                    <th>seller_id</th>
                    <th>product_id</th>
                    <th>product_img</th>
                    <th>product_uz</th>
                    <th>detail-value</th>
                    <th>product_price</th>
                    <th>amount</th>

                </tr>
                </thead>
                <tbody>
                {
                    props.orderProduct.map((item, index) =>{
                        return <tr>
                            <th>{index+1}</th>
                            <th>{item.order_id}</th>
                            <th>{item.user_id}</th>
                            <th>{item.seller_id}</th>
                            <th>{item.product_id}</th>
                            <th><img src={item.photo_list[0].url} width="50" height="50" alt=""/></th>
                            <th>{item.product_uz}</th>
                            <th>
                                <div className="d-flex">
                                    {
                                        item.detail.map((item1)=>{
                                            return <div className="mr-3">
                                                {
                                                    item.value.map((item2)=>{
                                                        return item1.detail_id.toString() === item2.detail_id ? <div className="d-flex align-items-center">
                                                            <p className="mb-0 text-light">{item1.detail_uz}:</p>
                                                            <b className="text-primary">{item2.value_uz}</b>
                                                        </div> : ""
                                                    })
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                            </th>
                            <th>{item.price} so'm</th>
                            <th>{item.amount} dona</th>
                        </tr>
                    })
                }
                </tbody>
            </table>

        </AdminLayout>
    );

};

const mapStateToProps = (state) => {
    return {
        orderProduct: state.product.orderProduct,
        detailList: state.product.detailList,
        valueList: state.product.valueList,
    }
};

export default connect(mapStateToProps, {set_state1})(Orders)  ;