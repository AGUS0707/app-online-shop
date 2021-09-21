
export default function detailsListReducer(state={detailsList:[]}, action) {
    switch (action.type) {
        case "DETAILS_LIST" :
            state={
                ...state,
                detailsList: action.payload
            };
            break;
        case "DETAILS_UPDATE_LISTT" :
            state={
                ...state,
                detailsList: action.payload
            };
            break;
        default : return state
    }
    return state
}