var React = require('react');
var MemberLayout = require('../member/memberLayout');

class NoOrder extends React.Component {

    render () {

        return (<MemberLayout>

            <div class="container">
                <div class="warning-container">
                    <p>You have not rented any games. <br/>
                    Start renting!
                    </p>

                    <a href="/rent">Rent</a>
                </div>
            </div>
        </MemberLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = NoOrder;