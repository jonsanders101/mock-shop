import React from 'react';

const ProductTile = ({product, handleAddToBasket}) => 
<div>
    <span>{product.productName}</span>
    <span>Cost: {product.price}</span>
    <form onSubmit={handleAddToBasket(product.productId)}>
        <input type='hidden' name='product-id' value={product.productId}/>
        <button type='submit' >Add to Basket</button>
    </form>
</div>

export default ProductTile;