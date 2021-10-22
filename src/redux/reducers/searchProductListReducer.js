export default function searchProductListReducer(state = {searchProductList: localstorageGetItem()}, action) {
    switch (action.type) {
        case "SEARCH_PRODUCT_LIST" :
            state={
                ...state,
             searchProductList: action.payload
            };
            localStorage.setItem("searchProductList", JSON.stringify(state.searchProductList));
            break;
        default : return state;
    }
    return state;
}
function localstorageGetItem() {
    const a=localStorage.getItem("searchProductList");
    if (a===null){
        return [];
    }else{
        return JSON.parse(a);
    }
}