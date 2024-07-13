import React from 'react'
import '../styles/cartTab.css'

const CartTab = () => {
  return (
    <div className='cartTab-container'>
      <div className='category cart-div'>
        <h3>Category</h3>
        <hr />
        <div className='div-item'>
<input type="radio" id="fashion" name="fav_language" value="FASHION" />
  <label for="fashion">FASHION</label><br />
</div>

<div className='div-item'>
<input type="radio" id="makeup" name="fav_language" value="MAKEUP" />
  <label for="makeup">MAKEUP</label><br />
</div>
<div className='div-item'>
<input type="radio" id="electronic" name="fav_language" value="ELECTRONIC" />
  <label for="electronic">ELECTRONIC</label><br />
</div>
<div className='div-item'>
<input type="radio" id="jewelry" name="fav_language" value="JEWELRY" />
  <label for="jewelry">JEWELRY</label><br />
</div>
<div className='div-item'>
<input type="radio" id="furniture" name="fav_language" value="FURNITURE" />
  <label for="furniture">FURNITURE</label><br />
</div>
      </div>

      <div className='gender cart-div'>
        <h3>Gender</h3>
        <hr />
        <div className='div-item'>
        <input type="radio" id="men" name="fav_language" value="MEN" />
         <label for="men">MEN</label><br />
        </div>

        <div className='div-item'>
        <input type="radio" id="women" name="fav_language" value="WOMEN" />
         <label for="women">WOMEN</label><br />
        </div>

        <div className='div-item'>
        <input type="radio" id="unisex" name="fav_language" value="FURNITURE" />
         <label for="unisex">UNISEX</label><br />
        </div>
      </div>

      <div className='size cart-div'>
        <h3>Size</h3>
        <hr />
        <div className='cart-div-row'>
        <div className='row'>
          4XL
          <p>XL</p>
        </div>

        <div className='row'>
          3XL
          <p>L</p>
        </div>

        <div className='row'>
          2XL
          <p>S</p>
        </div>

        <div className='row'>
          1XL
          <p>XS</p>
        </div>

        </div>

      </div>
      <div className='cart-div'>
      <h3>Color</h3>
      <hr />
<div className='color'>
          <div className='circle red'>
          </div>

          <div className='circle black'>
          </div>

          <div className='circle green'>
          </div>

          <div className='circle purple'>
          </div>

          <div className='circle orange'>
          </div>

          <div className='circle navy'>
          </div>
      </div>

      </div>
    </div>


  )
}

export default CartTab
