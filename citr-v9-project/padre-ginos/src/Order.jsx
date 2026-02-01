import { useState, useEffect } from 'react';

import Pizza from "./Pizza";
import Cart from './Cart';

export default function Order(){
    const [pizzaTypes, setPizzaTypes] = useState([]);
    const [pizzaType, setPizzaType] = useState('pepperoni');
    const [pizzaSize, setPizzaSize] = useState('M');
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    let price, displayPrice, selectedPizza;

    const intl = new Intl.NumberFormat(
        "en-US", 
        {
            style: "currency",
            currency: "USD"
        }
    );

    if(!loading){
        selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
        price = selectedPizza.sizes[pizzaSize];
        displayPrice = intl.format(price);
    }

    async function fetchPizzaType(){
        const pizzaRes = await fetch('/api/pizzas');
        const pizzaJson = await pizzaRes.json();
        console.log(pizzaJson)
        setPizzaTypes(pizzaJson);
        setLoading(false);
    }

    useEffect(() => { fetchPizzaType(); }, [])

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form onSubmit={ (e)=>{
                    e.preventDefault();
                    setCart([
                        ...cart, 
                        { 
                            pizza: selectedPizza, 
                            size: pizzaSize, 
                            price,
                            displayPrice
                        }
                    ]);
                }}
            >
                <div>
                    <div>
                        <label type="pizza-type">Pizza Type</label>
                        <select name="pizza-type" value={pizzaType} onChange={(e) => setPizzaType(e.target.value)} >
                            { pizzaTypes.map((pizza) => (<option key={pizza.id} value={pizza.id}>{pizza.name}</option>)) }
                        </select>
                    </div>
                    <div>
                        <label type="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input 
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    checked={ pizzaSize === 'S'} 
                                    type="radio"
                                    name="pizza-size"
                                    value="S"
                                    id="pizza-s"
                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input 
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    checked={ pizzaSize === 'M'} 
                                    type="radio"
                                    name="pizza-size"
                                    value="M"
                                    id="pizza-m"
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input 
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    checked={ pizzaSize === 'L'} 
                                    type="radio"
                                    name="pizza-size"
                                    value="L"
                                    id="pizza-l"
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to Cart</button>
                </div>
                {
                    loading ? <h3>Loading pizza...</h3> :
                    (
                        <div className="order-pizza">
                            <Pizza
                                name={selectedPizza.name}
                                description={ selectedPizza.description}
                                image={selectedPizza.image}
                            />
                            <p>{displayPrice}</p>
                        </div>
                    )
                }
            </form>
            {
                loading ? <h2>Loading...</h2> : <Cart cart={cart} />
            }
        </div>
    )
}