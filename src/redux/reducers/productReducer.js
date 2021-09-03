import {SET_STATE1} from "../types/Type";

const initialState  = {
    open: "true",
    open1: false,
    open2: false,
    open3: false,
    data: [],
    selectedIndex: "",
    selectedIndexDetail: "",
    selectedIndexValue: "",
    selectedItem: {},
    selectedItemDetail: {},
    selectedItemvalue: {},
    selectedItemModel: {},
    photo: "",
    modeldata:[],
    detaildata: [],
    valuedata:[],
    formData: [],
    a:[],

//    homepage

    product: [],
    oneProduct:{},
    photo_list: [],
    url: "",
    htmlString: "",
    onePhoto_list: [],
    detailList:[],
    valueList:[]
};


export const productReducer = (state = initialState, action) => {
    if (action.type === SET_STATE1){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
};

