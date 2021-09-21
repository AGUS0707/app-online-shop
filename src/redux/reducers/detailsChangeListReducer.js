export default function detailsChangeListReducer(state = {detailsList: []}, action) {
    switch (action.type) {
        case  "DETAILS_CHANGE_LIST" :
            state={
                ...state,
                detailsList: state.detailsList.concat(action.payload),
            };
            break;
        case  "DETAILS_UPDATE_CHANGE_LIST" :
            state={
                ...state,
                detailsList: action.payload,
            };
            break;
        default : return state
    }
    return state;
}