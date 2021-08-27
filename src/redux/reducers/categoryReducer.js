import {SET_STATE} from "../types/Type";

const initialState  = {
    open: false,
    open2: false,
    open3: false,
    id: "",
    category: [],
    submenu: false,
    submenu1: false,
    submenu2: false,
    value: "",
    selectedItem: {},
    selectedIndex: "",
    role: [],
    rolevalue: "",
    roleid: "",
    rolename: [],
    selectedItemrole:{},
    roleid2: "",
    roleopen: false
};


export const categoryReducer = (state = initialState, action) => {
    if (action.type === SET_STATE){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
};

