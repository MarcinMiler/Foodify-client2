
export const addToCart = (id, name, price) => ({
    type: 'ADD_TO_CART',
    id, name, price
})

export const deleteFromCart = (id, price, quantity) => ({
    type: 'DELETE_FROM_CART',
    id, price, quantity
})

export const updateQuantity = (id, payload) => ({
    type: 'UPDATE_QUANTITY',
    id, payload
})