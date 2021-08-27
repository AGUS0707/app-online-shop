import React, {useEffect, useState} from 'react';
import {Switch, Route} from "react-router-dom";
import BrandList from "./brandList";
import BrandForm from "./brandForm";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

function Brand() {
    const [filterBrandObject, setFilterBrandObject]=useState({})
    const [brandList, setBrandList]=useState([])
    useEffect(()=>{
        axios.get(API_PATH+'brand').then((response)=>{
            setBrandList(response.data);
        })
    }, []);
    const [emptObject, setEmptiObject]=useState({
        brand_name:"",
        is_active:""
    });
    return (
        <>
            <Switch>
                <Route path="/seller/brand" exact component={()=> <BrandList brandList={brandList} setBrandList={setBrandList} setFilterBrandObject={setFilterBrandObject}  />}/>
                <Route path="/seller/brand/form" component={()=> <BrandForm filterBrandObject={filterBrandObject} />}/>
                <Route path="/seller/brand/form1" component={()=> <BrandForm filterBrandObject={emptObject} />}/>
            </Switch>
        </>
    );
}

export default Brand;