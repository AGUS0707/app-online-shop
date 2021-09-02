import {SET_STATE} from "../types/Type";
import axios from "axios";
import {toast} from "react-toastify";
import {API_PATH} from "../../tools/constants";


export function set_state(data) {
    return {
        type: SET_STATE,
        payload: data
    }
}
export function saveCategory(event, errors, values, history) {
    return function (dispatch) {
        console.log(values)
       if (values.category_uz.length > 0 && values.category_ru.length>0 && values.index.length>0 && values.category_id.length>0){
           axios.post(API_PATH + "crcategory", values)
               .then((res) => {
                   console.log(res)
                   dispatch(set_state({open: false, submenu: false, submenu1: false, submenu2: false}))
                   toast.success("Ma'lumotlar saqlandi")
                   dispatch({type: ""});
                   history.push("/admin/category")

               })
               .catch((res) => {
                   toast.error("Ma'lumotlar saqlanmadi")
               })
       }
    }
}
export function saveUpCategory(event, errors, values, history) {
    return function (dispatch, getState) {
        console.log(values)
        axios.post(API_PATH + "upcategory", {...values, id: getState().category.selectedItem.id})
            .then((res) => {
                console.log(res)
                dispatch(set_state({open2: false, id: "", submenu: false, submenu1: false, submenu2: false}))
                toast.success("O'zgarishlar saqlandi")
                dispatch({type: ""});
                history.push("/admin/category")
            })
            .catch((res) => {
                toast.error("O'zgartirish saqlanmadi")
                dispatch({type: ""});
                history.push("/admin/category")
            })
    }
}
export const deleteCategory = () => (dispatch, getstate) => {
    axios.post(API_PATH +"delcategory", {id: getstate().category.selectedIndex})
        .then((res) => {
            toast.success("o'chdi");
            dispatch(set_state({open3: false}));
            dispatch(getCategory())
        })
};
export const getCategory = () => (dispatch) => {
    axios.get( API_PATH + "categorys")
        .then((res) => {
            dispatch(set_state({category: res.data}))
        })
};


export const getUsers = () => (dispatch) => {
    axios.get(API_PATH + "user")
        .then((res) => {
            dispatch(set_state({role: res.data}))
        })
}

export function addRole(event, errors, values, history) {
    return function (dispatch) {
        if (values.name.length > 0){
            axios.post(API_PATH + "crrole", values)
                .then((res) => {
                    toast.success("Qo'shildi")
                    dispatch({type: ""})
                    history.push("/admin/system/role")
                })
        }
    }
}
export function getRole() {
    return function (dispatch) {
        axios.get(API_PATH + "role")
            .then((res)=> {
                dispatch(set_state({rolename: res.data}))
            })
    }
}
export function upRole(event, errors, values, history) {
    return function (dispatch, getstate) {
        axios.post(API_PATH + "uprole", {...values, id: getstate().category.roleid2})
            .then((res)=>{
                toast.success("O'zgardi")
                dispatch({type: ""})
                history.push("/admin/system/role")
            })
    }
}

// export const deleteRole = () => (dispatch, getstate) => {
//     axios.post(API_PATH +"delrole", {id: getstate().category.selectedIndexrole})
//         .then((res) => {
//             toast.success("o'chdi");
//             dispatch(getRole())
//             dispatch(set_state({roleopen:false}))
//         })
// };




