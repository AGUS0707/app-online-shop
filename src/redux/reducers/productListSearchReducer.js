export default function productListSearchReducer(state={productList:localStorageGetItem()}, action) {
    switch (action.type) {
        case  "PRODUCT_LIST_SEARCH" :
            state={
                ...state,
                productList: action.payload
            };
            localStorage.setItem('searchList', JSON.stringify(state.productList));
            break;
        default :
            return state
    }
    return state
}
function localStorageGetItem() {
    let a=localStorage.getItem('searchList');
    if (a!==null){
        return JSON.parse(a);
    }else {
        return []
    }
}