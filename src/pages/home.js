import React from 'react'
import '../styles/home.css'
import { product } from '../product'
import ProductCart from '../components/productCart'

const Home = () => {
  return (
    <div>
      <h2> HOME PAGE</h2>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className='products'>
        {product.map((product, key) =>
            <ProductCart key={key} data={product}/>
        )}
      </div>
    </div>
  )
}

export default Home
