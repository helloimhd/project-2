var React = require('react');
var Layout = require('./layout');

class Login extends React.Component {

    render () {
        return (<Layout>

            <div class="new-header">
                <h1>Login <img src="https://img.icons8.com/ios/100/000000/exercise-filled.png" /></h1>
            </div>

            <div class="container">
                <form method="POST" action="/login">

                    <div class="form-row">
                        <div class="col">
                            <label for="username">Username</label>
                            <input type="text" class="form-control form-control-lg" name="username" placeholder="Enter your username" required/>
                        </div>

                        <div class="col">
                            <label for="password">Password</label>
                            <input type="password" class="form-control form-control-lg" name="password" placeholder="Enter your password" required/>
                        </div>
                    </div>

                    <br />

                    <button type="submit" class="btn btn-dark btn-lg float-right" id="loginButton">Login</button>

                </form>
            </div>

        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Login;