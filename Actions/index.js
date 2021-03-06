
export const addToCart = (id, name, price, quantity) => ({
    type: 'ADD_TO_CART',
    id, name, price, quantity
})

export const deleteFromCart = id => ({
    type: 'DELETE_FROM_CART',
    id
})

export const updateQuantity = (id, payload) => ({
    type: 'UPDATE_QUANTITY',
    id, payload
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const setToken = token => ({
    type: 'SET_TOKEN',
    token
})

export const changeSearchFilter = text => ({
    type: 'CHANGE_SEARCH_FILTER',
    text
})