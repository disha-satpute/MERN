import { Link } from "react-router-dom";
import CustomerService from "../../services/CustomerService";

function Customer(){
    const cst = CustomerService.getall();
return(

<div>
    <h2>
        <Link to="/Insert">Insert new Customers</Link>
        <ol>
                 {
                    cst.map((customer)=>(
                         <li>{customer.name}   |  <Link to={`/Details/${customer.id}`}>Details</Link>|   <Link to={`/Update/${customer.id}`}>Update</Link>|   <Link to={`/remove/${customer.id}`}>Remove</Link></li>
                    ))
                 }
            </ol>
    </h2>
</div>

);
}
export default Customer;