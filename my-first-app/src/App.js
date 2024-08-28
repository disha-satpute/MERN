
import Navbar from './routes/Navbar';
import  AppRoute from './routes/Route';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>
        Transflower Learning </h1>
        <Router>
             <Navbar/>
                 <hr/>
             <AppRoute/>
        </Router>

    </div>
  );
}

export default App;
