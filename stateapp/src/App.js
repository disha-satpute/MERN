
import './App.css';
import Counter from './Counter';
import Details from './Details';

function App() {
  var Title="Transflower";
  var likes=5678;

  var price=345;
   var quantity =12;
   var like=234;
  return (
    <div>
       <h2>{Title}</h2>

       <Details like={like}/>

    </div>
  );
}

export default App;
