

export default function userReducer(state={userObject:localstorageGetItem()}, action ) {
    switch (action.type) {
        case "USER":
            state={
                ...state,
                userObject:action.payload
            };
            console.log(state.userObject);
            localStorage.setItem("user", JSON.stringify(state.userObject));
            break;
        case "DELETE_USER":
            state={
                ...state,
                userObject: action.payload
            };
            localStorage.setItem("user", JSON.stringify(state.userObject));
            break;
        case "UPDATE_PHOTO":
            state={
                ...state,
                userObject:{
                   id:state.userObject.id,
                   email:state.userObject.email,
                   phone:state.userObject.phone,
                   photo:action.payload
                }
            };
            localStorage.setItem("user", JSON.stringify(state.userObject));
            break;
        case "UPDATE_USER" :
            state={
                ...state,
                userObject: action.payload
            };
            localStorage.setItem("user", JSON.stringify(state.userObject));
            break;
        default : return state
    }
    return state
}
function localstorageGetItem() {
    const a=localStorage.getItem("user");
    if (a===null){
       return {}
    }else{
        return JSON.parse(a);
    }
}
