import { formatPrice } from "./utils/index";

export default function Cart({cart, checkout}){
    let total = cart.reduce((acc, item) => acc + item.pizza.sizes[item.size], 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {
                cart.length ?
                (
                    <table>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Type</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td className="size">{item.size}</td>
                                    <td className="type">{item.pizza.name}</td>
                                    <td className="price">{formatPrice(item.price)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
                : <span>( Empty )</span>
            }
            <p>Total: {formatPrice(total)}</p>
            <button onClick={checkout}>Checkout</button>
        </div> 
    )

}