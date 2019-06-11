import React from 'react';

const ProductTile = ({product}) => 
<div>
    <span>{product.productName}</span>
    <span>Cost: {product.price}</span>
</div>

export default ProductTile;