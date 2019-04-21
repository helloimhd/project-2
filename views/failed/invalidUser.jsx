var React = require('react');
var Layout = require('../layout');

class InvalidUser extends React.Component {

    render () {

        return (<Layout>

            <div class="container">
                <div class="warning-container">
                    <p>
                        Invalid username/password! <br/>
                        Please try again.
                    </p>

                    <a href="/login">Login</a>
                </div>
            </div>
        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = InvalidUser;