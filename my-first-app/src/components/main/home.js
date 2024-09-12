import OOPConcept from "../../Entity/Services/OOPConcept";
import InventoryMgmt from "../../Entity/Services/InventoryMgmt";
import Line from "../../Entity/Services/Drawing/Line";
import Point from "../../Entity/Services/Drawing/Point";

//React Component
function Home() {

  const performOpertaion =()=>
    {
      let Additon=OOPConcept.Addition(10,20);
      let Subtraction = OOPConcept.Subtraction(30,20);
      let Multiplication = OOPConcept.Multiplication(5, 2);
      let Division = OOPConcept.Division(10, 2);

      console.log("Addition: "+Additon);
      console.log("Subtraction: "+Subtraction);
      console.log("multiplication: "+Multiplication);
      console.log("division: "+Division);
    }

    const inventatoryManagement=()=>{
      let mgr=InventoryMgmt.getManager();
      let data=mgr.getAll();
      console.log("Inventatary management Data: "+ JSON.stringify(data));
    }

    const relationShipConcept=()=>{
      let p1=new Point(10,20);
      let p2=new Point(30,40);
      let line=new Line(p1,p2,"red",20);
      line.draw();
    }
       return (
         <div className="Home">
           <div class="body">
             <center>
               <b>
                    <h2>
                   Project Based Learning
                   </h2>
               </b>

           <button onClick={performOpertaion}>Invoke OOP concept</button>
          <button onClick={inventatoryManagement}>Invoke OOP concept</button>
          <button onClick={relationShipConcept}>Invoke RelationShip concept</button>
             </center>
           </div>
         </div>
       );
     }


  export default Home;

