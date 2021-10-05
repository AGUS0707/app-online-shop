import React, {useEffect, useState} from 'react';


import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {set_state1} from "../../redux/actions/productAction";
import {set_state} from "../../redux/actions/categoryAction";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

import parse from 'html-react-parser';
import {toast} from "react-toastify";
import Cookies from "js-cookie";

import Modal from "../homePage/Main/modal";
import Footer from "../homePage/footer";

const ProductMoreMain = (props) => {

    // const [choose, setChoose] = useState(false)
    // const [detail, setDetail] = useState("")
    // const [counter, setCounter] = useState(0)
    const [check, setCheck] = useState(false)
    const [sign, setSign]=React.useState(true);
    const [modal, setModal]=useState(false);

    let detailLists = [];
    let valueLists = [];
    let user = JSON.parse(localStorage.getItem("user"))

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const [url, setUrl] = useState("/images/like.png")

    let defaultprice = props.oneProduct.price
    let data = JSON.parse(localStorage.getItem('user'))
    let boolean = localStorage.getItem("boolean")

    let valueListThis=[];
    function choosevalue(valueid, detailid, count) {

        props.set_state1({checkdetval: false})

        props.detailList.forEach((item)=>{

            // if (item.checked){
            //     valueLength = valueLength.concat(item)
            // }

            if (detailid === item.detail_id){
                let newArray= {
                    ...item,
                    checked: true
                }
                detailLists = detailLists.concat(newArray)
                props.set_state1({detailList:detailLists})
            } else {
                detailLists = detailLists.concat(item)
                props.set_state1({detailList:detailLists})
            }

        })

        props.valueList.forEach((item1)=>{

            if (valueid === item1.value_id){
                let newArray1= {
                    ...item1,
                    checked: true
                }
                valueLists = valueLists.concat(newArray1)
                // props.setValueLists(valueLists)
                props.set_state1({valueList: valueLists})
            } else if (item1.det_id === detailid.toString()){
                let newArray1= {
                    ...item1,
                    checked: false
                }
                valueLists = valueLists.concat(newArray1)
                props.set_state1({valueList: valueLists})
            } else {
                valueLists = valueLists.concat(item1)
                props.set_state1({valueList: valueLists})
            }
        })

        valueListThis=valueListThis.concat(valueid);


    }

    function url1(id) {
        props.photo_list.map((item)=>{
            return item.id === id ? props.set_state1({onePhoto_list: item.url}) : ""
        })
    }

    function aa(id, user_id) {
        window.scrollTo(0, 0)

        props.set_state1({checkdetval: false})

        localStorage.setItem("id", JSON.stringify({
            id: id,
            user_id: user_id
        }))
        props.product.forEach(( item)=>{
            if (id===item.id){
                props.set_state1({oneProduct: item, photo_list: item.photo_list, onePhoto_list:item.photo_list[0].url, htmlString: item.description_uz, valueList: item.value, detailList: item.detail})
                // console.log(item.min_order)
                props.setCount1(parseFloat(item.min_order))
                props.setPrice(item.price * item.min_order)
            }
        })

        let recProduct1 = []
        let selProduct1 = []

        props.product.filter((item)=>{
            if (item.user_id === JSON.parse(localStorage.getItem("id")).user_id && recProduct1.length < 3 && JSON.parse(localStorage.getItem("id")).id!==item.id){
                // toast.success("asdf")
                recProduct1 = recProduct1.concat(item)
                // toast.success("asdf")
                // console.log(recProduct)
            }

            if (item.user_id === JSON.parse(localStorage.getItem("id")).user_id && selProduct1.length < 5){
                selProduct1 = selProduct1.concat(item)
                // toast.success("asdf")
            }

            props.set_state1({recProduct: recProduct1})
            props.set_state1({selProduct: selProduct1})
        })

    }

    const [buyValue, setBuyValue] = useState([])
    const [cartValue, setCartValue] = useState([])
    // const [cartDetail, setCart] = useState([])
    const [cartDetail, setCartDetail] = useState([])
    // const [checkdetval, setCheckdetval] = useState(false)

    const openModal=()=>{
        props.setModal(true)
    };
    const registrClick=()=>{
        openModal();
        setSign(false)
    };

    let buyV = []
    let cartV = []
    let cartD = []

    function handleInput() {

        if (props.userCheck){
            props.valueList.forEach((item)=>{
                    if (item.checked){
                        // console.log(item)
                        buyV = buyV.concat(item)
                        setBuyValue(buyV)
                    }
                    const product={
                        amount:props.oneProduct.amount,
                        brand_name:props.oneProduct.brand_name,
                        detail: props.detailList,
                        id: props.oneProduct.id,
                        min_order: props.oneProduct.min_order,
                        price: props.oneProduct.price,
                        product_ru: props.oneProduct.product_ru,
                        product_uz: props.oneProduct.product_uz,
                        user_id: props.oneProduct.user_id,
                        value: buyV,
                        xarakteristika: props.oneProduct.xarakteristika,
                        count: props.count1
                    }
                    localStorage.setItem("product", JSON.stringify(product))
                    if (product.value.length == props.detailList.length){
                        props.history.push("/product/buynow")
                        props.set_state1({checkdetval: false})
                    } else {
                        props.set_state1({checkdetval: true})
                    }
                })

        } else {
            // toast.error("Login qiling")
            registrClick()
        }
    }



    return (
           <div>
               <div className="container productmain p-0">
                   <div className="row roww">
                       <div className="col-4">
                           <div className="card border-0">
                               <img src={props.onePhoto_list} style={{height: "450px"}} className="w-100 card-img-top" alt=""/>
                               <div className="card-body">
                                   <div className="d-flex align-items-center justify-content-center py-3">
                                       {
                                           props.photo_list.map((item, index)=>{
                                               return  <div className={`card1 ${props.onePhoto_list === item.url ? "active" : ""}`}
                                                            onMouseOver={()=>url1(item.id)}>
                                                   <img src={item.url} width="50"  height="50" alt=""/>
                                               </div>
                                           })
                                       }
                                   </div>


                               </div>
                           </div>
                       </div>
                       <div className="col-6">


                           {/*<div className="d-flex align-items-center">*/}
                           {/*    <span className="icon icon-stars1"></span>*/}
                           {/*    <span className="icon icon-stars1"></span>*/}
                           {/*    <span className="icon icon-stars1"></span>*/}
                           {/*    <span className="icon icon-stars1"></span>*/}
                           {/*    <span className="icon icon-stars1"></span>*/}

                           {/*    <p className="mb-0">1 Reviews</p>*/}

                           {/*    <h4 className="mb-0">6 ta buyurtma</h4>*/}
                           {/*</div>*/}

                           {/*<div className="line"></div>*/}

                           <h3>

                               {
                                   props.oneProduct.product_uz
                               }

                           </h3>



                           <p className="mb-3 ml-0">{parse(props.htmlString)}</p>


                           {/*<p style={{fontSize: "25px"}}>{props.oneProduct.price} so'm</p>*/}

                           {
                               props.detailList.map((item, index)=>{
                                   return <div>
                                       <h5>{item.detail_uz}:</h5>

                                       <div className="row p-0">
                                           {
                                               props.valueList.map((item1)=>{
                                                   return item.detail_id == item1.det_id ? <div className="col-2">
                                                       <div className={`cpu ${item1.checked ? "activecpu" : ""}`} onClick={(valueid, detailid, count)=>choosevalue(item1.value_id, item.detail_id, index)}><h6>{item1.value_uz}</h6></div>
                                                   </div> : ""

                                               })
                                           }
                                       </div>
                                   </div>
                               })
                           }


                           <div className="count">
                               <h3>Quantity:</h3>
                               <div className="d-flex align-items-center">
                                   <div className="minus" onClick={() => {
                                       if (props.count1 > props.oneProduct.min_order) {
                                           props.setCount1(props.count1 - 1)
                                           props.setPrice(props.price - defaultprice)
                                       }

                                   }}><span className={`icon icon-minus ${props.count1 == props.oneProduct.min_order ? "nodrop" : "pointer"}`}></span></div>
                                   <h4>{props.count1}</h4>
                                   <div className="minus" onClick={() => {
                                       props.setCount1(props.count1 + 1)
                                       props.setPrice(defaultprice * (props.count1 + 1))
                                   }}><span className="icon icon-plus"></span></div>


                                   <p>{props.price} so'm</p>


                               </div>
                           </div>

                           <div className="price">
                               <h1>Shipping: {props.price} so'm.</h1>
                               <h2>Estimated Delivery: 1 - 2 clock</h2>
                           </div>


                           <div className="buy d-flex align-items-center">
                               <div className="buynow d-flex align-items-center justify-content-center" onClick={handleInput}>
                                   {/*<Link to={`/product/buynow`} className="text-decoration-none"><p>Buy Now</p></Link>*/}
                                   <p>Buy Now</p>
                                   <div className={`validationText ${props.checkdetval ? "validationTextBlock" : ""}`}>
                                       <button>Mahsulotning turlarini to'liq tanlang!</button>
                                   </div>
                               </div>
                               <div className="addcart d-flex align-items-center justify-content-center" onClick={()=>{

                                   if (props.userCheck){

                                       props.valueList.forEach((item)=>{
                                           if (item.checked){
                                               cartV = cartV.concat(item.value_id.toString())
                                               setCartValue(cartV)
                                           }
                                       })
                                       props.detailList.forEach((item)=>{
                                           cartD = cartD.concat(item.detail_id.toString())
                                           setCartDetail(cartD)
                                       })
                                       const product1={
                                           user_id: data.id,
                                           amount: props.count1,
                                           product_id: props.oneProduct.id,
                                           detail_id: cartD,
                                           value_id: cartV,
                                       }
                                       if (product1.value_id.length === props.detailList.length){
                                           props.set_state1({checkdetval: false})
                                           axios.post(API_PATH + "crcart", product1, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                                               .then((res)=>{
                                                   axios.post(API_PATH+'cart', {id: user.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
                                                       props.set_state({countCart: response.data.length})
                                                   })
                                                   toast.success("Qo'shildi")
                                               })

                                           console.log(product1)

                                       } else {
                                           props.set_state1({checkdetval: true})
                                       }
                                   } else {
                                       registrClick()
                                   }
                               }}>
                                   <p>Add to Cart</p>

                               </div>
                               <div className="like d-flex align-items-center justify-content-center" onClick={() => {
                                   if (url === "/images/like.png") {
                                       setUrl("/images/like2.png")
                                   } else {
                                       setUrl("/images/like.png")
                                   }
                               }}>
                                   <div className="d-flex align-items-center justify-content-center">
                                       <img src={url} className="mr-1" alt=""/>
                                       100
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-2">
                           <p className="text-center">Recomended For <br/> You</p>
                           {
                               props.recProduct.map((item)=>{
                                   return <>
                                       <Link
                                           className="text-decoration-none"
                                           to={"/product/view/" + generateUrl(item.product_uz)}
                                           onClick={(id, user_id)=>aa(item.id, item.user_id)}
                                       >
                                           <div className="d-flex align-items-center justify-content-center">
                                               <div className="card border-0 mb-2 bg-light" style={{width: "150px"}}>
                                                   <div className="card-body py-2">
                                                       <div className="d-flex align-items-center justify-content-center">
                                                           <img src={item.photo_list[0].url} width="120" height="120" alt=""/>
                                                       </div>
                                                       <h5 className="text-center mt-2">{item.price} so'm</h5>
                                                   </div>
                                               </div>
                                           </div>
                                       </Link>
                                   </>
                               })
                           }

                           {/*<div className="d-flex align-items-center justify-content-center mt-3">*/}
                           {/*    <img src="/images/cardimg.webp" width="120" height="120" alt=""/>*/}
                           {/*</div>*/}
                           {/*<h5 className="text-center mt-2">22 494,58 rubl.</h5>*/}
                           {/*<div className="d-flex align-items-center justify-content-center mt-3">*/}
                           {/*    <img src="/images/cardimg.webp" width="120" height="120" alt=""/>*/}
                           {/*</div>*/}
                           {/*<h5 className="text-center mt-2">22 494,58 rubl.</h5>*/}
                       </div>
                   </div>


                   <Modal history={props.history} setSign={setSign} sign={sign} modal={props.modal} setModal={props.setModal}/>

               </div>
               <div className="productmainmedia pt-3">

                  <div className="d-flex align-items-center justify-content-center">
                      <div className="w-75">
                          <div className="card border-0">
                              <img src={props.onePhoto_list} className="w-100 card-img-top" alt=""/>
                              <div className="card-body">
                                  <div className="d-flex align-items-center justify-content-center py-3">
                                      {
                                          props.photo_list.map((item, index)=>{
                                              return  <div className={`card1 ${props.onePhoto_list === item.url ? "active" : ""}`}
                                                           onMouseOver={()=>url1(item.id)}>
                                                  <img src={item.url} width="50"  height="50" alt=""/>
                                              </div>
                                          })
                                      }
                                  </div>


                              </div>
                          </div>
                      </div>
                  </div>
                   <div className="col-66">


                       {/*<div className="d-flex align-items-center">*/}
                       {/*    <span className="icon icon-stars1"></span>*/}
                       {/*    <span className="icon icon-stars1"></span>*/}
                       {/*    <span className="icon icon-stars1"></span>*/}
                       {/*    <span className="icon icon-stars1"></span>*/}
                       {/*    <span className="icon icon-stars1"></span>*/}

                       {/*    <p className="mb-0">1 Reviews</p>*/}

                       {/*    <h4 className="mb-0">6 ta buyurtma</h4>*/}
                       {/*</div>*/}

                       {/*<div className="line"></div>*/}

                       <h3 className="text-center">

                           {
                               props.oneProduct.product_uz
                           }

                       </h3>

                       <div className="py-3">
                           <div className="">
                               <div className="">
                                   <p><b>category Name:</b> {props.oneProduct.category_uz}</p>
                               </div>
                               <div className="">
                                   <p><b>Brand Name:</b> {props.oneProduct.brand_name}</p>
                               </div>
                               <div className="">
                                   <p><b>Xarakteristika:</b> {props.oneProduct.xarakteristika}</p>
                               </div>
                           </div>
                       </div>


                       <p className="mb-3 ml-0">{parse(props.htmlString)}</p>

                       {/*<p style={{fontSize: "25px"}}>{props.oneProduct.price} so'm</p>*/}

                       {
                           props.detailList.map((item, index)=>{
                               return <div className="detailsmedia">
                                   <h5>{item.detail_uz}:</h5>

                                   <div className="p-0 d-flex align-items-center">
                                       {
                                           props.valueList.map((item1)=>{
                                               return item.detail_id == item1.det_id ? <div className="ml-2">
                                                   <div className={`cpu ${item1.checked ? "activecpu" : ""}`} onClick={(valueid, detailid, count)=>choosevalue(item1.value_id, item.detail_id, index)}><h6>{item1.value_uz}</h6></div>
                                               </div> : ""

                                           })
                                       }
                                   </div>
                               </div>
                           })
                       }


                       <div className="count">
                           <h3>Quantity:</h3>
                           <div className="d-flex align-items-center">
                               <div className="minus" onClick={() => {
                                   if (props.count1 > props.oneProduct.min_order) {
                                       props.setCount1(props.count1 - 1)
                                       props.setPrice(props.price - defaultprice)
                                   }

                               }}><span className={`icon icon-minus ${props.count1 == props.oneProduct.min_order ? "nodrop" : "pointer"}`}></span></div>
                               <h4>{props.count1}</h4>
                               <div className="minus" onClick={() => {
                                   props.setCount1(props.count1 + 1)
                                   props.setPrice(defaultprice * (props.count1 + 1))
                               }}><span className="icon icon-plus"></span></div>


                               <p className="mb-0">{props.price} so'm</p>


                           </div>
                       </div>

                       <div className="price">
                           <h1>Shipping: {props.price} so'm.</h1>
                           <h2>Estimated Delivery: 1 - 2 clock</h2>
                       </div>


                       <div className="buy d-flex align-items-center">
                           <div className="buynow d-flex align-items-center justify-content-center" onClick={handleInput}>
                               {/*<Link to={`/product/buynow`} className="text-decoration-none"><p>Buy Now</p></Link>*/}
                               <div className="d-flex align-items-center justify-content-center">
                                   <p className="mb-0">Buy Now</p>
                               </div>
                               <div className={`validationText ${props.checkdetval ? "validationTextBlock" : ""}`}>
                                   <button>Mahsulotning turlarini to'liq tanlang!</button>
                               </div>
                           </div>
                           <div className="addcart d-flex align-items-center justify-content-center" onClick={()=>{

                               if (props.userCheck){

                                   props.valueList.forEach((item)=>{
                                       if (item.checked){
                                           cartV = cartV.concat(item.value_id.toString())
                                           setCartValue(cartV)
                                       }
                                   })
                                   props.detailList.forEach((item)=>{
                                       cartD = cartD.concat(item.detail_id.toString())
                                       setCartDetail(cartD)
                                   })
                                   const product1={
                                       user_id: data.id,
                                       amount: props.count1,
                                       product_id: props.oneProduct.id,
                                       detail_id: cartD,
                                       value_id: cartV,
                                   }
                                   if (product1.value_id.length === props.detailList.length){
                                       props.set_state1({checkdetval: false})
                                       axios.post(API_PATH + "crcart", product1, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                                           .then((res)=>{
                                               axios.post(API_PATH+'cart', {id: user.id}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
                                                   props.set_state({countCart: response.data.length})
                                               })
                                               toast.success("Cartga muvaffaqiyatli qo'shildi")
                                               console.log("qoshildi")
                                               props.setCheckToast(true)
                                           })

                                       // console.log(product1)

                                   } else {
                                       props.set_state1({checkdetval: true})
                                   }
                               } else {

                                   registrClick()
                                   // props.setOpen(false)


                               }
                           }}>
                               <p className="mb-0">Add to Cart</p>

                           </div>
                           {/*<div className="like d-flex align-items-center justify-content-center" onClick={() => {*/}
                           {/*    if (url === "/images/like.png") {*/}
                           {/*        setUrl("/images/like2.png")*/}
                           {/*    } else {*/}
                           {/*        setUrl("/images/like.png")*/}
                           {/*    }*/}
                           {/*}}>*/}
                           {/*    <div className="d-flex align-items-center justify-content-center">*/}
                           {/*        <img src={url} className="mr-1" alt=""/>*/}
                           {/*        100*/}
                           {/*    </div>*/}
                           {/*</div>*/}
                       </div>
                   </div>
                   <Modal history={props.history} setSign={setSign} sign={sign} modal={props.modal} setModal={props.setModal}/>

               </div>
           </div>

    );
};

const mapStateToProps = (state) => {
    return{
        oneProduct: state.product.oneProduct,
        product: state.product.product,
        photo_list: state.product.photo_list,
        url: state.product.url,
        htmlString: state.product.htmlString,
        onePhoto_list: state.product.onePhoto_list,
        detailList: state.product.detailList,
        valueList: state.product.valueList,
        recProduct: state.product.recProduct,
        selProduct: state.product.selProduct,
        valueLength: state.product.valueLength,
        checkdetval: state.product.checkdetval,
        userCheck: state.userCheckReducer.userCheck



    }
}

export default connect(mapStateToProps, {set_state1, set_state})(ProductMoreMain) ;