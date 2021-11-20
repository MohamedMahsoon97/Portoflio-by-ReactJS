import React from 'react';
import Product from '../Product/Product';
import { products } from '../../data-api';
import "./productList.css";

function ProductList() {
      return (
            <div className="product-list">
                  <div className="product-list-texts">
                        <h1 className="product-list-title">Create & inspire. It's Lama</h1>
                        <p className="product-list-desc">
                        Lama is a creative portfolio that your work has been waiting for.
                        Beautiful homes, stunning portfolio styles & a whole lot more awaits
                        inside.
                        </p>
                  </div>
                  <div className="my-products">
                        {
                              products.map( product => (
                                    <Product key={product.id} img={product.img} link={product.link}/>
                              ))
                        }
                  </div>
            </div>
      )
}
export default ProductList;