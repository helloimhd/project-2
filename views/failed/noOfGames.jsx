var React = require('react');
var MemberLayout = require('../memberLayout');

class NoOfGames extends React.Component {

    render () {

        return (<MemberLayout>

            <div class="container">
                <div class="warning-container">
                    <p>Please select <b>4</b> games!</p>

                    <form>
  <input type="button" value="Go back!" onclick="history.back()"/>
</form>
                </div>
            </div>
        </MemberLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = AlreadyExist;