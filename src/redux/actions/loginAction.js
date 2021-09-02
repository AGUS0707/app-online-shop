import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";

export function login(event, errors, values, history) {
    return function (dispatch) {
        if (values.phoneNumber.length > 0 && values.password.length > 0){
            axios.post(API_PATH + "login", values)
                .then((res) => {
                    dispatch({type: ""});
                    history.push("/admin/profile");
                    toast.success("Muvaffaqiyatli !!!")
                })
                .catch((error) => {
                    toast.error("Kirolmadiz");
                });
        } else {
            toast.error("Ma'lumotlarni to'ldiring")
        }

    }
}