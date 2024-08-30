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
      <center>
            <div>
                <h2>Contact us</h2>

           <p>Transflower : Online Virutal Class Room with Live Mentor</p>
                  <p>Doing ordinary things extra ordinarily</p>
                  <p>Mentor as a Service</p>

                  <button onClick={onHomeClick}>Home</button>
                  <button onClick={onAboutClick}>About</button>
            </div>
            </center>
    );
  }

  export default Contact;