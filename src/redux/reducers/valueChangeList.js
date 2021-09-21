export default function valueChangeListReducer(state = {valueList: []}, action) {
    switch (action.type) {
        case  "VALUE_CHANGE_LIST" :
            state={
                ...state,
                valueList: state.valueList.concat(action.payload),
            };
            break;
        case  "VALUE_DELETE_LIST" :
            state={
                ...state,
                valueList: action.payload,
            };
            break;
        case  "VALUE_UPDATE_LIST" :
            state={
                ...state,
                valueList: action.payload,
            };
            break;

        default : return state
    }
    return state;
}