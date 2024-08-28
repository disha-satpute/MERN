
import Navbar from './routes/Navbar';
import  AppRoute from './routes/Route';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <center>
    <div>
      <h1>
        Transflower Learning Pvt.Ltd </h1>
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
