import  { useState } from 'react'
import EventEmitter from 'eventemitter3'

const emitter=new EventEmitter();

function Publisher(){
  const [text,setText]=useState('');

  const handlechange=(event)=>{
    setText(event.target.value);
  };
  const handleClick=(event)=>{
    emitter.emit('update',text)
  }
  return(
    <>
    <h3>
      publisher
    </h3>
    <input type="text" value= {text} onChange={handlechange}/>
    <button onClick={handleClick}>Publish</button>
    </>
  );
};


function Subscriber(){
  return(
    <>
    <h3>
      Subscriber
    </h3>
    <p>Data : </p>
    </>
  );
};


function App() {

  return (
     <> 
     <div>
      <h2>Component Communication</h2>

      <table>
        <tr>
          <td><Publisher/></td>
          <td><Subscriber/></td>
        </tr>
      </table>
     </div>

     </>
  )
}

export default App
