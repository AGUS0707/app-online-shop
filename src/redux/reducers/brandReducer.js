export default function brandReducer(state={brandObject:{ brand_name:"", is_active:""}}, action) {
    switch (action.type) {
        case "BRAND" :   // yangi brand yaratganda change bolgnada ishlaydi
            state={
                ...state,
                brandObject: action.payload
            };
            break;
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