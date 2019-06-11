import React from 'react';

const ProductTile = ({product, handleAddToBasket}) => 
<div>
    <span>{product.productName}</span>
    <span>Cost: {product.price}</span>
    <button onClick={handleAddToBasket} value={product.productId}>Add to Basket</button>
</div>

export default ProductTile;