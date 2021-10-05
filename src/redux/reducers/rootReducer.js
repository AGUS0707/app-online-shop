import {combineReducers} from "redux";
import {categoryReducer} from "./categoryReducer"
import userReducer from "./userRecuder"
import userCheckReducer from "./userCheckReducer"
import {productReducer} from "./productReducer";
import {addresReducer} from "./addresReducer"
import {loginReducer} from "./loginReducer";
import brandReducer from "./brandReducer"
import brandListReducer from "./brandListReducer"
import productReducerSeller from "./productReducerSeller"
import productListReducerSeller from "./productListReducerSeller"
import detailsListReducer from "./detailsListReducer";
import valuesListReducer from "./valuesListReducer";
import detailsHtmlListReducer from "./detailstHtmlListReducer";
import countReducer from "./countReducer";
import detailsChangeListReducer from "./detailsChangeListReducer";
import valueChangeListReducer from "./valueChangeList";
import shoppingCardListReducer from "./shoppingCardListReducer";
import shoppingCardCountReducer from "./shoppingCardCountReducer";
import productListSearchReducer from "./productListSearchReducer";




export const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    address: addresReducer,
    login: loginReducer,
    userCheckReducer,
    userReducer,
    brandReducer,
    brandListReducer,
    productReducerSeller,
    productListReducerSeller,
    detailsListReducer,
    valuesListReducer,
    detailsHtmlListReducer,
    countReducer,
    detailsChangeListReducer,
    valueChangeListReducer,
    shoppingCardListReducer,
    shoppingCardCountReducer,
    productListSearchReducer,




});
