export default function detailsHtmlListReducer(state = {detailsHtmlList: []}, action) {
    switch (action.type) {
        case "DETAILS_HTML_LIST":
            state={
                ...state,
                detailsHtmlList: state.detailsHtmlList.concat(action.payload)
            };
            break;
        case "DETAILS_UPDATE_HTML_LIST":
            state={
                ...state,
                detailsHtmlList: action.payload
            };
            break;
        default : return state;
    }
    return state
}