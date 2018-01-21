import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import cart from './cartReducer'

const rootReducer = combineReducers({
    cart
})

export const selectProducts = state => state.cart.products

export const selectTotalPrice = createSelector(
    selectProducts,
    (products) => products.reduce((prev, cur) => (cur.price * cur.quantity) + prev, 0)
)

export const selectProductsCount = createSelector(
    selectProducts,
    (products) => products.length
)

export default rootReducer
