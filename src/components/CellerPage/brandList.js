import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {connect} from "react-redux";
import Cookies from "js-cookie";

function BrandList(props) {
    const [filterObject, setFilterObject]=useState({
        filterBrandName:" ",
        date:" "
    });

    const [brandList, setBrandList]=useState([]);
    const [brandListCons, setBrandListCons]=useState([]);
    const handleInputChange=(e)=>{
        let newArray={
            ...filterObject,
            [e.target.name]:e.target.value
        };
        setFilterObject(newArray)
    };

    const [loader, setLoader] = useState(true)


    useEffect( ()=>{
        axios.get(API_PATH+'brand', {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
            // props.addBrandList(response.data);
            setBrandList(response.data);
            setBrandListCons(response.data);
            console.log(response.data);
            setLoader(false)
        })
    } ,     []);
    const filterList=()=>{
        let yil=filterObject.date.slice(0, 4);
        let oy=filterObject.date.slice(5, 7);
        let kun=filterObject.date.slice(8, 10);
        let filterDate= new Date(`${yil}-${oy}-${kun}`).getTime();
        let newArray=[];
        if (filterObject.filterBrandName!==" "||filterObject.date!==" "){
            newArray=brandListCons.filter((item)=>{
                // console.log(item.brand_name.toUpperCase().includes(filterObject.filterBrandName.toUpperCase()));
                let createTime=new Date(item.created_at.slice(0, 10)).getTime();
                console.log(createTime);
                if (item.brand_name.toUpperCase().trim().includes(filterObject.filterBrandName.toUpperCase())||filterDate<createTime){
                    return item;
                }
            });
            // props.updateBrandList(newArray)
            setBrandList(newArray)
        }
        if (filterObject.filterBrandName!==" "&&filterObject.date!==" "){
            let array=[];
            array=brandListCons.filter((item)=>{
                // console.log(item.brand_name.toUpperCase().includes(filterObject.filterBrandName.toUpperCase()));
                let createTime=new Date(item.created_at.slice(0, 10)).getTime();
                console.log(createTime);
                if (item.brand_name.toUpperCase().trim().includes(filterObject.filterBrandName.toUpperCase())&&filterDate<createTime){
                    return item;
                }
            });
            // props.updateBrandList(array)
            setBrandList(array)
        }
    };
    function brandObjectClear() {
    }
    return (
        <div className="brand">
            <div className="brandHeader d-flex justify-content-between">
                <div className="brandHeaderLeft d-flex align-items-center">
                    <h2>Brandlar</h2>
                    <div className="homeIcon">
                        <img src="/images/home.svg" alt="no image"/>
                    </div>
                    <div className="nextIcon">
                        <img src="/images/next.svg" alt="no image"/>
                    </div>
                    <Link to="/seller/brand">Brandlar</Link>
                </div>
                <div className="brandHeaderRight d-flex justify-content-end">
                    <div className="brandHeaderRightContent d-flex ">
                        <Link to="/seller/brand/form" className="otishImg" onClick={brandObjectClear}>
                            <span className="img"></span>
                        </Link>
                        <Link className="deleteImg">
                            <span className="img"></span>
                        </Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="brandMain">
                <div className="brandList">
                    <div className="row">

                       {
                           loader ? <div className="col-9">
                               <div className="d-flex align-items-center justify-content-center">
                                   <img src="/images/loading.gif" width="200" height="200" alt=""/>
                               </div>
                           </div> :  <div className="col-md-9">
                               <div className="brandListHeader d-flex">
                                   <img src="/images/options-lines.svg" alt="no images"/>
                                   <h4>Brandlar</h4>
                               </div>
                               <div className="brandListTable">
                                   <table className="table table-bordered">
                                       <thead>
                                       <tr>
                                           <th className="text-left">№</th>
                                           <th className="text-left">Id</th>
                                           <th className="text-center">Rasmlar</th>
                                           <th className="text-left">Brand name</th>
                                           <th className="text-left">Is_active</th>
                                       </tr>
                                       </thead>
                                       {brandList.length!==0? <tbody>
                                       {brandList.map((item, index)=>{
                                           return <tr key={index}>
                                               <td className="text-left">{index+1}</td>
                                               <td className="text-left ">{item.id}</td>
                                               <th className="text-center brand-img">
                                                   <img src={item.url} alt={item.alt_name}/>
                                               </th>
                                               <td className="text-left ">{item.brand_name}</td>
                                               <td className="text-left">{item.is_active==="1"? "Activ":"Activ emas"}</td>
                                           </tr>
                                       })}
                                       </tbody> :<tr> <td colSpan={"5"} className="text-center">Hech narsa topilmadi</td></tr>}
                                   </table>
                               </div>
                           </div>
                       }

                        <div className="col-md-3">
                            <div className="filterContent">
                                <div className="filterHeader d-flex">
                                    <img src="/images/filtr.png" alt="no image"/>
                                    <h3>Filterlash</h3>
                                </div>
                                <div className="filterMain">
                                    <div className="filterForm">
                                        <label htmlFor="reklama">Brand nomi
                                            <input type="text" placeholder="Brand nomi" onChange={handleInputChange} name="filterBrandName" id="reklama" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="date">
                                            Sana
                                            <input type="date" onChange={handleInputChange} id="date" name="date" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <div className="filterButton d-flex justify-content-end">
                                            <button onClick={filterList} className="btn d-flex align-items-center">
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
function mapDispatchToProps(dispatch) {
    return {
        addBrandList:function (brandList) {
            dispatch({
                type:"BRAND_LIST_LIST",
                payload:brandList
            })
        },
        updateBrandList:function(brandList){
          dispatch({
              type: "UPDATE_BRAND_LIST",
              payload:brandList
          })
        }
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, mapDispatchToProps) (BrandList);