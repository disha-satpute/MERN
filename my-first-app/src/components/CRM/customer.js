import { Link } from "react-router-dom";
import CustomerService from "../../services/CustomerService";

function Customer(){
    const cst = CustomerService.getall();
return(
    <div>
        <h3>
    <Link to="/Insert">Insert new Customers</Link>
    <div style={{ textAlign: 'center' }}>
        <ol style={{ display: 'inline-block', textAlign: 'left' }}>
                 {
                    cst.map((customer)=>(
                         <li>{customer.name}   |  <Link to={`/Details/${customer.id}`}>Details</Link>|   <Link to={`/Update/${customer.id}`}>Update</Link>|   <Link to={`/remove/${customer.id}`}>Remove</Link></li>
                    ))
                 }
            </ol>
            </div>
            </h3>
</div>

);
}
export default Customer;