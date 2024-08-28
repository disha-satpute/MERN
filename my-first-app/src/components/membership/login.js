import { Link } from "react-router-dom";

function Login() {
  return (

        <center>
          <u>
            <h1>Login</h1>
          </u>

          <table>
            <tr>
              <td>
                <p>
                  Email Address:
                </p>
              </td>
              <td>
                <input type="email" name="email" id="email" />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                 Password:
                </p>
              </td>
              <td>
                <input type="password" name="password" id="password" />
              </td>
            </tr>
            <tr>
              <td>
                <button>Login</button>
              </td>
              <td>
                <Link to="/register">Register here</Link>
              </td>
            </tr>
          </table>
        </center>
  );
}

export default Login;