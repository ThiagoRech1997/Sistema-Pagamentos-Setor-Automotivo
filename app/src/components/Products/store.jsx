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
                    <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/Product_sample_icon_picture.png' alt='product' />
                    <strong>{data.description}</strong>
                    <strong>R$ {data.value}</strong>
                    <button onClick={() => dispatch(addItemToCart(index, data))}>Add Cart</button>
                </div>
            ))}
        </div>
    )
}