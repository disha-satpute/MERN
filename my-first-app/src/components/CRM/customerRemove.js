import CustomerService from "../../services/CustomerService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Remove(){

    const{id}=useParams();
    CustomerService.remove(Number(id));

    const navigator=useNavigate();
    const oncstClick=()=>{
        navigator('/customer');
    }


    return(
    <div>
        <h3>Id :{id}</h3>
        <h3>This data will be deleted</h3>
        <button onClick={oncstClick}>Back to Page</button>
    </div>
    );
}

    export default Remove;