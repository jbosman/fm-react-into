import { transformToCurrency } from './internationalizationFormatter';

function Cart({ cart, checkout }){
  let total = cart.reduce((acc, current) => {
    return acc + current.pizza.sizes[current.size];
  }, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {
          cart.map(({ pizza, size, displayPrice }, i) => (
            <li key={i}>
              <span className="size">{size}</span> - 
              <span className="type">{pizza.description}</span> - 
              <span className="price">{displayPrice}</span>
            </li>
          ))
        }
      </ul>
      <p>Total: {transformToCurrency(total)}</p>
      <button onClick={checkout}>Checkout</button>    
    </div>
  )
}

export default Cart;