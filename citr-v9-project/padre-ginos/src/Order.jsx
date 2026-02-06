import { useState, useEffect } from 'react';

import Pizza from "./Pizza";
import Cart from './Cart';

import { transformToCurrency } from './internationalizationFormatter';

export default function Order(){
    const [pizzaTypes, setPizzaTypes] = useState([]);
    const [pizzaType, setPizzaType] = useState('pepperoni');
    const [pizzaSize, setPizzaSize] = useState('M');
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    async function checkout(){
        setLoading(true);
        await fetch("/api/order",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({cart})
        });
        setCart([]);
        setLoading(false);
    }

    let price, selectedPizza;

    if(!loading){
        selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
        price = transformToCurrency(selectedPizza.sizes[pizzaSize]);
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
        <div className='order-page'>
        <div className="order">
            <h2>Create Order</h2>
            <form onSubmit={ (e)=>{
                    e.preventDefault();
                    setCart([
                        ...cart, 
                        { 
                            pizza: selectedPizza, 
                            size: pizzaSize, 
                            price
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
                            <p>{price}</p>
                        </div>
                    )
                }
            </form>
        </div>
        {
            loading ? <h2>Loading...</h2> : <Cart cart={cart} checkout={checkout} />
        }
        </div>
    )
}