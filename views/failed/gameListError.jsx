var React = require('react');
var Layout = require('../layout');

class GameListError extends React.Component {

    render () {

        return (<Layout>

            <div class="container">
                <div class="warning-container">
                    <p>WHOOPS! Internal Server Error. <br/>
                    Please try again later.
                    </p>

                </div>
            </div>
        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = GameListError;