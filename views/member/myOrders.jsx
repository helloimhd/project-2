var React = require('react');
var MemberLayout = require('./memberLayout');

const moment = require('moment');

class MyOrders extends React.Component {

    render () {

        const myOrders = this.props.myOrders;
        // return the array of objects
        //console.log(myOrders)

        let allOrders = myOrders.map(obj => {

            return <tr>
                <th scope="row">{obj.id}</th>
                <td>{obj.name}</td>
                <td>
                    <ul>
                        <li>{obj.games[0]}</li>
                        <li>{obj.games[1]}</li>
                        <li>{obj.games[2]}</li>
                        <li>{obj.games[3]}</li>
                    </ul>
                </td>
                <td>{moment(obj.date).format('DD MMMM YYYY')}</td>
                <td>{moment(obj.time, "hh").format('LT')}</td>
                <td>{obj.duration}hr</td>
                <td>{obj.address}</td>
            </tr>


            }) // end of map
        return (<MemberLayout>

            <h1>My Orders</h1>

            <div class="container">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                        <th>Order</th>
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


        </MemberLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = MyOrders;