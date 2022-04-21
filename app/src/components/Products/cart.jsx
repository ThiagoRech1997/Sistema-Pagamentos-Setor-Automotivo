import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './style.css'

import { removeItemToCart } from '../../store/actions/cartActions'

export default function Cart() {
    const dispatch = useDispatch()
    const itemToCart = useSelector((state) => state.itemToCart)
    const { Items } = itemToCart

    return(
        <div className='cart--list'>
            {Items.map((data, index) => (
                <div key={index} className='cart--item'>
                    <img src='https://cdn-cosmos.bluesoft.com.br/products/7891079000038' alt='product' />
                    <strong>{data.description}</strong>
                    <strong>R$ {data.value}</strong>
                    <button onClick={() => dispatch(removeItemToCart(index, data))}>Remove Cart</button>
                </div>
            ))}
        </div>
    )
}