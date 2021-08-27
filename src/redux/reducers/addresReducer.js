import {SET_STATE2} from "../types/Type";

const  initialState = {

    open: false,
    open1: false,
    open2: false,
    country: [],
    region: [],
    district: [],
    selectedIndexCountry: "",
    selectedIndexRegion: "",
    selectedIndexDistrict: "",
    selectedItemCountry: {},
    selectedItemRegion: {},
    selectedItemDistrict: {}

}

export const addresReducer = (state = initialState, action) => {
    if (action.type === SET_STATE2){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
};

