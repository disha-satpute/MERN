//navigation through event handling

import { useNavigate } from "react-router-dom";
//React Component
function Contact() {
    //JSX Syntax
    const Navigator = useNavigate();

    const onHomeClick=()=>{
      Navigator('/');
    }
const onAboutClick=()=>{
  Navigator('/about');
}
    return (
            <div>
                <h2>COntact us</h2>
                <hr/>
           <p>Transflower : Online Virutal Class Room with Live Mentor</p>
                  <p>Doing ordinary things extra ordinarily</p>
                  <p>Mentor as a Service</p>

                  <button onClick={onHomeClick}>Home</button>
                  <button onClick={onAboutClick}>About</button>
            </div>
    );
  }
  
  export default Contact;