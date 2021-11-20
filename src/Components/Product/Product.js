import React from 'react'
import "./Product.css"

function Product({link , img}) {
      return (
            <div className="product">
                  <div className="product-browser">
                        <div className="product-circle"></div>
                        <div className="product-circle"></div>
                        <div className="product-circle"></div>
                  </div>
                  <a href={link} target="_blank" rel="noreferrer">
                        <img src={img} alt="img" className="product-img" />
                  </a>
            </div>
      )
}
export default Product;