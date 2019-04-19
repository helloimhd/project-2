var React = require('react');
var Layout = require('./layout');

class Register extends React.Component {

    render () {
        return (<Layout>

            <div class="new-header">
                <h1>Register New Account</h1>
            </div>

            <div class="form-container">
                <form method="POST" action="/register" autocomplete="off">

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

                    <button type="submit" class="btn btn-primary btn-lg float-right">Register</button>

                </form>
            </div>

        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Register;