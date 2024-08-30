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

        <div style={{ textAlign: 'center' }}>
            <h2>Customer Details</h2>
            <p style={{ display: 'inline-block', textAlign: 'left',fontSize:'20px' }}>
           <p>Name : {cst.name}</p>
           <p>City : {cst.city}</p>
           <p>Email : {cst.email}</p>
           <p>Password : {cst.Password}</p>

           </p>
<br/>
           <button onClick={oncstClick}>Back to Page</button>

        </div>
    );
}

export default Details;
