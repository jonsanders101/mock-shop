import React from 'react';
import { productData } from './data/productData';
import ProductTile from './ProductTile';

const ProductList = () => 
<section>
    <h1>Products</h1>
    <ul>
        {productData.map(product => <li><ProductTile product={product} /></li>)}
    </ul>
</section>

export default ProductList;