export default function shoppingCardListReducer(state = {shoppingCardList: []}, action) {
    switch (action.type) {
        case "SHOPPING_CARD_LIST":
            state={
                ...state,
                shoppingCardList: action.payload
            };
            break;
        case "UPDATE_SHOPPING_CARD_LIST":
            state={
                ...state,
                shoppingCardList: action.payload
            };
            break;
        default : return state
    }
    return state;
}
// UPDATE_SHOPPING_CARD_LIST