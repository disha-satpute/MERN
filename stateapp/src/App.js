
import './App.css';
import Counter from './Counter';
import Details from './Details';

function App() {
  var Title="Transflower";

  var products=[
    {id:12, title:"Phone", description:"Iphone 12",unitprice:56,likes:2345,imageurl:"/images/phone.jpg"},
    {id:13, title:"Laptop", description:"DELL",unitprice:15,likes:67567,imageurl:"/images/laptop.jpg"},
    {id:14, title:"telephone", description:"Lenonvo",unitprice:213,likes:7867,imageurl:"/images/telephone.jpg"},
    {id:15, title:"Computer", description:"HP with nvidia",unitprice:24,likes:5670,imageurl:"/images/pc.jpg"},
    {id:16, title:"Earpod", description:"Apple",unitprice:12,likes:8900,imageurl:"/images/airpod.jpg"},
    {id:16, title:"Watch", description:"Rolex",unitprice:43,likes:5645,imageurl:"/images/watch.jpg"}

];
  return (
    <div>
       <h2>{Title}</h2>

       <table border={2}>
                <tr>
                  {
                    products.map((product)=>(
                      <td>
                            <Details title={product.title} description={product.description}
                                      unitprice={product.unitprice} likes={product.likes}
                                      image={product.imageurl}/>
                      </td>
                    ))
                  }
              </tr>
              </table>

    </div>
  );
}

export default App;







