var React = require('react');
var AdminLayout = require('./adminLayout');

class Orders extends React.Component {

    render () {

        const orders = this.props.orders;
        // return the array of objects
        //console.log(myOrders)

        let allOrders = orders.map(obj => {

            return <tr>
                <th scope="row">{obj.id}</th>
                <td>
                    {obj.username}
                    <br/>
                    {obj.contact_num}
                    <br/>
                    {obj.email}
                </td>
                <td>{obj.name}</td>
                <td>
                    <ul>
                        <li>{obj.games[0]}</li>
                        <li>{obj.games[1]}</li>
                        <li>{obj.games[2]}</li>
                        <li>{obj.games[3]}</li>
                    </ul>
                </td>
                <td>{obj.date}</td>
                <td>{obj.time}</td>
                <td>{obj.duration}</td>
                <td>{obj.address}</td>
            </tr>


            }) // end of map
        return (<AdminLayout>

            <h1>My Orders</h1>

            <div class="container">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                        <th>Order</th>
                        <th>Username</th>
                        <th>Package</th>
                        <th>Games</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Duration</th>
                        <th>Address</th>
                    </tr>
                    {allOrders}
                  </tbody>
                </table>
            </div>


        </AdminLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Orders;