export default function valuesListReducer(state={valuesList:[]}, action) {
    switch (action.type) {
        case "VALUES_LIST" :
            state={
                ...state,
                valuesList: action.payload
            };
            break;
        default : return state
    }
    return state
}