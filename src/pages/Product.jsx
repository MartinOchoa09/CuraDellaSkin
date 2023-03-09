function Product({ name, price }) {
    
        const product = { name, price };
      
        return (
          <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        );
      
      
}

export default Product;