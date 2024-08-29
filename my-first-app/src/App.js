
import Navbar from './routes/Navbar';
import  AppRoute from './routes/Route';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const name="Disha";
  return (
    <center>
    <div>
      <h1>Hello,{name}</h1>

       <h1>Welcome in Transflower Learning Pvt.Ltd </h1>
        <Router>
             <Navbar/>
                 <hr/>
             <AppRoute/>
        </Router>

    </div>
    </center>
  );
}

export default App;
