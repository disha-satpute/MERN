import { useState } from "react";
import Counter from "./Counter";
 
 const Details=({title, description,unitprice,likes, image})=>{
    const [name, setName]=useState(title);
    const [info, setInfo]=useState(description)
    const [price, setPrice]=useState(unitprice)
    const [llikes, setLikes]=useState(likes);
    const [img, setImage]=useState(image);

    return(
        <div>
            <table border={2}>
                <tr>
                    <td> <img src={img} width="200" height="200"/></td>
                </tr>
                    <tr>
                        <td>
                        <div>
                                <label>{name}</label> <br/>
                                <label>{info}</label><br/>
                                <label>${price}</label>
                                <Counter likes={llikes}/>
                        </div>
                        </td>
                </tr>
            </table>
        </div>
    );
 
};
 
export default Details;