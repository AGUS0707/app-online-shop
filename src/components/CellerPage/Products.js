import React, {useEffect, useState} from 'react';
import { Switch, Route} from "react-router-dom";
import ProductList from "./productList";
import ProductForm from "./productForm";
import ProductFormEdit from "./productFormEdit"


const Products = (props) => {
    return (
        <>
            <Switch>
                <Route path="/seller/products"  exact component={ProductList}/>
                <Route path="/seller/products/form/edit" component={ProductFormEdit}/>
                <Route path="/seller/products/form" exact  component={ProductForm}/>
            </Switch>
        </>
    );
};

export default Products;