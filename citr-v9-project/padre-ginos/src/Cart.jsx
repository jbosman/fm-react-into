const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});


function Cart({ cart, checkout }){
  let total = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {
          cart.map(({ pizza, size, displayPrice }, i) => (
            <li key={i}>
              <span className="size">{size}</span>
              <span className="type">{pizza.description}</span>
              <span className="price">{displayPrice}</span>
            </li>
          ))
        }
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>    
    </div>
  )
}

export default Cart;