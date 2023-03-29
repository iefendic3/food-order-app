import Card from "../Card/Card";
import { useContext, useState } from "react";
import styles from '../FoodItem/FoodItem.module.css'
import CartContext from '../../context/cartContext'

export default function FoodItem(props) {
    const [amount, setAmount] = useState(1);
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    }
    const ctx = useContext(CartContext);
    console.log('naziv iz itema ',props.title)
    return (
        <li>
            <Card className="flex flex-row justify-between w-full m-2">
                <div className="flex flex-col items-start">
                    <h1 className="text-bold">{props.name}</h1>
                    <h2>{props.description}</h2>
                    <h2 className={styles.price}>${props.price}</h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <h2 className="mr-2">Amount</h2>
                        <input onChange={amountChangeHandler} className={styles.amount} value={amount} type="number" />
                    </div>
                    <button className={`${styles.add_button} bg-red-800 text-white p-2 flex justify-end items-end`}>Add</button>
                </div>
            </Card>
        </li>
    );
}