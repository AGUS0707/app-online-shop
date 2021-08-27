import React, {useEffect} from 'react';
import { Switch, Route} from "react-router-dom";
import ProductList from "./productList";
import ProductForm from "./productForm";


const Products = (props) => {
    useEffect(()=>{

    }, [])
    return (
        <>
            <Switch>
                <Route path="/seller/products" exact component={ProductList}/>
                <Route path="/seller/products/form" component={ProductForm}/>
            </Switch>
        </>
    );
};

export default Products;