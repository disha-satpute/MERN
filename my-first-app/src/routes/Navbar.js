import  {Link} from 'react-router-dom';

const Navbar=()=>(
    <center>
    <nav>

    <Link to="/">Home</Link>      |
    <Link to="/about">About</Link>      |
    <Link to="/contact">Contact</Link>      |
    <Link to="/login">Login</Link>      |
    <Link to ="/register">Register</Link>      |
     <Link to="/dashboard">Dashboard</Link>       |
    <Link to="/customer">Customers</Link> |
    <Link to="/List">List</Link> 

    </nav>
    </center>
);

export default Navbar;
