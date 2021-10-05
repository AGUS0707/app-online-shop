import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {connect} from "react-redux";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";

const Orders = (props) => {
    useEffect(()=>{
        axios.post(API_PATH+'orderseller', {id:props.userReducer.userObject.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
           setOrderList(response.data);
           console.log(response.data);
           setLoad(true);
        })
    }, []);
    const [load, setLoad]=useState(false);
    const [orderList, setOrderList]=useState([]);
    const [product, setProduct]=useState({
       product_uz:"",
       amount:"",
       price:"",
        date:""
    });
    console.log(new Date(product.date).getTime());
    function handleInputChange(e) {
        let newObject={
            ...product,
            [e.target.name]:e.target.value
        };
        setProduct(newObject);
    }
    function filterList() {
        axios.post(API_PATH+'orderseller', {id:props.userReducer.userObject.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            let newArray=[];
            newArray=response.data.filter((item)=>{
                let date=new Date(item.date.slice(0, 10)).getTime();
                if (product.date!==""){
                    if (item.product_uz.includes(product.product_uz)&&item.amount.includes(product.amount)&&item.price.includes(product.price)&& new Date(product.date).getTime()<date){
                        return item;
                    }
                }else {
                    if (item.product_uz.includes(product.product_uz)&&item.amount.includes(product.amount)&&item.price.includes(product.price)){
                        return item;
                    }
                }
            });
            console.log(newArray);
            setOrderList(newArray);
        })
    }
    return (
       <>
           {load?<div className="order">
               <div className="orderHeader d-flex justify-content-between">
                   <div className="orderHeaderLeft d-flex align-items-center">
                       <h2>Buyurtmalar</h2>
                       <div className="homeIcon">
                           <img src="/images/home.svg" alt="no image"/>
                       </div>
                       <div className="nextIcon">
                           <img src="/images/next.svg" alt="no image"/>
                       </div>
                       <Link to="/seller/orders">Buyurtmalar</Link>
                   </div>
                   <div className="orderHeaderRight d-flex justify-content-end">

                   </div>
               </div>
               <hr/>
               <div className="orderMain">
                   <div className="orderList">
                       <div className="row">

                           <div className="col-md-9">
                               <div className="orderListHeader d-flex">
                                   <img src="/images/options-lines.svg" alt="no images"/>
                                   <h4>Buyurtmalar</h4>
                               </div>
                               <div className="orderListTable">
                                   <table className="table table-bordered">
                                       <thead>
                                       <tr>
                                           <th className="text-left">№</th>
                                           <th className="text-center">Rasmlar</th>
                                           <th className="text-left">Nomi</th>
                                           <th className="text-left">Narxi</th>
                                           <th className="text-left">Soni</th>
                                           <th className="text-left">Chegirma</th>
                                       </tr>
                                       </thead>
                                       {orderList.length!==0? <tbody>
                                       {orderList.map((item, index)=>{
                                           return <tr key={index}>
                                               <td className="text-left">{index+1}</td>
                                               <th className="text-center brand-img">
                                                   <img src={item.photo_list[0].url} alt={item.photo_list[0].alt_name}/>
                                               </th>
                                               <td className="text-left ">{item.product_uz}</td>
                                               <td className="text-left ">{item.price}</td>
                                               <td className="text-left">{item.amount}</td>
                                               <td className="text-left">{item.sale_price} %</td>
                                           </tr>
                                       })}
                                       </tbody> :<tr> <td colSpan={"6"} className="text-center">Hech narsa topilmadi</td></tr>}
                                   </table>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="filterContent">
                                   <div className="filterHeader d-flex">
                                       <img src="/images/filtr.png" alt="no image"/>
                                       <h3>Filterlash</h3>
                                   </div>
                                   <div className="filterMain">
                                       <div className="filterForm">
                                           <label htmlFor="reklama">Brand nomi
                                               <input type="text" placeholder="Buyurtma nomi" onChange={handleInputChange} name="product_uz" id="reklama" className="form-control"/>
                                           </label>
                                           <hr/>
                                           <label htmlFor="price">Narxi
                                               <input type="text" placeholder="Narxi" onChange={handleInputChange} name="price" id="reklama" className="form-control"/>
                                           </label>
                                           <hr/>
                                           <label htmlFor="amount">Soni
                                               <input type="text" placeholder="Narxi" onChange={handleInputChange} name="amount" id="reklama" className="form-control"/>
                                           </label>
                                           <hr/>
                                           <label htmlFor="date">
                                               Sana
                                               <input type="date" onChange={handleInputChange} id="date" name="date" className="form-control"/>
                                           </label>
                                           <hr/>
                                           <div className="filterButton d-flex justify-content-end">
                                               <button onClick={filterList}  className="btn d-flex align-items-center">
                                                   <img src="/images/filtr.png" alt="no image"/>
                                                   Filtrlash
                                               </button>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>:<div className="vh-100 d-flex align-items-center justify-content-center">
               <div className="d-flex align-items-center justify-content-center">
                   <img src="/images/loading.gif" width="120" height="120" alt=""/>
               </div>
           </div>}
       </>
    );
};
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, null) (Orders);