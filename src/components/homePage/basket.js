import React, {useEffect, useState} from 'react';
import "../../styles/basket.scss";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {connect} from "react-redux";
import parse from 'html-react-parser';
import {toast} from "react-toastify";
import Cookies from "js-cookie";
import Modal from "./Main/modal";
import {ModalBody, Modal as ModalContent, Button} from "reactstrap";
import Loading from "./loading";
function Basket(props) {


    const [productIdList, setProductIdList]=useState([]);
    const [productPriceList, setProductPriceList]=useState([]);
    const [sign, setSign]=React.useState(true);
    const [modal, setModal]=useState(false);
    const [open2, setOpen2] = useState(false);
    const [id, setId] = useState("");
    const openModal=()=>{
        setModal(true)
    };
    const signInClick=()=>{
        openModal();
        setSign(true);
    };
    const registrClick=()=>{
        openModal();
        setSign(false)
    };

    const decrement=(id)=> {
        let newArray;
        newArray=props.shoppingCardListReducer.shoppingCardList.map((item)=>{
            if (item.id===id){
                if (parseInt(item.amount)>parseInt(item.min_order)){
                    let newObject;
                    newObject={
                        ...item,
                        amount:(parseFloat(item.amount)-1).toString()
                    };
                    return newObject
                }
            }
            return item;
        });
        props.shoppingCardListFunction(newArray);
    };
    const increment=(id)=> {
        let newArray;
        newArray=props.shoppingCardListReducer.shoppingCardList.map((item)=>{
            if (item.id===id){
                let newObject;
                newObject={
                    ...item,
                    amount:(parseFloat(item.amount)+1).toString()
                };
                return newObject
            }
            return item;
        });
        props.shoppingCardListFunction(newArray);
    };
    function deleteProductCard() {
        axios.post(API_PATH+'delcart' ,{id:id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            toast.success("Product ochirildi");
            setOpen2(false);
            axios.post(API_PATH+'cart', {id:props.userReducer.userObject.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response1)=>{
                props.shoppingCardListFunction(response1.data);
                props.shoppingCardCountFunction(response1.data.length);
            })
        })
    }

    function checkChange(e){
        let inputList=document.querySelectorAll('.input');
        if (e.target.id==="bosh"){
            if (e.target.checked===true){
                let a=[];
                inputList.forEach((item)=>{
                    item.checked=true;
                    a=a.concat(item.id);
                });
                setProductIdList(a);
            }
            if (e.target.checked===false){
                inputList.forEach((item)=>{
                    item.checked=false
                });
                setProductIdList([]);
            }
        }else {
            if (e.target.checked===true){
                props.shoppingCardListReducer.shoppingCardList.forEach((item)=>{
                    if (e.target.id==item.id){
                        let a=[];
                        let b=[];
                        b=productPriceList.concat(item.price);
                        a=productIdList.concat(e.target.id);
                        setProductIdList(a);
                        setProductPriceList(b);
                    }
                })
            }
            if (e.target.checked===false){
                let newArray=[];
                newArray=productIdList.filter((item)=>{
                    if (e.target.id!==item){
                        return item
                    }
                });
                setProductIdList(newArray)
            }
        }
    }
    function clickInput(e) {
        let inputListRed=document.querySelectorAll('.shoppingProductCheckk');
        if (e.currentTarget.id==="check"){
            console.log(e.target.cloneNode(true));
           if (e.target.checked){
               e.currentTarget.classList.add("checked");
               inputListRed.forEach((item)=>{
                   item.classList.add("shoppingProductChecked")
               })
           }else {
               e.currentTarget.classList.remove("checked");
               inputListRed.forEach((item)=>{
                   item.classList.remove("shoppingProductChecked")
               })
           }
        }else {
            if (e.target.cloneNode(true).checked){
                e.currentTarget.classList.add("shoppingProductChecked");
            }else {
                e.currentTarget.classList.remove("shoppingProductChecked");
            }
        }
    }
    function totalPriceFunction(productIdList) {
        let totalPrice=0;
        props.shoppingCardListReducer.shoppingCardList.forEach((item)=>{
            productIdList.forEach((item2)=>{
                if (item.id==item2){
                    totalPrice=totalPrice+((parseFloat(item.price)-parseFloat(item.price)*parseFloat(item.sale_price)/100)*parseFloat(item.amount))
                }
            })
        });
        return totalPrice
    }
    function validationClassGlobalFunction(){
        let validationClassGlobal=document.querySelector('.validationText');
        if (productIdList.length<=0){
            validationClassGlobal.classList.add("validationTextBlock");
        }else {
            validationClassGlobal.classList.remove("validationTextBlock");
        }
    }
    function purchaseFunctionLocal() {
        if (props.userCheckReducer.userCheck){
            if (productIdList.length>0){
                let newArray=[];
                props.shoppingCardListReducer.shoppingCardList.forEach((item)=>{
                    productIdList.forEach((item2)=>{
                        if (parseInt(item2)===item.id)
                            newArray=newArray.concat(item);
                    })
                });
                localStorage.setItem('shoppingCardList', JSON.stringify(newArray));
                // props.history.push("/home/shopping/orders");
            }
            validationClassGlobalFunction()
        }else {
            setSign(false);
            openModal()
        }
    }
    function decrementMouseOverFunction(min_order, amount, event ) {
        if ( parseInt(amount)>parseInt(min_order)){
            event.target.style.cursor="pointer";
        }else{
            event.target.style.cursor="no-drop";
        }
    }
    return (
        <>
            {props.load?<>
                {props.shoppingCardListReducer.shoppingCardList.length>0? <div className="shoppingCard">
                    <Modal history={props.history} setSign={setSign} sign={sign} modal={modal} setModal={setModal}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="shoppingCardLeft">
                                    <div className="shoppingCardLeftHeader">
                                        <div className="shoppingCardText">
                                            Savatcha
                                        </div>
                                        <div className="shoppingAllSelect d-flex align-items-center">
                                    <span className={`check `}
                                          id={"check"}
                                          onClick={clickInput}>
                                        <span className="checkedImg">
                                            <input  onChange={checkChange} id="bosh" type="checkbox" />
                                        </span>
                                    </span>
                                            <span className="checkText">Hammasini belgilash</span>
                                        </div>
                                    </div>
                                    {props.shoppingCardListReducer.shoppingCardList.map((item)=>{
                                        return  <div className="shoppingCardList">
                                            <div className="shoppingCardItem">
                                                <div
                                                    className="shoppingCardItemHeader d-flex align-items-center justify-content-between">
                                                    <div className="shoppingCardContact d-flex align-items-center">
                                                        <Link to="/" className="contactImg"></Link>
                                                        <span>Aloqa</span>
                                                    </div>
                                                    <div className="shoppingCardContactRight">
                                                        <Link to="/" className="text-decoration-none">Kuponlarni oling</Link>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="shoppingCardItemMain">
                                                    <div className="shoppingCardItemMainLeft d-flex align-items-center">
                                                        <div className="shoppingProductCheck">
                                                <span
                                                    className={`shoppingProductCheckk `}
                                                    onClick={clickInput}>
                                                    <span className="checkedImg">
                                                        <input onChange={checkChange} id={item.id} type="checkbox" className="input"/>
                                                    </span>
                                                </span>
                                                        </div>
                                                        <div className="shoppingProductImg">
                                                            <img src={item.photo_list[0].url} alt={item.photo_list[0].alt_name} className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                    <div className="shoppingCardItemMainCenter">
                                                        <Link  to="/" className="shoppingProductLink"><p>{parse(item.description_uz)}</p></Link>
                                                        <p className="price">{item.price}  sum</p>
                                                        <div className="sale d-flex align-items-center">
                                                            <img
                                                                src="https://ae01.alicdn.com/kf/H360058adc16e44848f39a15e13126760H.png"
                                                                alt="no iamge"/>
                                                            <span className="saleText">
                                                         chegirma narxi: {item.sale_price}
                                                    </span>
                                                        </div>
                                                        <div className="percentSale">
                                                            Har bir sarflangan {item.price} sum ga {item.sale_price} chegirma
                                                        </div>
                                                        <div className="deliveryText">
                                                            <span> Yetkazib berish bepul</span>
                                                            AliExpress standart etkazib berish orqali
                                                            Taxminiy etkazib berish 21 sentyabr
                                                        </div>
                                                    </div>
                                                    <div className="shoppingCardItemMainRight ">
                                                        <div className="deleteHeartIcons d-flex align-items-center">
                                                            <div className="heartIcon">
                                                                <img src="/images/heart.svg" alt="no image"/>
                                                            </div>
                                                            <div className="deleteIcon" onClick={()=>{
                                                                setOpen2(true);
                                                                setId(()=>item.id)
                                                            }}>
                                                                <img src="/images/trash.svg" alt="no images"/>
                                                            </div>
                                                        </div>
                                                        <div className="productCount d-flex align-items-center">
                                                            <button onMouseOver={(event)=>decrementMouseOverFunction(item.min_order, item.amount, event)} onClick={()=>decrement(item.id)}>
                                                                <img src="/images/minus-sign.svg" alt="no images"/>
                                                            </button>
                                                            <span>{item.amount}</span>
                                                            <button onClick={()=>increment(item.id)}>
                                                                <img src="/images/plus.svg" alt="no images"/>
                                                            </button>
                                                        </div>
                                                        <div className="limitText">
                                                            Cheklangan miqdorda
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*<div className="d-flex justify-content-end">*/}
                                                {/*    <button className="purchaseButton">Sotib olish</button>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <div className="payment d-flex align-items-center">
                                    <div className="paymentLeft">
                                        <h4>Tolov usullari</h4>
                                        <div className="paymentIcons  d-flex justify-content-center">
                                            <div className="paymentIconContent d-flex align-items-center">
                                                <div className="paymentIcon">
                                                    <img src="/images/civi.png" alt="no image"/>
                                                </div>
                                                <div className="paymentIcon">
                                                    <img src="/images/uzkart.png" alt="no image"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="paymentRight">
                                        <div className="security d-flex justify-content-center">
                                            <div className="securityContent d-flex align-items-center">
                                                <div className="securityIcon">
                                                    <img src="/images/verified.svg" alt="no image"/>
                                                </div>
                                                <div className="securityText">
                                                    Xaridoe ximoyasi
                                                </div>
                                            </div>
                                        </div>
                                        <div className="securityDescription">
                                            Agar mahsulot tasvirlanganidek bo'lmasa yoki etkazib berilmagan bo'lsa, to'liq qaytarib oling.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="shoppingCardRight">
                                    <h3>Buyurtma haqida qisqacha malumot</h3>
                                    <div className="totalPrice d-flex justify-content-between">
                                        <div className="totalPriceText">
                                            jami:
                                        </div>
                                        <div className="totalPriceNumber">
                                            {totalPriceFunction(productIdList)} sum
                                        </div>
                                    </div>
                                    {/*<div className="deliveryText d-flex justify-content-between">*/}
                                    {/*   <div className="deliveryLeft">*/}
                                    {/*       yuk tashish:*/}
                                    {/*   </div>*/}
                                    {/*    <div className="deliveryRight">*/}
                                    {/*        yetkazib berish 2.63 dollar*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <hr/>
                                    <div className="total d-flex justify-content-between align-items-center">
                                        <div className="totalText">
                                            jami:
                                        </div>
                                        <div className="totalNumber">
                                            {totalPriceFunction(productIdList)} sum
                                        </div>
                                    </div>
                                    <Link to={props.userCheckReducer.userCheck? ( productIdList.length>0? "/home/shopping/orders": "/home/shopping") :  "/home/shopping"} className="totalPurchaseButton">
                                        <button onClick={purchaseFunctionLocal}>Sotib olish ({productIdList.length})</button>
                                    </Link>
                                    <div className="validationText">
                                        <button>Siz hali biror mahsulot tanlamadiz</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ModalContent isOpen={open2} toggle={()=>{setOpen2(false)}}>
                            <ModalBody>
                                <h4 className="text-center">Rostdan ham o'chirmoqchimisiz?</h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button   color="danger" onClick={deleteProductCard}>Ha</Button>
                                    <Button  color="secondary" onClick={()=>setOpen2(false)}>Yo'q</Button>
                                </div>
                            </ModalBody>
                        </ModalContent>
                    </div>
                </div> :<div className="defaultCard">
                    <div className="basketImgDefault">
                        <img src="https://ae01.alicdn.com/kf/H54299297b1594147beb3417b5bab5eacu.png" alt="no image"/>
                    </div>
                    <div className="basketTextDefault">Savatcha bosh</div>

                </div>}
            </> : <Loading/>}
        </>
    );
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        shoppingCardListFunction:function (shopping_list) {
            dispatch({
                type:"SHOPPING_CARD_LIST",
                payload:shopping_list
            })
        },
        shoppingCardListUpdateFunction:function (shopping_list) {
            dispatch({
                type: "UPDATE_SHOPPING_CARD_LIST",
                payload: shopping_list
            })
        },
        shoppingCardCountFunction:function (count) {
            dispatch({
                type:"SHOPPING_CARD_COUNT",
                payload:count
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Basket);