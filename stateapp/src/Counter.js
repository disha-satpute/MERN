import { useState } from "react";

//Props: Sending value from parent component to child
//Whenever state of  component is changes, react automatically renders component
const Counter=({likes})=>{
    //define state
    const [count, setCount]=useState(likes);

    const increment=()=>{
        setCount(count +1);
        console.log(count);
    }

    return(
        <div>
            <label>Likes {count}</label>
            <button onClick={increment}>+</button>
        </div>
    );

};

export default Counter;