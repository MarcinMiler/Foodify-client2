
const initialState = {
    products: [],
}

const newProduct = action => ({
    id: action.id,
    name: action.name,
    price: action.price,
    quantity: action.quantity
})

const removeProduct = (id, products) => products.filter(p => p.id !== id)

const updateQuantity = (products, id, payload) => {
    const res = products.map(p => {
        if(p.id === id) return Object.assign({}, p, { quantity: p.quantity + payload })
        return p
    })
    return res.filter(p => p.quantity > 0)
}

const findByID = (products, id) => products.find(p => p.id === id)

const cart = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD_TO_CART':
            const productInState = findByID(state.products, action.id)

            if(productInState) return { products: updateQuantity(state.products, action.id, action.quantity) }
            
            return { products: [ ...state.products, newProduct(action) ]}

        case 'DELETE_FROM_CART':
            return { products: removeProduct(action.id, state.products) }

        case 'UPDATE_QUANTITY':
            return { products: updateQuantity(state.products, action.id, action.payload) }

        case 'CLEAR_CART':
            return { products: [] }

        default:
            return state
    }
}

export default cart