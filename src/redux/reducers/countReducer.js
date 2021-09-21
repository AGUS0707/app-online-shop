export default function countReducer(state = {count: 0}, action) {
    switch (action.type) {
        case "COUNT_DETAILS":
            state={
                ...state,
                count: state.count+1
            };
            break;
        default : return state;
    }
    return state
}