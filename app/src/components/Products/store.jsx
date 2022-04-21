import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import './style.css'

import { handleProductsList } from './../../store/actions/productsActions'
import { addItemToCart } from "../../store/actions/cartActions"

export default function ProductStore() {
    const dispatch = useDispatch()

    const getProducts = useSelector((state) => state.getProducts)
    const { products } = getProducts

    useEffect(() => {
        dispatch(handleProductsList())
    },[])
    return(
        <div className='product--list'>
            {products.map((data, index) => (
                <div key={index} className='product--item'>
                    <img src='https://cdn-cosmos.bluesoft.com.br/products/7891079000038' alt='product' />
                    <strong>{data.description}</strong>
                    <strong>R$ {data.value}</strong>
                    <button onClick={() => dispatch(addItemToCart(index, data))}>Add Cart</button>
                </div>
            ))}
        </div>
    )
}