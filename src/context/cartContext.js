import React from 'react'

const CartContext = React.createContext({
    name: '',
    description: '',
    price: ''
});

export default CartContext;