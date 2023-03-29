import FoodItem from "../FoodItem/FoodItem";


export default function FoodList(props){

    console.log('xx ', props.meals)

    return (
        <ul className="w-3/4 m-5">
        {props.meals.map((foodItem) => (
            <FoodItem key={foodItem.id} name={foodItem.name} description={foodItem.description} 
            price={foodItem.price} />
        ))}
        </ul>
    );
}