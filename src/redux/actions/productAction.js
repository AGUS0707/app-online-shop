import {SET_STATE1} from "../types/Type";

import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";
import {getCategory, set_state} from "./categoryAction";
import {getDistrict, set_state2} from "./addresAction";


export function set_state1(data) {
    return {
        type: SET_STATE1,
        payload: data
    }
}

export const getBrand = () => (dispatch) => {
    axios.get( API_PATH + "brand")
        .then((res) => {
            dispatch(set_state1({data: res.data}))
        })
};
export const deleteBrand = () => (dispatch, getstate) => {
    axios.post( API_PATH + "delbrand", {id: getstate().product.selectedIndex})
        .then((res) => {
            toast.success("O'chdi")
            dispatch(set_state1({open1: false}))
            dispatch(getBrand())
        })
        .catch(()=>{
            toast.error("Tizimda xatolik")
        })
};

export const saveDetail = (event, errors, values, history) => (dispatch) => {
    if (values.detail_uz.length > 0 && values.detail_ru.length > 0 && values.category_id.length > 0 && values.is_active !== undefined){
        axios.post(API_PATH + "crdetail", values)
            .then((res)=> {
                toast.success("Saqlandi")
                history.push("/admin/product/detail")

            })
            .catch(()=> {
                toast.error("Saqlanmadi")
            })
    }
}
export const getDetail = () => (dispatch) => {
    axios.get(API_PATH + "details")
        .then((res)=> {
            dispatch(set_state1({detaildata: res.data}))
        })
}
// export const deleteDetail = () => (dispatch,getsatte) => {
//     axios.post(API_PATH +"deldetail", {id:getsatte().product.selectedIndexDetail})
//         .then((res) => {
//             dispatch(set_state1({open1:false}))
//         })
// };
export function upDetail(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "updetail", values)
            .then((res)=>{
                toast.success("O'zgardi")
                history.push("/admin/product/detail")
            })
            .catch(()=> {
                toast.error("O'zgarmadi")
            })
    }
}

export const saveModel = (event, errors, values, history) => (dispatch) => {
    if (values.model_name.length > 0 && values.brand_id !== undefined && values.is_active !== undefined){
        axios.post(API_PATH + "crmodel", values)
            .then((res)=> {
                toast.success("Saqlandi")
                history.push("/admin/product/model")
            })
            .catch(()=> {
                toast.error("Xatoku brat")
            })
    }
}
export const getModel = () => (dispatch) => {
    axios.get(API_PATH + "models")
        .then((res)=> {
            dispatch(set_state1({modeldata: res.data}))
        })

}
export function upModel(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "upmodel", values)
            .then((res)=>{
                toast.success("O'zgardi")
                dispatch({type: ""})
                history.push("/admin/product/model")
            })
            .catch(()=> {
                toast.error("O'zgarmadi")
            })
    }
}

export const saveValue = (event, errors, values, history) => (dispatch) => {
    if (values.value_uz.length > 0 && values.value_ru.length > 0 && values.detail_id !== undefined && values.is_active !== undefined){
        axios.post(API_PATH + "crvalue", values)
            .then((res)=> {
                toast.success("Saqlandi")
                history.push("/admin/product/value")
            })
            .catch(()=> {
                toast.error("Saqlanmadi")
            })
    }
}
export const getValue = () => (dispatch) => {
    axios.get(API_PATH + "values")
        .then((res)=> {
            dispatch(set_state1({valuedata: res.data}))
        })
}
// export const deleteValue = () => (dispatch,getsatte) => {
//     axios.post(API_PATH +"delvalue", {id:getsatte().product.selectedIndexValue})
//         .then((res) => {
//             dispatch(set_state1({open1:false}))
//             toast.success("O'chdi brat")
//         })
//
// };
export function upValue(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "upvalue", values)
            .then((res)=>{
                toast.success("O'zgardi")
                dispatch({type: ""})
                history.push("/admin/product/value")
            })
            .catch(()=> {
                toast.error("O'zgarmadi")
            })
    }
}