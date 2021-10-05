import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../../../tools/constants";
import AdminLayout from "../../AdminLayout";
import {connect} from "react-redux";
import Cookies from "js-cookie";
import {SET_STATE, SET_STATE1} from "../../../../redux/types/Type";


function Products(props) {
    const [product, setProduct] = useState([])
    let user=props.userReducer.userObject;
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
       if (user.role_id === "1"){
           axios.get(API_PATH+'product').then((response)=>{
               // setProduct(response.data)
               props.set_state1({product: response.data})
               // console.log(product)
           })
       }
        console.log(product)
    }, [])

    function oldProductFunction(id) {
        let updateProduct;
        let valueArray=[];
        props.productListReducerSeller.productList.forEach((item)=>{
            if (item.id===id){
                item.value.forEach((item2)=>{
                    valueArray=valueArray.concat(item2.value_id.toString());
                });
                localStorage.setItem('sellerEditProductId', JSON.stringify(item.id));
                localStorage.setItem('valueChangeList', JSON.stringify(valueArray));
                updateProduct=item
            }
        });
        props.editValueChangeList(valueArray);
        props.updateProduct(updateProduct)
    }

    const changeFilterProduct=(e)=>{
        let newObject={
            ...product,
            [e.target.name]:e.target.value
        };
        setProduct(newObject)
    };

    const productFilterListFunction=()=>{
        axios.post(API_PATH+'filter', product, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            props.updateProductList(response.data);
            setLoader(false)
        })
    };

    return (
        <AdminLayout history={props.history}>
            <div className="productsss">

                {
                    props.history.location.pathname === "/admin/product/products" ? <div className="productHeader d-flex justify-content-between">
                        <div className="productHeaderLeft d-flex align-items-center">
                            <h2>Tovarlar</h2>
                            <Link to="/admin/profile">
                                <div className="homeIcon">
                                    <img src="/images/home.svg" alt="no image"/>
                                </div>
                            </Link>
                            <div className="nextIcon">
                                <img src="/images/next.svg" alt="no image"/>
                            </div>
                            <Link to="/admin/product/products">tovarlar</Link>
                        </div>
                        <div className="productHeaderRight d-flex justify-content-end">
                            <div className="productHeaderRightContent d-flex ">
                                {/*{buttonReturn()}*/}
                                <Link to="/admin/product/products/add">
                                    <span className="img"></span>
                                </Link>
                                <Link>
                                    <span className="img"></span>
                                </Link>
                                <Link>
                                    <span className="img"></span>
                                </Link>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/product/products" ? <hr/> : ""
                }

                {
                    props.history.location.pathname === "/admin/product/products" ?  <div className="productMain">
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
                                                {/*<th className="text-left"><input type="checkbox" className='form-control'/></th>*/}
                                                <th className="text-center">№</th>
                                                <th className="text-center">Rasmlar</th>
                                                <th className="text-left">Mahsulot nomi</th>
                                                <th className="text-left">Model</th>
                                                <th className="text-right">Saytdagi narx</th>
                                                <th className="text-right">Miqdor</th>
                                                <th className="text-left">Holat</th>
                                                {/*<th>Harakat</th>*/}
                                            </tr>
                                            </thead>
                                            <tbody>
                                           {
                                               props.product.product.map((item, index)=>{
                                                   // console.log(item.photo_list)
                                                   return <tr>
                                                       {/*<td className="text-left"><input type="checkbox" className='form-control'/></td>*/}
                                                       <td className="text-center">{index + 1}</td>
                                                       <td className="text-center"><img src={item.photo_list[0].url} width={"45px"} height={"45px"} alt="no image"/></td>
                                                       <td className="text-left ">{item.product_uz}</td>
                                                       <td>{item.brand_name}</td>
                                                       <td className="text-right">
                                                           <div>{item.price} so'm</div>
                                                           {/*<div>100$</div>*/}
                                                       </td>
                                                       <td className="text-right">{item.amount}</td>
                                                       <td className="text-left">Kiritilgan</td>
                                                       {/*<td><Link to="/admin/product/products/edit" onClick={()=>oldProductFunction(item.id)}><span className="editIcon"></span></Link></td>*/}
                                                   </tr>
                                               })
                                           }
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
                                                    <input type="text" placeholder="Model" onChange={changeFilterProduct} name="brand_name" id="kuzatuv_kodi" className="form-control"/>
                                                </label>
                                                <hr/>
                                                <label htmlFor="kuzatuv_kodi">Narx
                                                    <input type="text" placeholder="narx" onChange={changeFilterProduct} name="price" id="kuzatuv_kodi" className="form-control"/>
                                                </label>
                                                <hr/>
                                                <label htmlFor="category"> Category
                                                    <input type="text" placeholder={"category"} onChange={changeFilterProduct} name="category_uz" id="category" className="form-control" />
                                                </label>
                                                <hr/>
                                                <label htmlFor="date">
                                                    Sana
                                                    <input type="date" name="date" id="date" onChange={changeFilterProduct} className="form-control"/>
                                                </label>
                                                <hr/>
                                                <div className="filterButton d-flex justify-content-end">
                                                    <button className="btn d-flex align-items-center" onClick={productFilterListFunction}>
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

                    </div> : ""
                }

                {props.children}

            </div>
        </AdminLayout>
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
        },
        updateValueList:function (valueList) {
            dispatch({
                type: "VALUE_UPDATE_LIST",
                payload:valueList
            })
        },
        editValueChangeList:function (valueList) {
            dispatch({
                type: "VALUE_UPDATE_LIST",
                payload:valueList
            })
        },
        set_state1 : function (data) {
            dispatch({
                type: SET_STATE1,
                payload: data
            })

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products) ;