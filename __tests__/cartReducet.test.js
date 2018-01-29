import cart from '../Reducers/cartReducer'
import { store } from '../store'

const actionAdd = {
    type: 'ADD_TO_CART',
    id: 1,
    name: 'Fruit Salad',
    price: 4,
    quantity: 1,
}

const actionDelete = {
    type: 'DELETE_FROM_CART',
    id: 1
}
const actionUpdateQuantity = {
    type: 'UPDATE_QUANTITY',
    id: 1,
    payload: 1
}

const actual = {
    products: [
        {
            id: 1,
            name: 'Fruit Salad',
            price: 4,
            quantity: 1,
        }
    ]
}

describe('Testing cart Reducer', () => {

    test('Should return initialState', () => {
        expect(
            cart(undefined, {})
        ).toEqual({
            products: []
        })
    }),
    
    test('Should add product to cart', () => {
        const expected = {
            products: [
                {
                    id: 1,
                    name: 'Fruit Salad',
                    price: 4,
                    quantity: 1,
                }
            ]
        }
        expect( cart(undefined, actionAdd) ).toEqual(expected)
    })

    test('Should update quantity when product is in the cart', () => {
        const expected = {
            products: [
                {
                    id: 1,
                    name: 'Fruit Salad',
                    price: 4,
                    quantity: 2,
                }
            ]
        }
        expect( cart(actual, actionAdd) ).toEqual(expected)
    })

    test('Should remove product from cart', () => {
        const expected = { products: [] }

        expect( cart(actual, actionDelete) ).toEqual(expected)
    })

    test('Should update quantity', () => {
        const expected = {
            products: [
                {
                    id: 1,
                    name: 'Fruit Salad',
                    price: 4,
                    quantity: 2,
                }
            ]
        }
        expect( cart(actual, actionUpdateQuantity) ).toEqual(expected)
    })

    test('Should clear the cart', () => {
        const expected = { products: [] }
        expect( cart(actual, { type: 'CLEAR_CART'}) ).toEqual(expected)
    })
})

