import CustomerService from "../../services/CustomerService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Remove(){

    const{id}=useParams();
    const cst=CustomerService.remove(Number(id));

    const navigator=useNavigate();
    const oncstClick=()=>{
        navigator('/customer');
    }


    return(
    <div>
        <h5>Id :{id}</h5>
<h5>This data will be deleted</h5>



           <button onClick={oncstClick}>Back to Page</button>

 </div>
    );
}

    export default Remove;