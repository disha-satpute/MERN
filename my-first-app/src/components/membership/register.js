function Register() {
    return (
     
          <center>
            <u>
              <h1>Register</h1>
            </u>
  
            <form method="post" action="/register">
              <table>
                <tr>
                  <td>
                    <p>
                      Email Address:
                    </p>
                  </td>
                  <td>
                    <input type="email" name="email" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                    Password:
                    </p>
                  </td>
                  <td>
                    <input type="password" name="password" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                    City:
                    </p>
                  </td>
                  <td>
                    <input type="text" name="City" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Age:
                    </p>
                  </td>
                  <td>
                    <input type="number" name="age" />
                  </td>
                </tr>
                <tr>
                  <td> </td>
                  <td>
                    <input class="button" type="submit" value="register" />
                  </td>
                </tr>
              </table>
            </form>
          </center>
    );
  }
  
  export default Register;