
export const addToCart = (id, name, price) => ({
    type: 'ADD_TO_CART',
    id, name, price
})

export const deleteFromCart = id => ({
    type: 'DELETE_FROM_CART',
    id
})

export const updateQuantity = (id, payload) => ({
    type: 'UPDATE_QUANTITY',
    id, payload
})