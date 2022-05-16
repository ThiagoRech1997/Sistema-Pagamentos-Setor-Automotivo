import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './style.css'

import { removeItemToCart } from '../../store/actions/cartActions'

export default function Cart() {
    const dispatch = useDispatch()
    const itemToCart = useSelector((state) => state.itemToCart)
    const { Items, amount } = itemToCart

    return(
        <div className='cart--list'>
            {Items.map((data, index) => (
                <div key={index} className='cart--item'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/Product_sample_icon_picture.png' alt='product' />
                    <strong>{data.description}</strong>
                    <strong>R$ {data.value}</strong>
                    <button onClick={() => dispatch(removeItemToCart(index, data))}>Remove Cart</button>
                </div>
            ))}
            <div>
                <strong>Amount: R$ {amount}</strong>
                <button>Buy</button>
            </div>
        </div>
    )
}