export default function brandListReducer(state={brandList:[]}, action) {
    switch (action.type) {
        case "BRAND_LIST_LIST" :
            state={
                ...state,
                brandList: action.payload
            };
            break;
        case "UPDATE_BRAND_LIST" :
            state={
                ...state,
                brandList: action.payload
            };
            break;
        default :
            return state;
    }
    return state
}