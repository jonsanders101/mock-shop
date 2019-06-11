import React from 'react';
import { productData } from './data/productData';
import ProductTile from './ProductTile';

const ProductList = ({handleAddToBasket}) => 
<section className="product-list">
    <h1>Products</h1>
    <ul>
        {productData.map(product => <li>
            <ProductTile handleAddToBasket={handleAddToBasket} product={product} />
        </li>)}
    </ul>
</section>

export default ProductList;