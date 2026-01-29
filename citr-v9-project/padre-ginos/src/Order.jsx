import { useState } from 'react';

import Pizza from "./Pizza";

export default function Order(){
    const [pizzaType, setPizzaType] = useState('pepperoi');
    const [pizzaSize, setPizzaSize] = useState('M');

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label type="pizza-type">Pizza Type</label>
                        <select name="pizza-type" value={pizzaType} onChange={(e) => setPizzaType(e.target.value)} >
                            <option value="pepperoni">Pepperoni Pizza</option>
                            <option value="hawaiian">Hawaiian Pizza</option>
                            <option value="big_meat">Big Meat Pizza</option>
                        </select>
                    </div>
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
                    <button type="submit">Add to Cart</button>
                    <div className="order-pizza">
                        <Pizza
                            name="Pepperoni"
                            description="pepperoni pizza"
                            image="/public/pizzas/pepperoni.webp"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}