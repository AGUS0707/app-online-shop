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
    roleopen: false,

//    loader

    setIsLoadingCat: true,

//    homepage

    subCategoryOpen: false,
    subCategoryId: "",
    subCategory: [],
    category_name: "",
    product1media: [],
    categorymedia: "",
    categoryId: "",
    categoryfilter: [],
    countCart: 0,
    sellers: []

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

// export const categoryReducer1 = (state = initialState, action) => {
//     if (action.type === "SET_STATE"){
//         return{
//             ...state,
//             countCart:action.countCart
//         }
//     }
//     return state;
// };

