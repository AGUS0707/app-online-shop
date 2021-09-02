export default function productReducerSeller(state = {productObject: {
        product_uz:"",
        product_ru:"",
        price:"",
        sale_price:"",
        xarakteristika:"",
        amount:"",
        min_order:"",
        serial_number: "",
        brand_id:"",
        category_id:"",
        is_sale:"",
        description_uz:"",
        description_ru:""
    }}, action) {
    switch (action.type) {
        case "PRODUCT" :   // product qoshganda input polyalarni toldirganda ishlaydi
            state={
                ...state,
                productObject: action.payload
            };
            break;
        case "UPDATE_PRODUCT":    // productni  edit qilganda product filter qilib yangilab oladi
            state={
                ...state,
                productObject: action.payload
            };
            break;
        case "CLEAR_PRODUCT":    // productni tozalab yuborish uchun
            state={
                ...state,
                productObject: action.payload
            };
            break;
        case "UP_PRODUCT" :  // edit qilinayotgan productni YANGILAYDI
            state={
                ...state,
                productObject: action.payload
            };
            break;
        default :
            return state
    }
    return state
}