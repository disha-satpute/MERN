
import './App.css';
import Counter from './Counter';

function App() {
  var Title="Transflower";
  var likes=5678;

  return (
    <div>
       <h2>{Title}</h2>


       <Counter likes ={likes}/>

    </div>
  );
}

export default App;
