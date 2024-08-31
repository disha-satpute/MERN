import OOPConcept from "../../Entity/Services/OOPConcept";
import InventoryMgmt from "../../Entity/Services/InventoryMgmt";
import Line from "../../Entity/Services/Drawing/Line";

//React Component
function Home() {
    //JSX Syntax
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
         let mgr= InventoryMgmt.getManager();
         let data=mgr.getAll();
         console.log("Inventatary management Data: "+ JSON.stringify(data));
       }
     
     
     
       const relationShipConcept=()=>{
         let line=new Line(10,20,"red",20);
         line.draw();
       }
       return (
         <div className="Home">
           <div class="body">
             <center>
               <h2>Welcome to our platform. this is our new project name as</h2>
               <b>
                 <i>
                   <p>💰Project Based Learning💰</p>
                 </i>
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

