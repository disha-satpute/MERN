import { Link } from "react-router-dom";

function Dashboard(){

return(
   <div>
    <h6>
        Dashboard
    </h6>
    <Link to ="/Linechart">Line Chart</Link>   |     <Link to ="/Piechart">Pie Chart</Link>   |   <Link to ="/Barchart">Bar Chart</Link>
   </div>
);
}
export default Dashboard;