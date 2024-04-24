import React from 'react';
import "../App.css"
import Product from './Product';
import imag1 from "../images/product1.jpg"
import imag2 from "../images/product2.jpg"
import imag3 from "../images/product13jpg.jpg"
import imag21 from "../images/product21.jpg"
import imag22 from "../images/product22.jpg"
import imag31 from "../images/product31.jpg"
import imag32 from "../images/product32.jpg"
import imag33 from "../images/product33.jpg"

const Products = () => {
  const products = [
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
      images: [
        { url: imag1 },
        { url: imag2 }, 
        { url: imag3 },
      ]
    },
    {
      name: "Product 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$29.99",
      images: [
        { url: imag22 },
        { url: imag21 }, 
        { url: null },
      ]
    },
    {
      name: "Product 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$39.99",
      images: [
        { url: imag31 },
        { url: imag32 }, 
        { url: imag33 },
      ]
    },
    {
      name: "Product 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$49.99",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    },
    {
      name: "Product 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$59.99",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    },
    {
      name: "Product 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$69.99",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    },
    {
      name: "Product 7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    },
    {
      name: "Product 8",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$89.99",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    },
    {
      name: "Product 9",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    },
    {
      name: "Product 10",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$109.99",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    }
  ];
  
  console.log(products);
  
  return (
   
    <div className="product-container">
    {products.map((product, index) => (
      <Product key={index} product={product} />
    ))}
  </div>
  )
}

export default Products


