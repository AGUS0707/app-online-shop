export default function productListReducerSeller(state={productList:[]}, action) {
    switch (action.type) {
        case  "UPDATE_PRODUCT_LIST" :
            state={
                ...state,
                productList: action.payload
            };
            break;
        default :
            return state
    }
    return state
}