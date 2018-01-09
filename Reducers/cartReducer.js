
const initialState = {
    products: [],
}

const newProduct = action => ({
    id: action.id,
    name: action.name,
    price: action.price,
    quantity: 1
})

const removeProduct = (id, products) => products.filter(p => p.id !== id)

const updateQuantity = (products, id, payload) => {
    return products.map(p => {
        if(p.id !== id) p
        return Object.assign({}, p, { quantity: quantity + payload })
    })
}

const cart = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD_TO_CART':
            return { products: [ ...state.products, newProduct(action) ]}

        case 'DELETE_FROM_CART':
            return { products: removeProduct(action.id, state.products) }

        case 'UPDATE_QUANTITY':
            return { products: updateQuantity(state.products, action.id, action.payload) }

        default:
            return state
    }
}

export default cart