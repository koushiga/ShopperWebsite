import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const {product}=props;
    const{addToCart}=useContext(ShopContext)

  return (
    <div className='Productdisplay'>
        <div className='Productdisplay-left'>
            <div className='Productdisplay-img-list'>
                <img src={product.image} alt="productimage"/>
                <img src={product.image} alt="productimage"/>
                <img src={product.image} alt="productimage"/>
                <img src={product.image} alt="productimage"/>
            </div>
            <div className='Productdisplay-image'>
                <img className='productdisplay-main-img' src={product.image} alt="productimage"/>
            </div>
        </div>
        <div className='Productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt="starticon"/>
                <img src={star_icon} alt="starticon"/>
                <img src={star_icon} alt="starticon"/>
                <img src={star_icon} alt="starticon"/>
                <img src={star_dull_icon} alt="starticon"/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                A Lightweight, usually knitted, pullover shirt, colse-fitting and a round neckline and short sleeves, worn as an under shirt or outer garment.
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top </p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}
