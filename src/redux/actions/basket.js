export const addFlowerBasket = ({obj}) => ({
    type: 'ADD_FLOWER_BASKET',
    payload: obj
})
export const removeItemBasket = (productId) => ({
    type: 'REMOVE_ITEM_BASKET',
    payload: productId
})
export const plusItem = (productId) => ({
    type: 'PLUS_ITEM_BUTTON',
    payload: productId
})
export const minusItem = (productId) => ({
    type: 'MINUS_ITEM_BUTTON',
    payload: productId
})