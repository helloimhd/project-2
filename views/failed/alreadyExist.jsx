var React = require('react');
var Layout = require('../layout');

class AlreadyExist extends React.Component {

    render () {

        return (<Layout>

            <div class="container">
                <div class="warning-container">
                    <p>Username is already taken. Please register with another username.</p>

                    <a href="/register">Register</a>
                </div>
            </div>
        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = AlreadyExist;