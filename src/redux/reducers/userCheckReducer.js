export default function userCheckReducer(state={userCheck:localstorageGetItem()}, action) {
    switch (action.type) {
        case "BOOLEAN":
            state={
                ...state,
                userCheck:action.payload
            };
            localStorage.setItem("boolean", JSON.stringify(action.payload));
        case "DELETE_CHECK":
            state={
                ...state,
                userCheck: action.payload
            };
            localStorage.setItem("boolean", JSON.stringify(action.payload));
        default: return state
    }
    return state
}
function localstorageGetItem() {
    let a=localStorage.getItem("boolean");
    if (a===null){
        return false
    }else {
        return JSON.parse(a);
    }
}

