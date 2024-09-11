import { useState } from "react";

//Props: Sending value from parent component to child
//Whenever state of  component is changes, react automatically renders component
const Details=({like})=>{
    //define state
    const [count, setCount]=useState(like);

    const increment=()=>{
        setCount(count +1);
        console.log(count);
    }
    const decrement=()=>{
        setCount(count-1);
        console.log(count);
    }
    return(
        <div>
            <button onClick={decrement}>-</button>
            <label>{count}</label>
            <button onClick={increment}>+</button>

        </div>
    );

};
 
export default Details;