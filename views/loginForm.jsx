var React = require('react');
var Layout = require('./layout');

class Login extends React.Component {

    render () {
        return (<Layout>

            <div class="new-header">
                <h1>Login</h1>
            </div>

            <div class="form-container">
                <form method="POST" action="/login">

                    <div class="form-row">
                        <div class="col">
                            <label for="username">Username</label>
                            <input type="text" class="form-control form-control-lg" name="username" placeholder="Enter your username" />
                        </div>

                        <div class="col">
                            <label for="password">Password</label>
                            <input type="password" class="form-control form-control-lg" name="password" placeholder="Enter your password" />
                        </div>
                    </div>

                    <br />

                    <button type="submit" class="btn btn-primary btn-lg float-right">Login</button>

                </form>
            </div>

        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Login;