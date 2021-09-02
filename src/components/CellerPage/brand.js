import React, {useEffect, useState} from 'react';
import {Switch, Route} from "react-router-dom";
import BrandList from "./brandList";
import BrandForm from "./brandForm";

function Brand() {

    return (
        <>
            <Switch>
                <Route path="/seller/brand" exact component={()=> <BrandList   />}/>
                <Route path="/seller/brand/form" component={()=> <BrandForm  />}/>
            </Switch>
        </>
    );
}

export default Brand;