import { Link } from "react-router-dom";

function Dashboard(){

return(
<center>
   <div>
    <h4>
        Dashboard
    <p/>
    <Link to ="/Linechart">Line Chart</Link>   |     <Link to ="/Piechart">Pie Chart</Link>   |   <Link to ="/Barchart">Bar Chart</Link>
    </h4>
   </div>
   </center>
);
}
export default Dashboard;