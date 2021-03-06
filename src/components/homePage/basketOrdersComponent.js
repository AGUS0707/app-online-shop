import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import parse from "html-react-parser";
import "../../styles/basketOrdersComponent.scss";
import AddressModalForm from "./addressModalForm";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import Cookies from "js-cookie";
import {connect} from "react-redux";
import AddressListModal from "./addresListModal";
import {Spinner} from "reactstrap";

function BasketOrdersComponent(props) {
    const [load, setLoad]=useState(false);
    const [addressList, setAddressList] = useState([]);
    // const [modalForm, setModalForm] = useState(false);
    // const [modalList, setModalList] = useState(false);
    const [defaultAddress, setDefaultAddress] = useState({});
    const [payment, setPayment] = useState("");
    const [pay_name, setPayName] = useState("");
    const [paymentCheck, setPaymentCheck] = useState(false);
    const [description, setDescription]=useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.post(API_PATH + "address", {id: props.userReducer.userObject.id}, {headers: {"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res) => {
                setAddressList(res.data);
                if (res.data.length>0){
                    setDefaultAddress(res.data[res.data.length - 1]);
                }
                setLoad(true);
            });
    }, []);

    function totalPrice() {
        let totalPrice = 0;
        JSON.parse(localStorage.getItem('shoppingCardList')).forEach((item) => {
            totalPrice = totalPrice + ((parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.sale_price) / 100) * parseFloat(item.amount))
        });
        return totalPrice
    }
    console.log(description);
    function addPayment() {
        let newArray=[];
        if (payment!==""&&pay_name!==""){
            JSON.parse(localStorage.getItem('shoppingCardList')).forEach((item)=>{
                let newObject;
                newObject={
                    amount:item.amount,
                    product_id:item.product_id,
                    user_id:props.userReducer.userObject.id.toString(),
                    serial_number:item.serial_number,
                    product_price:item.price,
                    district_id:defaultAddress.district_id,
                    street:defaultAddress.street,
                    sale_price:item.sale_price,
                    home:defaultAddress.home,
                    detail:item.detail,
                    value:item.value,
                    description:description,
                    pay_id:payment,
                    pay_name:pay_name
                };
                newArray=newArray.concat(newObject);
            });
            console.log(newArray);
            axios.post(API_PATH+'crorder', newArray, {headers: {"Authorization": "Bearer " + Cookies.get('jwt')}}).then((res)=>{
                window.open(`${res.data}`)
            })
        }else {
            setPaymentCheck(true);
        }
    }
    return (
        <>
            {load? <div className="shoppingCard1">
                <AddressModalForm modalForm={props.modalForm} setModalForm={props.setModalForm} setAddressList={setAddressList}
                                  setDefaultAddress={setDefaultAddress}/>
                <AddressListModal modalList={props.modalList} setDefaultAddress={setDefaultAddress} setModalList={props.setModalList}
                                  addressList={addressList}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="shoppingCardLeft1">
                                <div className="shoppingCardLeftHeader1">
                                    <div className="shoppingCardAddress">
                                        <div className="shoppingCardAddressTittle">
                                            Yetkazib berish manzili haqida malumot
                                        </div>
                                        <div className="shoppingCardAddressMain d-flex justify-content-between">
                                            <div className="shoppingCardAddressMainLeft">
                                                <div className="name">
                                                    {defaultAddress.name}   {defaultAddress.phone}
                                                </div>
                                                <p>{defaultAddress.street} </p>
                                                <p>{defaultAddress.region_uz}   {defaultAddress.district_uz}  {defaultAddress.index} </p>
                                            </div>
                                            <div className="shoppingCardAddressMainRight">
                                                <div className="newAddress" onClick={() => props.setModalForm(true)}>
                                                    + Yangi manzil qoshish
                                                </div>
                                                <div className="switchAddress" onClick={() => props.setModalList(true)}>
                                                    Yangi address tanlash
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`payments ${paymentCheck? "paymentsValid": ""}`}>

                                    <div className="d-flex">
                                        <div className={`tolov ${payment === "1" ? "active" : ""}`} onClick={() => {
                                            setPayment("1");
                                            setPayName("payme");
                                            setPaymentCheck(false);
                                        }}>
                                            <img
                                                src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 138 40'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23333;%7D.cls-2%7Bfill:%233cc;%7D.cls-3%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1-2'%3E%3Cpath class='cls-1' d='M22.73,3.95a7.1,7.1,0,0,0-1.85-2A9.18,9.18,0,0,0,18.45.77,13.68,13.68,0,0,0,15.56.16,34,34,0,0,0,12.1,0h-10A1.74,1.74,0,0,0,.2,1.62s0,.06,0,.09V17.95a15.37,15.37,0,0,0,6.57,7V21.69a1.92,1.92,0,0,1,1.75-2.08h3q6.14,0,9.37-2.57t3.28-7.62a12,12,0,0,0-.34-2.88A9,9,0,0,0,22.73,3.95Zm-5.86,8.35a3.52,3.52,0,0,1-1.49,1.39,6,6,0,0,1-2.15.57,19.58,19.58,0,0,1-2.47.15H7.88c-.69,0-1.12-.56-1.12-1.38V6.33A1,1,0,0,1,7.88,5.27h2.88q1.4,0,2.64.08a5.76,5.76,0,0,1,2.13.52A3.21,3.21,0,0,1,17,7.19a5.09,5.09,0,0,1,.51,2.52A5.08,5.08,0,0,1,16.87,12.29ZM6.78,25.93A18.19,18.19,0,0,1,.2,21.79v7.85a1.12,1.12,0,0,0,1,1.27H5.72c1.2,0,1.06-1.28,1.06-1.28ZM68.9,8.55H65a1.58,1.58,0,0,0-1.64,1.21L58.83,22.24s-4-11.37-4.3-12.25a1.82,1.82,0,0,0-1.76-1.45H49.18c-1.28,0-1.28,1-1.11,1.39s5.08,13.85,7,19a7.52,7.52,0,0,1,.63,2,5.28,5.28,0,0,1-.76,1.92,4.93,4.93,0,0,1-.5.7c3.7-1.1,8-5.11,10.16-9.44,2.18-6,5.05-14,5.18-14.41C69.92,9.07,69.92,8.55,68.9,8.55ZM51.52,34.77a9.47,9.47,0,0,1-1-.08c-.41-.06-1.19,0-1.19.7v3c0,1.15.56,1.23.85,1.31A12.92,12.92,0,0,0,53,40a7.29,7.29,0,0,0,3.25-.67,7.76,7.76,0,0,0,2.43-1.92,13.29,13.29,0,0,0,1.92-2.88q.83-1.66,1.58-3.67l.58-1.59C61.6,30.42,56.48,35.25,51.52,34.77ZM45.62,12.14a5.26,5.26,0,0,0-.86-1.39,6.06,6.06,0,0,0-1.22-1A8.92,8.92,0,0,0,42,8.91a11.53,11.53,0,0,0-1.69-.51,13.72,13.72,0,0,0-2-.29Q37.23,8,35.89,8q-8.94,0-10.18,5.64a1,1,0,0,0,.88,1.24h3.67c1,0,1-.31,1.38-1.17a2.57,2.57,0,0,1,.86-1.18,5.15,5.15,0,0,1,3.16-.81,4.5,4.5,0,0,1,2.95.73,3.44,3.44,0,0,1,1.09,2.38c0,1.24-.38,2.06-1.92,2.06-3.65-.13-7.57.28-9.78,1.55a7.23,7.23,0,0,0-3.46,6.38,6.52,6.52,0,0,0,.59,2.88,5.71,5.71,0,0,0,1.65,2A7,7,0,0,0,29.26,31a11.53,11.53,0,0,0,3.14.4,13.59,13.59,0,0,0,4.21-.6A15.7,15.7,0,0,0,40,28.89v.7c0,.69.21,1.31,1,1.31h4.25c.86,0,1.06-.61,1.06-1.37V16.44A16.14,16.14,0,0,0,46.14,14,7.68,7.68,0,0,0,45.62,12.14ZM39.81,25s-1.1,2.3-5,2.3a4.41,4.41,0,0,1-2.64-.73,2.61,2.61,0,0,1-1-2.28,2.88,2.88,0,0,1,1.65-2.82,12.59,12.59,0,0,1,4.95-.83,1.81,1.81,0,0,1,2.08,1.8Z'/%3E%3Cpath class='cls-2' d='M137,16.58a5,5,0,0,1,0,5.28c-1,1.52-6.45,7.34-8.25,9.21-1.56,1.62-3.67,3.26-5.76,3.26H79.7c-5.86,0-6.21-2-6.21-6.46V9.68c0-4.57,1.35-5.9,5.36-5.9h44.24c2.07,0,3.92,1.06,6,3.2C130.91,8.81,136.28,15.5,137,16.58Z'/%3E%3Cpath class='cls-3' d='M83.32,10.81V10.7c0-.59,0-1.16-1-1.16H78.69c-.85,0-.89.46-.89,1.18v4.8A15.17,15.17,0,0,1,83.32,10.81Z'/%3E%3Cpath class='cls-3' d='M107.63,28.17v-.26h0V16.33q0-7.27-6.42-7.27a6.4,6.4,0,0,0-3.36,1,12.18,12.18,0,0,0-2.93,2.56,5.1,5.1,0,0,0-2.08-2.63,6.89,6.89,0,0,0-3.61-.85,8.39,8.39,0,0,0-5.11,1.76c-.32.32-6.33,5-6.33,9.88v7.41c0,.23-.12,1.13.89,1.13h3.77c1.17,0,1.06-.77,1.06-1.09v-12c.63-.85,1.92-2.88,4.05-2.88a1.92,1.92,0,0,1,1.76.83,5.25,5.25,0,0,1,.54,2.76v9.35h0v1.92c0,.23-.12,1.13.89,1.13h3.73c1.17,0,1.06-.77,1.06-1.09v-.26h0V16.19c.68-.85,2-2.88,4.05-2.88a2,2,0,0,1,1.79.83,5.18,5.18,0,0,1,.55,2.76v9.35h0v1.92c0,.23-.12,1.13.89,1.13h3.77C107.77,29.24,107.63,28.48,107.63,28.17Z'/%3E%3Cpath class='cls-3' d='M128.42,23.46a8.63,8.63,0,0,1-8.54,5.61c-5.76,0-9.6-3.92-9.6-9.8s4-10,9.4-10,9,3.74,9.23,9.77c0,.77-.19,1.45-1.16,1.45H115.53c.08,3.23,1.63,5,4.39,5a3.84,3.84,0,0,0,3.54-2.14,1.36,1.36,0,0,1,1.15-.59h3.15a.63.63,0,0,1,.65.74ZM119.7,13c-2.29,0-3.84,1.59-4.18,4.21h8.2C123.51,14.92,122.27,13,119.7,13Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                                alt=""/>
                                        </div>
                                        <div className={`tolov ${payment === "2" ? "active" : ""}`} onClick={() => {
                                            setPaymentCheck(false);
                                            setPayment("2");
                                            setPayName("click")
                                        }}>
                                            <img src="https://uzticket.com/uzticket/images/click.png" alt="CLICK Evolution"
                                            />
                                        </div>
                                        <div
                                            className={`tolov d-flex align-items-center justify-content-center ${payment === "3" ? "active" : ""}`}
                                            onClick={() => {
                                                setPaymentCheck(false);
                                                setPayment("3");
                                                setPayName("qiwi")
                                            }}>
                                            <svg viewBox="0 0 80 40" focusable="false" className="css-1nflva5">
                                                <path fill="#2D3540"
                                                      d="M61.0550725,22.1681159 C62.4695652,22.1681159 63.257971,23.2115942 63.257971,24.5101449 C63.257971,24.6724638 63.2347826,24.8347826 63.2115942,24.9971014 L59.8028986,24.9971014 C59.8724638,25.8550725 60.5449275,26.3188406 61.2869565,26.3188406 C61.7971014,26.3188406 62.3072464,26.0869565 62.7014493,25.7855072 L63.1884058,26.6666667 C62.6782609,27.1072464 61.9130435,27.3855072 61.1942029,27.3855072 C59.5478261,27.3855072 58.5275362,26.2028986 58.5275362,24.7884058 C58.5275362,23.2347826 59.5710145,22.1681159 61.0550725,22.1681159 Z M72.0231884,22.1681159 C73.4376812,22.1681159 74.226087,23.2115942 74.226087,24.5101449 C74.226087,24.6724638 74.2028986,24.8347826 74.1797101,24.9971014 L70.7710145,24.9971014 C70.8405797,25.8550725 71.5130435,26.3188406 72.2550725,26.3188406 C72.7652174,26.3188406 73.2753623,26.0869565 73.6695652,25.7855072 L74.1565217,26.6666667 C73.6463768,27.1072464 72.8811594,27.3855072 72.1623188,27.3855072 C70.515942,27.3855072 69.4956522,26.2028986 69.4956522,24.7884058 C69.4956522,23.2347826 70.5391304,22.1681159 72.0231884,22.1681159 Z M47.1884058,22.1681159 C48.6956522,22.1681159 49.9246377,23.257971 49.9246377,24.7652174 C49.9246377,26.2956522 48.7188406,27.3623188 47.2115942,27.3623188 C45.7043478,27.3623188 44.4985507,26.2956522 44.4985507,24.7652174 C44.4753623,23.2347826 45.6811594,22.1681159 47.1884058,22.1681159 Z M68.4985507,22.284058 L68.4985507,27.2463768 L67.2695652,27.2463768 L67.2695652,23.2811594 L66.0637681,23.2811594 L66.0637681,23.8376812 C66.0637681,25.9942029 65.484058,27.2463768 63.8376812,27.2927536 L63.8376812,26.2028986 C64.4405797,26.1101449 64.8811594,25.6 64.8811594,23.8376812 L64.8811594,22.284058 L68.4985507,22.284058 Z M40.3710145,20.3362319 L40.3710145,23.142029 L41.2753623,23.142029 L42.8985507,20.3362319 L44.2666667,20.3362319 L42.3188406,23.6289855 L42.3188406,23.6521739 L44.3826087,27.2463768 L42.9681159,27.2463768 L41.2985507,24.2318841 L40.3942029,24.2318841 L40.3942029,27.2463768 L39.142029,27.2463768 L39.142029,20.3362319 L40.3710145,20.3362319 Z M52.0811594,22.284058 L52.0811594,26.1797101 L53.6347826,26.1797101 L53.6347826,22.284058 L54.8173913,22.284058 L54.8173913,26.1797101 L56.3710145,26.1797101 L56.3710145,22.284058 L57.5536232,22.284058 L57.5536232,27.2463768 L50.9449275,27.2463768 L50.9449275,22.284058 L52.0811594,22.284058 Z M76.4753623,22.284058 L76.4753623,24.1855072 L77.0782609,24.1855072 L78.284058,22.284058 L79.6521739,22.284058 L78.0753623,24.6492754 L78.0753623,24.6724638 L79.8376812,27.2463768 L78.4,27.2463768 L77.1014493,25.2289855 L76.4521739,25.2289855 L76.4521739,27.2463768 L75.2231884,27.2463768 L75.2231884,22.284058 L76.4753623,22.284058 Z M47.1884058,23.1884058 C46.3768116,23.1884058 45.7275362,23.8144928 45.7275362,24.742029 C45.7275362,25.6695652 46.3768116,26.2956522 47.1884058,26.2956522 C48,26.2956522 48.6724638,25.6695652 48.6724638,24.742029 C48.6724638,23.8376812 48,23.1884058 47.1884058,23.1884058 Z M61.0086957,23.0956522 C60.3826087,23.0956522 59.9188406,23.5130435 59.8028986,24.1391304 L62.0057971,24.1391304 C62.0057971,23.4898551 61.5652174,23.0956522 61.0086957,23.0956522 Z M71.9768116,23.0956522 C71.3507246,23.0956522 70.8869565,23.5130435 70.7710145,24.1391304 L72.973913,24.1391304 C72.973913,23.4898551 72.5333333,23.0956522 71.9768116,23.0956522 Z"
                                                      className="css-nt1n7y"></path>
                                                <path fill="#FF8C00"
                                                      d="M15.9536232,-3.55271368e-15 C24.7652174,-3.55271368e-15 31.9072464,7.14202899 31.9072464,15.9536232 C31.9072464,18.9449275 31.0724638,21.7507246 29.657971,24.1391304 C29.6115942,24.2086957 29.4956522,24.1855072 29.4724638,24.0927536 C28.915942,20.173913 26.5275362,18.0173913 23.0492754,17.3681159 C22.7478261,17.3217391 22.7014493,17.1362319 23.0956522,17.0898551 C24.1623188,16.9971014 25.6695652,17.0202899 26.457971,17.1594203 C26.5043478,16.7652174 26.5275362,16.3478261 26.5275362,15.9304348 C26.5275362,10.1101449 21.7971014,5.37971014 15.9768116,5.37971014 C10.1565217,5.37971014 5.42608696,10.1101449 5.42608696,15.9304348 C5.42608696,21.7507246 10.1565217,26.4811594 15.9768116,26.4811594 L16.4637681,26.4811594 C16.2782609,25.4608696 16.2318841,24.4173913 16.2550725,23.6289855 C16.2782609,22.9797101 16.4173913,22.8869565 16.6956522,23.3971014 C18.1565217,25.9246377 20.2434783,28.1971014 24.3246377,29.1014493 C27.6637681,29.8434783 31.0028986,30.7014493 34.5971014,35.2695652 C34.9217391,35.6637681 34.4347826,36.0811594 34.0637681,35.7565217 C30.4,32.5101449 27.0608696,31.4434783 24.0231884,31.4434783 C20.6144928,31.4666667 18.2956522,31.9072464 15.9536232,31.9072464 C7.14202899,31.9072464 0,24.7652174 0,15.9536232 C0,7.14202899 7.14202899,-3.55271368e-15 15.9536232,-3.55271368e-15 Z M24.0695652,25.2057971 C24.4405797,25.2057971 24.857971,25.3681159 25.2289855,25.6927536 C25.9478261,26.2956522 26.1565217,26.9913043 25.7855072,27.5014493 C25.5768116,27.7565217 25.2289855,27.9188406 24.8347826,27.9188406 C24.4405797,27.9188406 24.0231884,27.7797101 23.7449275,27.5246377 C23.0956522,26.9681159 22.9101449,26.0405797 23.3275362,25.5304348 C23.4898551,25.3217391 23.7449275,25.2057971 24.0695652,25.2057971 Z M27.5942029,22.5855072 C28.1971014,22.8173913 28.4289855,23.7217391 28.4753623,24.115942 C28.5681159,24.8347826 28.3594203,25.1130435 28.1275362,25.1130435 C27.8956522,25.1130435 27.5710145,24.8347826 27.2231884,24.2782609 C26.8753623,23.7217391 26.7362319,23.0956522 26.9217391,22.7710145 C27.0376812,22.5623188 27.2927536,22.4695652 27.5942029,22.5855072 Z M44.6144928,4.66086957 C48.1855072,4.66086957 51.084058,7.55942029 51.084058,11.1304348 C51.084058,12.4057971 50.7130435,13.6115942 50.0637681,14.6318841 L52.0115942,16.9043478 C52.1507246,17.0666667 52.0347826,17.2985507 51.826087,17.2985507 L48.9043478,17.2985507 C48.7884058,17.2985507 48.6724638,17.2521739 48.6028986,17.1594203 L48.115942,16.5565217 C47.0956522,17.2057971 45.8898551,17.6 44.6144928,17.6 C41.0434783,17.6 38.1449275,14.7014493 38.1449275,11.1304348 C38.1449275,7.55942029 41.0434783,4.66086957 44.6144928,4.66086957 Z M56.115942,4.96231884 C56.3014493,4.96231884 56.4405797,5.10144928 56.4405797,5.28695652 L56.4405797,16.9971014 C56.4405797,17.1826087 56.3014493,17.3217391 56.115942,17.3217391 L53.7275362,17.3217391 C53.542029,17.3217391 53.4028986,17.1826087 53.4028986,16.9971014 L53.4028986,5.28695652 C53.4028986,5.10144928 53.542029,4.96231884 53.7275362,4.96231884 L56.115942,4.96231884 Z M60.4753623,4.96231884 C60.5913043,4.96231884 60.6911433,5.02673108 60.7480408,5.12871712 L60.7768116,5.1942029 L62.8869565,12.1275362 L65.2057971,5.1942029 C65.2428986,5.10144928 65.3245217,5.02353623 65.4269217,4.99608116 L65.5072464,4.98550725 L67.3855072,4.98550725 C67.4968116,4.98550725 67.5932754,5.03002899 67.6511536,5.11907246 L67.6869565,5.1942029 L70.0057971,12.1275362 L72.115942,5.1942029 C72.1545894,5.07826087 72.2415459,4.99452496 72.3499732,4.9698336 L72.4173913,4.96231884 L75.084058,4.96231884 C75.1768116,4.96231884 75.2927536,5.00869565 75.4086957,5.10144928 C75.4643478,5.15710145 75.4754783,5.24243478 75.4658319,5.32183188 L75.4550725,5.37971014 L71.5130435,17.1130435 C71.475942,17.2057971 71.3943188,17.2837101 71.2919188,17.3111652 L71.2115942,17.3217391 L69.0782609,17.3217391 C68.9669565,17.3217391 68.8704928,17.2772174 68.8126145,17.1881739 L68.7768116,17.1130435 L66.4811594,10.2724638 L64.1855072,17.1130435 C64.1484058,17.2057971 64.0667826,17.2837101 63.9643826,17.3111652 L63.884058,17.3217391 L61.7507246,17.3217391 C61.6394203,17.3217391 61.5429565,17.2772174 61.4850783,17.1881739 L61.4492754,17.1130435 L57.5072464,5.37971014 C57.484058,5.28695652 57.484058,5.1942029 57.5536232,5.10144928 C57.5907246,5.02724638 57.6723478,4.98272464 57.7510029,4.96788406 L57.8086957,4.96231884 L60.4753623,4.96231884 Z M79.1188406,4.96231884 C79.257971,4.96231884 79.3800651,5.06453712 79.4267123,5.21056323 L79.4434783,5.28695652 L79.4434783,16.9971014 C79.4434783,17.1594203 79.3369565,17.2862319 79.1860507,17.3153986 L79.1188406,17.3217391 L76.7304348,17.3217391 C76.5681159,17.3217391 76.4413043,17.2152174 76.4121377,17.0643116 L76.4057971,16.9971014 L76.4057971,5.28695652 C76.4057971,5.12463768 76.5123188,4.99782609 76.6632246,4.96865942 L76.7304348,4.96231884 L79.1188406,4.96231884 Z M44.6144928,7.53623188 C42.6434783,7.53623188 41.2057971,9.2057971 41.2057971,11.1304348 C41.2057971,13.0550725 42.6434783,14.7014493 44.6144928,14.7014493 C45.1710145,14.7246377 45.7275362,14.5623188 46.2144928,14.3072464 L44.9391304,12.7536232 C44.8,12.5913043 44.915942,12.3362319 45.1246377,12.3362319 L47.8144928,12.3362319 C47.9536232,11.9652174 48.0231884,11.5478261 48.0231884,11.1304348 C48.0231884,9.2057971 46.5855072,7.53623188 44.6144928,7.53623188 Z"
                                                      className="css-nt1n7y"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                                <div className="shoppingCardList1">
                                    <h4> Buyurtmani korib chiqing</h4>
                                    {JSON.parse(localStorage.getItem('shoppingCardList')).map((item) => {
                                        return <div className="shoppingCardItem1">
                                            <hr/>
                                            <div className="shoppingCardItemMain1">
                                                <div
                                                    className="shoppingCardItemMainLeft1 d-flex justify-content-center align-items-center">
                                                    <div className="shoppingProductImg">
                                                        <img src={item.photo_list[0].url} alt={item.photo_list[0].alt_name}
                                                             className="img-fluid"/>
                                                    </div>
                                                </div>
                                                <div className="shoppingCardItemMainCenter1">
                                                    <div className="name">{item.product_uz}</div>
                                                    <Link to="/" className={`shoppingProductLink ${window.innerWidth<576? "d-none": ""}`}>
                                                        <p>{parse(item.description_uz)}</p></Link>
                                                    <p className="price">{item.price} sum</p>
                                                    {/*<div className="brandName">*/}
                                                    {/*    {item.brand_name}*/}

                                                    {/*</div>*/}
                                                    <div className="sale d-flex align-items-center">
                                                        <img
                                                            src="https://ae01.alicdn.com/kf/H360058adc16e44848f39a15e13126760H.png"
                                                            alt="no iamge"/>
                                                        <span className="saleText">
                                                                chegirma: {item.sale_price} %
                                                            </span>
                                                    </div>
                                                    <div className="percentSale">
                                                        Har bir sarflangan {item.price} sum ga {item.sale_price} % chegirma
                                                    </div>
                                                    <div className="deliveryText">
                                                        <span> Yetkazib berish bepul</span>
                                                    </div>
                                                </div>
                                                <div className="shoppingCardItemMainRight1 ">
                                                    <div className="count">soni: {item.amount} ta</div>
                                                    {/*<div className="productCount d-flex align-items-center">*/}
                                                    {/*    <button  >*/}
                                                    {/*        <img src="/images/minus-sign.svg" alt="no images"/>*/}
                                                    {/*    </button>*/}
                                                    {/*    <span>0</span>*/}
                                                    {/*    <button>*/}
                                                    {/*        <img src="/images/plus.svg" alt="no images"/>*/}
                                                    {/*    </button>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="limitText">*/}
                                                    {/*    Cheklangan miqdorda*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                            {/*<div className="d-flex justify-content-end">*/}
                                            {/*    <button className="purchaseButton">Sotib olish</button>*/}
                                            {/*</div>*/}
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="shoppingCardRight1">
                                <h3>Buyurtma haqida qisqacha malumot</h3>
                                <div className="totalPrice d-flex justify-content-between mb-4 ">
                                    <div className="totalPriceText">
                                        jami:
                                    </div>
                                    <div className="totalPriceNumber">
                                        {totalPrice()} sum
                                    </div>
                                </div>
                                <div className="description">
                                    <input type="text" name="description" className="form-control mb-1" onChange={(e)=>setDescription(e.target.value)} placeholder="Sotuvchiga xabar yuborish"/>
                                </div>
                                <hr/>
                                <div className="total d-flex justify-content-between align-items-center">
                                    <div className="totalText">
                                        jami:
                                    </div>
                                    <div className="totalNumber">
                                        {totalPrice()} sum
                                    </div>
                                </div>
                                <Link className="totalPurchaseButton">
                                    <button onClick={addPayment}>Sotib olish ({JSON.parse(localStorage.getItem('shoppingCardList')).length})
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :<div className="loader">
                <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
            </div>}
        </>
    );
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, null)(BasketOrdersComponent);