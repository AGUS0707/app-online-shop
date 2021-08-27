import {combineReducers} from "redux";
import {categoryReducer} from "./categoryReducer"
import userReducer from "./userRecuder"
import userCheckReducer from "./userCheckReducer"
import {productReducer} from "./productReducer";
import {addresReducer} from "./addresReducer"
import {loginReducer} from "./loginReducer";


export const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    address: addresReducer,
    login: loginReducer,
    userCheckReducer,
    userReducer

});
