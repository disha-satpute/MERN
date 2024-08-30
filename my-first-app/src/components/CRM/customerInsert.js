function Insert(){
    return(
        <center>
    <div>
        <p>Insert New Customer</p>
            <form>
                <table>
                    <tr>
                        <td><label>ID</label></td>
                        <td><input type="number" id="id" name="id"  /></td>
                    </tr>

                    <tr>
                        <td><label>Name</label></td>
                        <td><input type="text" id="name" name="name"  /></td>
                    </tr>


                    <tr>
                        <td><label>City</label></td>
                        <td><input type="text" id="city" name="city" /></td>
                    </tr>

                    <tr>
                        <td><label>Email ID</label></td>
                        <td><input type="email" id="email" name="email"  /></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" id="password" name="password"  /></td>
                    </tr>
                    <tr><br/> <br/>
                        <td><button type="submit">Insert</button></td>
                    </tr>
                </table>
            </form>
    </div>
    </center>
    );
    }
    export default Insert;