import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

function BrandList(props) {

    const [checked, setChecked]=useState(false);
    const filterBrand=(id)=> {
        props.brandList.forEach((item)=>{
            if (id===item.id){
                props.setFilterBrandObject(item)
            }
        })
    };
    const [filterObject, setFilterObject]=useState({})
    const handleInputChange=(e)=>{
        let newArray={
            ...filterObject,
            [e.target.name]:e.target.value
        };
        setFilterObject(newArray)
    };
    const filterList=()=>{
        let thisDay=Date.now().getFullYear();
        console.log(thisDay);
        let newArray=[];
        newArray=props.brandList.filter((item)=>{
            if (item.brand_name.toUpperCase().includes(filterObject.filterBrandName.toUpperCase())){
                return item
            }
        });
        props.setBrandList(newArray)
    };
    console.log(props.brandList);
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
                        <Link to="/seller/brand/form1">
                            <span className="img"></span>
                        </Link>
                        <Link>
                            <span className="img"></span>
                        </Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="brandMain">
                <div className="brandList">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="brandListHeader d-flex">
                                <img src="/images/options-lines.svg" alt="no images"/>
                                <h4>Brandlar</h4>
                            </div>
                            <div className="brandListTable">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th className="text-left"><input type="checkbox" onChange={()=>setChecked(!checked)} className='form-control'/></th>
                                        <th className="text-left">Id</th>
                                        <th className="text-center">Rasmlar</th>
                                        <th className="text-left">Brand name</th>
                                        <th className="text-left">Is_active</th>
                                        <th>Harakat</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.brandList.map((item, index)=>{
                                        return <tr key={index}>
                                            <td className="text-left"><input type="checkbox" defaultChecked={checked}  className='form-control'/></td>
                                            <td className="text-left ">{item.id}</td>
                                            <th className="text-center brand-img">
                                                <img src={item.url} alt={item.alt_name}/>
                                            </th>
                                            <td className="text-left ">{item.brand_name}</td>
                                            <td className="text-left">{item.is_active==="1"? "Activ":"Activ emas"}</td>
                                            <td className="text-center"><Link to="/seller/brand/form" onClick={()=>filterBrand(item.id)} ><span className="editIcon"></span></Link></td>
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
                                        <label htmlFor="reklama">Brand nomi
                                            <input type="text" placeholder="Brand nomi" onChange={handleInputChange} name="filterBrandName" id="reklama" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="date">
                                            Sana
                                            <input type="date" id="date" name="date" className="form-control"/>
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

export default BrandList;