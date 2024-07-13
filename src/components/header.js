// import React from 'react'
import React, {useState, useEffect} from 'react'
import '../styles/header.css'
import Image from '../assets/images/0.jpg'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from '../stores/cart'

const Header = () => {
  const[totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      setTotalQuantity(total);
  }, [carts])
  const handleOpenTabCart = () => {
      dispatch(toggleStatusTab());
  }
  return (
    <div className='container'>
      <section className='black-top'></section>
      <section className='top-nav'>
        <h2>Shoply</h2>
        <ul>
          <li><Link to="/" className='text-xl font-semibold'>Home.</Link></li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <div className='nav-items'>
        <input type='text' placeholder='What are you looking for?' id="search"></input>
        
        <div className='cart' onClick={handleOpenTabCart}>
        <span className='total' >{totalQuantity}</span>
                <img src={iconCart} alt='iconCart' className='cart-icon'/>
                
            </div>
            </div>

      </section>
      <section className='main-header'>
        <p>Home|Shop</p><br/>
        <p className='btm-txt'>UNLOCK YOUR STYLE</p>
        <div className='img-container'>
        <img src={Image} alt='' className='top-image' />

      
        </div>
      </section>

      {/* <Link to="/" className='text-xl font-semibold'>Home.</Link>
            <div className='w-10 h-10 bg-gray-100 rounded-full
            flex justify-center items-center relative' onClick={handleOpenTabCart}>
                <img src={iconCart} alt='iconCart' className='w-6'/>
                <span className='absolute top-2/3 right-1/2  bg-red-500 text-white text-sm w-5 h-5
                rounded-full flex justify-center items-center' >{totalQuantity}</span>
            </div> */}

    </div>
  )
}

export default Header
