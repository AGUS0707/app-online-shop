import {SET_STATE2} from "../types/Type";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";
import {getRole} from "./categoryAction";
import Cookies from "js-cookie";



export function set_state2(data) {
    return {
        type: SET_STATE2,
        payload: data
    }
}

export function saveCountry(event, errors, values, history) {
    return function (dispatch) {
        if (values.country_uz.length > 0 && values.country_ru.length > 0){
            axios.post(API_PATH + "crcountry", values, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                .then((res) => {
                    toast.success("Ma'lumotlar saqlandi")
                    dispatch({type: ""})
                    history.push("/admin/addres/country")
                    dispatch(getCountry)
                })
                .catch((res) => {
                    toast.error("Ma'lumotlar saqlanmadi")
                })
        }
    }
}
export const getCountry = () => (dispatch) => {
    axios.get(API_PATH +"country", {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
        .then((res) => {
            dispatch(set_state2({country: res.data}))
        })
};
export const deleteCountry = () => (dispatch,getsatte) => {
    axios.post(API_PATH +"delcountry", {id:getsatte().address.selectedIndexCountry}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
        .then((res) => {
            dispatch(getCountry())
            dispatch(set_state2({open1:false}))
        })
};
export function upCountry(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "upcountry", values, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                toast.success("O'zgardi")
                dispatch({type: ""})
                history.push("/admin/addres/country")
            })
            .catch(()=> {
                toast.error("O'zgarmadi")
            })
    }
}

export function saveRegion(event, errors, values, history) {
    return function (dispatch) {
        if (values.region_uz.length > 0 && values.region_ru.length > 0 && values.country_id.length !== undefined){
            axios.post(API_PATH + "crregion", values, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                .then((res) => {
                    toast.success("Ma'lumotlar saqlandi")
                    dispatch({type:""})
                    history.push("/admin/addres/region")
                    dispatch(getRegion)
                })
                .catch((res) => {
                    toast.error("Ma'lumotlar saqlanmadi")
                })
        }
    }
}
export const getRegion = () => (dispatch) => {
    axios.get(API_PATH +"regions", {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
        .then((res) => {
            dispatch(set_state2({region: res.data}))
        })
};
export const deleteRegion = () => (dispatch,getsatte) => {
    axios.post(API_PATH +"delregion", {id:getsatte().address.selectedIndexRegion}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
        .then((res) => {
            dispatch(getRegion())
            dispatch(set_state2({open1:false}))
        })
};
export function upRegion(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "upregion", values, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                toast.success("O'zgardi")
                dispatch({type:""})
                history.push("/admin/addres/region")
            })
            .catch(()=> {
                toast.error("O'zgarmadi")
            })
    }
}

export function saveDistrict(event, errors, values, history) {
    return function (dispatch) {
       if (values.district_uz.length > 0 && values.district_ru.length > 0 && values.region_id.length !== undefined){
           axios.post(API_PATH + "crdistrict", values, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
               .then((res) => {
                   toast.success("Ma'lumotlar saqlandi")
                   dispatch({type: ""})
                   history.push("/admin/addres/district")
               })
               .catch((res) => {
                   toast.error("Ma'lumotlar saqlanmadi")
               })
       }
    }
}
export const getDistrict = () => (dispatch) => {
    axios.get(API_PATH +"districts", {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
        .then((res) => {
            dispatch(set_state2({district: res.data}))
        })
};
export const deleteDistrict = () => (dispatch,getsatte) => {
    axios.post(API_PATH +"deldistrict", {id:getsatte().address.selectedIndexDistrict}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
        .then((res) => {
            dispatch(getDistrict())
            dispatch(set_state2({open1:false}))
        })
};
export function upDistrict(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "updistrict", values, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
            .then((res)=>{
                toast.success("O'zgardi")
                dispatch({type: ""})
                history.push("/admin/addres/district")
            })
            .catch(()=> {
                toast.error("O'zgarmadi")
            })
    }
}