import { Link } from "react-router-dom";

function Customer(){
return(
<div>
    <h5>
        1. Disha Satpute   <Link to ="/Insert">Insert</Link>|   <Link to="/Update">Update</Link>  <hr/>
        2. Sanika Bhor     <Link to ="/Insert">Insert</Link>|   <Link to="/Update">Update</Link>    <hr/>
        3. Kirti Kale      <Link to ="/Insert">Insert</Link>|   <Link to="/Update">Update</Link>    <hr/>
    </h5>
</div>
);
}
export default Customer;