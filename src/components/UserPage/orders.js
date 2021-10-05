import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import parse from 'html-react-parser';
import {connect} from "react-redux";
import Cookies from "js-cookie";
import {Spinner} from "reactstrap";
function Orders(props) {
    const [orderList, setOrderList]=useState([]);
    const [load, setLoad]=useState(false);
    useEffect(()=>{
        window.scrollTo(0, 0);
        axios.post(API_PATH+'orderuser', {id:props.userReducer.userObject.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}} ).then((response)=>{
            console.log(response);
            setOrderList(response.data);
            setLoad(true);
        })
    }, []);
    function detailTanlash(det_id, detailList) {
        let a="";
        detailList.forEach((item)=>{
            if (det_id==item.detail_id)
                a=item.detail_uz
        });
        return a
    }
    function month(count) {
        switch (count) {
            case 0 :
                return "Yanvar";
                break;
            case 1 :
                return "Fevral";
                break;
            case 2 :
                return "Mart";
                break;
            case 3 :
                return "Aprel";
                break;
            case 4 :
                return "May";
                break;
            case 5 :
                return "Iyun";
                break;
            case 6 :
                return "Iyul";
                break;
            case 7 :
                return "Avgust";
                break;
            case 8 :
                return "Sentabr";
                break;
            case 9 :
                return "Oktabr";
                break;
            case 10 :
                return "Noyabr";
                break;
            case 11 :
                return "Decabr";
                break;
            default : return  ""
        }
    }
    return (
        <>
            {load? <div className="orders">
                <h3>Barcha buyurtmalar</h3>
                <div className="purchase">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="purchaseList">
                                    <li className="purchaseListItem">
                                        <Link className="purchaseListLink" to="/">Tolov kutilmoqda (0) </Link>
                                    </li>
                                    <li className="purchaseListItem">
                                        <Link className="purchaseListLink" to="/">Yetkazib berish kutilmoqda (0) </Link>
                                    </li>
                                    <li className="purchaseListItem">
                                        <Link className="purchaseListLink" to="/">Buyurtma yuborildi (0) </Link>
                                    </li>
                                    <li className="purchaseListItem">
                                        <Link className="purchaseListLink" to="/">Ochiq nizolar (0) </Link>
                                    </li>
                                    <li className="purchaseListItem">
                                        <Link className="purchaseListLink" to="/">Oqilmagan xabarlar (0) </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="ordersFilter">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-12">*/}
                {/*                <div className="orderNumber">*/}
                {/*                    <label htmlFor="order-number">Buyurtma raqami:</label>*/}
                {/*                    <input type="number" className="form-control" id="order-name"/>*/}
                {/*                </div>*/}
                {/*                <div className="orderName">*/}
                {/*                    <label htmlFor="order-name">Mahsulot nomi:</label>*/}
                {/*                    <input type="text" className="form-control" id="order-name"/>*/}
                {/*                </div>*/}
                {/*                <div className="searchButton">*/}
                {/*                    <button>Qidirish</button>*/}
                {/*                </div>*/}
                {/*                <div className="otherFilter">*/}
                {/*                    <button>Boshqa filtrlar</button>*/}
                {/*                    <div className="arrowIcon">*/}
                {/*                        <img src="/images/arrow-down-filled-triangle.svg" alt="no images"/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="ordersList">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="orderListName">
                                    Mahsulot nomi
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="orderListName">
                                    Qoshimcha
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="orderListName">
                                    Buyurtma holati
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="orderListName">
                                    Harakat
                                </div>
                            </div>
                        </div>
                        <>
                            {
                                orderList.length>0? <>{orderList.map((item)=>{
                                    let date=new Date(item.date.slice(0, 10));
                                    let minut=item.date.slice(11, 13);
                                    let second=item.date.slice(14, 16);
                                    return <div className="row ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/*<div className="ordersN">*/}
                                                {/*    <div className="order-name">*/}
                                                {/*        <span> Buyurtma № </span>122222214421212 <Link to="/">Batafsil</Link>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                <div className="order-time">
                                                    <span>  Buyurtma vaqti : </span>{date.getMonth()} {month(date.getMonth())} {date.getFullYear()} yil {minut}:{second}
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                {/*<div className="marketName">*/}
                                                {/*    <span>Supermarket:</span> tong supermarket*/}
                                                {/*</div>*/}
                                                {/*<div className="goToMarket">*/}
                                                {/*    <div className="goToMarketLink1">*/}
                                                {/*        Dokonga borish*/}
                                                {/*    </div>*/}
                                                {/*    <div className="lines"></div>*/}
                                                {/*    <div className="goToMarketIcon">*/}
                                                {/*        <img src="/images/envelope.svg" alt="no image"/>*/}
                                                {/*    </div>*/}
                                                {/*    <div className="messageSeller">Sotuvchiga xabar</div>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div className="col-md-2">
                                                <div className="price">
                                                    <p>Narxi:</p>
                                                    <p>{item.price} sum</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="product">
                                                    <div className="productLeft">
                                                        <div className="productImg">
                                                            <img src={item.photo_list[0].url} alt={item.photo_list[0].alt_name}/>
                                                        </div>
                                                    </div>
                                                    <div className="productRight">
                                                        <div className="productText">
                                                            {parse(item.description_uz)}
                                                        </div>
                                                        <div className="productPrice">
                                                            {item.price} sum
                                                        </div>
                                                        <div className="detailDiv">
                                                            {item.value.map((value)=>{
                                                                return <div className="d-block">
                                                                    <div className="d-inline-block mr-2 ">{detailTanlash(value.detail_id, item.detail)} :</div>
                                                                    <div className="d-inline-block text-black-50">{value.value_uz}</div>
                                                                    {/*<div className="d-inline-block">{valueTanlash(value.detail_id).map((value)=>{*/}
                                                                    {/*    return <div className=" mr-2 d-inline-block text-black-50">{value},</div>*/}
                                                                    {/*})}</div>*/}
                                                                </div>
                                                            })}
                                                        </div>
                                                        <div className="delivery">
                                                            <div className="previousIcon">
                                                                <img src="/images/previous.svg" alt="no image"/>
                                                            </div>
                                                            <div className="deliveryIcon">
                                                                <img src="/images/delivery (1).svg" alt="no image"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">

                                            </div>
                                            <div className="col-md-2">
                                                <div className="deliveryTimeOut">
                                                    <div className={`mobilVersion mt-4 ${item.status===1? "yellow": item.status===2? "green": ""}`}>
                                                        {item.status===0? "Tolov kutilmoqda": item.status===1? "Yetkazib berish kutilmoqda" : item.status=== 2? "Yetkazib berildi": ""}
                                                    </div>
                                                    <div className="timeOut">
                                                        <div className="timeOutIcon">
                                                            <img src="/images/oclock.svg" alt="no images"/>
                                                        </div>
                                                        <div className="timeOutText">
                                                            Yetkazib berish
                                                        </div>
                                                        <div className="timeOutDate">
                                                            7 kun 7 soat 8 daqiqa
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="movementText">
                                                    Jarayon vaqtini oshirish
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}</>: <div className=" row no">
                                    <div className="col-md-12">
                                        Buyurtmalar mavjud emas
                                    </div>
                                </div>
                            }
                        </>
                    </div>
                </div>
            </div> :<div className="loader">
                <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
            </div>}
        </>
    );
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null) (Orders);