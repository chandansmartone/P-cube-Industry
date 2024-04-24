import React from 'react';
import Slider from 'react-slick';
import './Product.css';
import SimpleImageSlider from "react-simple-image-slider";

const Product = ({ product }) => {
  function isMobileDevice() {
    return window.innerWidth <= 600; // Adjust the threshold as needed
}

  return (
   
    <div class="product-card">
    <div className='img'>
   <SimpleImageSlider
    style={{
        
        width: isMobileDevice() ? 300 : 896, // Adjust width based on device
    }}

    width={440}
    height={350}
    images={product.images}
    showBullets={true}
    showNavs={true}

/>




      </div>
    <div class="content">
      <h2>Product Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida orci nec libero convallis efficitur.</p>
      <p class="price">$19.99</p>
    </div>
  </div>
  );
}

export default Product;
