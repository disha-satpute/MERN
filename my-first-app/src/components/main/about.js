
//React Component
function About() {
    //JSX Syntax
    return (
      <center>
            <div>
        <Welcome name="Disha" />

                <h2>This is About us</h2>
                <hr/>
                  <p>Transflower : Online Virutal Class Room with Live Mentor</p>
                  <p>Doing ordinary things extra ordinarily</p>
                  <p>Mentor as a Service</p>
            </div>
            </center>
    );
  }

//react props
  function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  export default About;
