import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './style.css'

import { removeItemToCart, handleSele } from '../../store/actions/cartActions'

export default function Cart() {
    const dispatch = useDispatch()
    const itemToCart = useSelector((state) => state.itemToCart)
    const { Items, amount } = itemToCart

    const [numberInstallments, setNumberInstallments] = useState(1)

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
                <strong>Number Installment</strong>
                <input 
                    placeholder='number of installment' 
                    value={numberInstallments}
                    onChange={e => setNumberInstallments(e.target.value)}
                />
                <strong>Amount: R$ {amount}</strong>
                <button onClick={() => dispatch(handleSele(Items, amount, numberInstallments))}>Buy</button>
            </div>
        </div>
    )
}