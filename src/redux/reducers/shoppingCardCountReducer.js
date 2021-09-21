export default function shoppingCardCountReducer(state = {count: 0}, action) {
    switch (action.type) {
        case "SHOPPING_CARD_COUNT" :
            state={
                ...state,
                count: action.payload
            };
            break;
        default : return state
    }
    return state;
}