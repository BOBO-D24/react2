import React from 'react'
import { product } from '../product'
import ProductCart from '../components/productCart'

const Home = () => {
  return (
    <div>
      <h2> HOME PAGE</h2>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {product.map((product, key) =>
            <ProductCart key={key} data={product}/>
        )}
      </div>
    </div>
  )
}

export default Home
