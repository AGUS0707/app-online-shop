import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

function ProductList(props) {
    useEffect(()=>{
        axios.post(API_PATH+"slproduct", {user_id:props.userReducer.userObject.id}).then((res)=>{
            props.updateProductList(res.data);
            console.log(res);
        });
        axios.get(API_PATH+'categorys').then((response)=>{

        });
    }, []);
    const [categoryList, setCategoryList]=useState([]);
    const [product, setProduct]=useState({
       product_uz:"",
       brand_uz:"",
       price:"",
       amount:"",
       category_uz:""
    });
    const changeFilterProduct=(e)=>{
        let newObject={
            ...product,
            [e.target.name]:e.target.value
        };
        setProduct(newObject)
    };
    const productFilterList=()=>{
        // let newArray=[];
        // newArray=props.productListReducerSeller.productList.filter((item)=>{
        //     if (item.product_uz.toUpperCase().includes(product.product_uz.toUpperCase())&&item.brand_uz.toUpperCase().includes(product.brand_uz.toUpperCase())&&item.price.toUpperCase().includes(product.price.toUpperCase())&&item.amount.toUpperCase().includes(product.amount.toUpperCase())&&item.category_uz.toUpperCase().includes(product.category_uz.toUpperCase())){
        //         return item
        //     }
        // });
        // props.updateProductList(newArray);
    };
    function oldProductFunction(id) {
        let updateProduct;
        props.productListReducerSeller.productList.forEach((item)=>{
            if (item.id===id){
                updateProduct=item
            }
        });
        props.updateProduct(updateProduct)
    }
    function productClear(){
        props.clearProductRedux({
            product_uz:"",
            product_ru:"",
            price:"",
            sale_price:"",
            xarakteristika:"",
            amount:"",
            min_order:"",
            serial_number: "",
            brand_id:"",
            category_id:"",
            is_sale:"",
            description_uz:"",
            description_ru:""
        });
    };
    const [productIdList, setProductIdList]=useState([]);

    function checkChange(e){
        let inputList=document.querySelectorAll('.input');
       if (e.target.id==="bosh"){
            if (e.target.checked===true){
                let a=[];
               inputList.forEach((item)=>{
                   item.checked=true;
                   a=a.concat(item.id)
               });
               setProductIdList(a)
            }
            if (e.target.checked===false){
                inputList.forEach((item)=>{
                    item.checked=false
                })
                setProductIdList([]);
            }
       }else {
           if (e.target.checked===true){
               props.productListReducerSeller.productList.forEach((item)=>{
                   if (e.target.id==item.id){
                       let a=[];
                       a=productIdList.concat(e.target.id);
                       setProductIdList(a);
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
    };
    console.log(productIdList);
    function deleteProducts() {
        axios.post(API_PATH+'delproduct', {product_id:productIdList}).then((response)=>{
            console.log(response)
            axios.post(API_PATH+"slproduct", {user_id:props.userReducer.userObject.id}).then((res)=>{
                props.updateProductList(res.data);
            });
        })
    }
    return (
        <div className="product">
            <div className="productHeader d-flex justify-content-between">
                <div className="productHeaderLeft d-flex align-items-center">
                    <h2>Tovarlar</h2>
                    <div className="homeIcon">
                        <img src="/images/home.svg" alt="no image"/>
                    </div>
                    <div className="nextIcon">
                        <img src="/images/next.svg" alt="no image"/>
                    </div>
                    <Link to="/">tovarlar</Link>
                </div>
                <div className="productHeaderRight d-flex justify-content-end">
                    <div className="productHeaderRightContent d-flex ">
                        <Link to="/seller/products/form"  onClick={productClear}  className="plusImg">
                            <span className="img"></span>
                        </Link>
                        <Link className="copyImg">
                            <span className="img"></span>
                        </Link>
                        <Link className="deleteImg" onClick={deleteProducts}>
                            <span className="img"></span>
                        </Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="productMain">
                <div className="productList">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="productListHeader d-flex">
                                <img src="/images/options-lines.svg" alt="no images"/>
                                <h4>Tovarlar</h4>
                            </div>
                            <div className="productListTable">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th className="text-left"><input type="checkbox"  onChange={checkChange} id="bosh" className='form-control'/></th>
                                        <th className="text-center">Rasmlar</th>
                                        <th className="text-left">Mahsulot nomi</th>
                                        <th className="text-left">Brand</th>
                                        <th className="text-right">Saytdagi narx</th>
                                        <th className="text-right">Miqdor</th>
                                        <th className="text-left">Category</th>
                                        <th>Harakat</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.productListReducerSeller.productList.map((item)=>{
                                        return <tr>
                                            <td className="text-left"><input onChange={checkChange} id={item.id} type="checkbox" className="form-control input" /></td>
                                            <td className="text-center"><img src={item.photo_list[0].url} width={"45px"} height={"45px"} alt={item.photo_list[0].alt_name}/></td>
                                            <td className="text-left ">{item.product_uz}</td>
                                            <td>{item.brand_uz}</td>
                                            <td className="text-right">
                                                <div>{item.price}</div>
                                                <div>{item.price}</div>
                                            </td>
                                            <td className="text-right">{item.amount}</td>
                                            <td className="text-left">{item.category_uz}</td>
                                            <td><Link to="/seller/products/form/edit" onClick={()=>oldProductFunction(item.id)}><span className="editIcon"></span></Link></td>
                                        </tr>
                                    })}
                                    </tbody>
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
                                        <label htmlFor="reklama">Mahsulot  nomi
                                            <input type="text" placeholder="Mahsulot   nomi" onChange={changeFilterProduct} name="product_uz" id="reklama" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="kuzatuv_kodi">Brand
                                            <input type="text" placeholder="Model" onChange={changeFilterProduct} name="brand_uz" id="kuzatuv_kodi" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="kuzatuv_kodi">Narx
                                            <input type="text" placeholder="narx" onChange={changeFilterProduct} name="price" id="kuzatuv_kodi" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="kuzatuv_kodi">Miqdor
                                            <input type="text" placeholder="miqdor" onChange={changeFilterProduct} name="amount" id="kuzatuv_kodi" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="category"> Category
                                            <input type="text" placeholder={"category"} onChange={changeFilterProduct} name="category_uz" id="category"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="date">
                                            Sana
                                            <input type="date" id="date" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <div className="filterButton d-flex justify-content-end">
                                            <button className="btn d-flex align-items-center">
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
        </div>
    );
}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        updateProductList:function (productList) {
            dispatch({
                type:"UPDATE_PRODUCT_LIST",
                payload:productList
            })
        },
        updateProduct: function(product) {
            dispatch({
                type: "UPDATE_PRODUCT",
                payload: product
            })
        },
        clearProductRedux:function (product) {
            dispatch({
                type:"CLEAR_PRODUCT",
                payload:product
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductList);