import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

function ProductList(props) {
    const [productList, setProductList]=useState([]);
    useEffect(()=>{
        axios.get(API_PATH+'product').then((response)=>{
            console.log(response);
        })
    }, [])
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
                        {/*{buttonReturn()}*/}
                        <Link to="/seller/products/form">
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
                                        <th className="text-left"><input type="checkbox" className='form-control'/></th>
                                        <th className="text-center">Rasmlar</th>
                                        <th className="text-left">Mahsulot nomi</th>
                                        <th className="text-left">Model</th>
                                        <th className="text-right">Saytdagi narx</th>
                                        <th className="text-right">Miqdor</th>
                                        <th className="text-left">Holat</th>
                                        <th>Harakat</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-left"><input type="checkbox" className='form-control'/></td>
                                        <td className="text-center"><img src="/images/page.webp" width={"45px"} height={"45px"} alt="no image"/></td>
                                        <td className="text-left ">Apple sinema weqfqf</td>
                                        <td>mahsulot 15</td>
                                        <td className="text-right">
                                            <div>99$</div>
                                            <div>100$</div>
                                        </td>
                                        <td className="text-right">990</td>
                                        <td className="text-left">Kiritilgan</td>
                                        <td><Link to="/seller/products/form"><span className="editIcon"></span></Link></td>
                                    </tr>
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
                                            <input type="text" placeholder="Mahsulot  nomi" id="reklama" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="kuzatuv_kodi">Model
                                            <input type="text" placeholder="Model" id="kuzatuv_kodi" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="kuzatuv_kodi">Narx
                                            <input type="text" placeholder="narx" id="kuzatuv_kodi" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="kuzatuv_kodi">Miqdor
                                            <input type="text" placeholder="miqdor" id="kuzatuv_kodi" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <div className="selectionText">
                                            Holat
                                        </div>
                                        <div className="selection">
                                            <select className="form-control" >
                                                <option value="kiritilgan">Kiritilgan </option>
                                                <option value="ochirilgan">Ochirilgan</option>
                                            </select>
                                        </div>
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

export default ProductList;