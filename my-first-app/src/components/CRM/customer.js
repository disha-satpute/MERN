import { Link } from "react-router-dom";
import { useState } from "react";

function Customer(){
return(
    <center>
<div>
    <h5>
        1. Disha Satpute   <Link to ="/Insert">Insert</Link>|   <Link to="/Update">Update</Link>  <br></br>
        2. Sanika Bhor     <Link to ="/Insert">Insert</Link>|   <Link to="/Update">Update</Link>  <br></br>
        3. Kirti Kale      <Link to ="/Insert">Insert</Link>|   <Link to="/Update">Update</Link>   <br></br>
    </h5>
</div>

</center>
);
}
export default Customer;