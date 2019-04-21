var React = require('react');
var AdminLayout = require('./adminLayout');

class Orders extends React.Component {

    render () {

        const orders = this.props.orders;
        // return the array of objects

        let allOrders = orders.map(obj => {

        //const actionDelete = `/myTweeds/${obj.id}/delete?_method=delete`;
            return <tr>
                <td>{obj.tweeds}</td>
                <td>
                <form method="POST" action={actionDelete}>
                    <button type="submit" class="btn">❌</button>
                </form>
                </td>
            </tr>


            }) // end of map
        return (<UserLayout>

            <h1>My Personal Tweeds</h1>

            <div class="personalTweedsMain-container">

                <div class="tweedForm-container">

                    <form method="POST" action="/tweed" class="form-inline" autocomplete="off">

                        <input type="text" class="form-control form-control-lg" name="tweed" placeholder="What are you thinking?" size="55" />

                        <div class="tweedButton-container">
                            <button type="submit" class="btn btn-primary btn-lg float-right">Tweed</button>
                        </div>
                    </form>

                </div>

                <div class="personalTweeds-container">
                    <table class="table table-hover">
                      <tbody>
                        {allTweeds}
                      </tbody>
                    </table>
                </div>

            </div>

        </UserLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Orders;