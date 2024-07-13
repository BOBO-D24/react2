import React from 'react'
import '../styles/products.css'
import { Link } from 'react-router-dom';
// import iconCart from '../assets/images/iconCart.png'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
// import { product } from '../product';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    console.log(carts);
    const {id, name, price, image, slug} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }
  return (
    <div className='product-container'>
      <Link to={slug}>
        <img src={image} alt='' className='p-img' />
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
      <div className='circles'>
      <div className='circle one'></div>
      <div className='circle two'></div>
      <div className='circle three'></div>
      </div>
      <div className='product-card-footer'>
      
        <p className='price'>
            $<span className=''>{price}</span>
        </p>
        <button className='add-btn' onClick={handleAddToCart}>
        {/* <img src={iconCart} alt='' className='add-btn-img' /> */}
        Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCart
