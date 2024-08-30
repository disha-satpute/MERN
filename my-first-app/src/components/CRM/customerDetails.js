import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../services/CustomerService";
const Details=()=>{

    const{id}=useParams();
    const cst=CustomerService.getByid(Number(id));

    const navigator=useNavigate();
    const oncstClick=()=>{
        navigator('/customer')
    }
    return (
        <div>
            <h2>Customer Details</h2>
            <br/>
           <p>Name: {cst.name}</p>
           <p>City:{cst.city}</p>
           <p>Email:{cst.email} Rs</p>
           <p>Password:{cst.password}</p>


           <button onClick={oncstClick}>Back to Page</button>
    
        </div>
    );
}

export default Details;
