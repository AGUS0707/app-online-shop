export default function brandReducer(state={brandObject:{ brand_name:"", is_active:""}}, action) {
    switch (action.type) {
        case "UPDATE_BRAND" :   // edit qilganda brandni ozgartiradi
            state={
                ...state,
                brandObject:action.payload
            };
            break;
        default :
            return state
    }
    return state
}