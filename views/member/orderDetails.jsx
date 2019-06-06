var React = require('react');
var MemberLayout = require('./memberLayout');

const moment = require('moment');

class OrderDetails extends React.Component {

    render () {

        const today = moment().format('YYYY-MM-DD');
        console.log(today)
        const gamesDetails = this.props.gamesDetails;
        // return the array of objects

        const memberDetails = this.props.memberDetails[0];

        let allGames= gamesDetails.map(obj => {
            return <div class="card">
                      <img src={obj.img} class="card-img-top" alt={obj.name} />
                    {/*  <div class="card-body">
                        <h5 class="card-title">{obj.name}</h5>
                      </div>*/}
                      <input name="games_id" value={obj.id} hidden />
                      <input class="max_duration" name="max_duration" value={obj.max_duration} hidden />
                    </div>

        }) // end of map


        return (<MemberLayout>

            <h2>Confirm Your Order!</h2>

            <div class="container">
            <form name="orderForm" action="order" onSubmit="return validateForm()" method="POST" >
                <div class="card-columns">
                    {allGames}
                </div>
                <div class="form-row">
                    <div class="col">
                        <label for="username">Username</label>
                        <input type="text" class="form-control form-control-lg" name="username" value={memberDetails.username} readOnly="readonly"/>
                    </div>

                    <div class="col">
                        <label for="duration">Duration</label>
                        <input type="number" class="form-control form-control-lg" name="duration" placeholder="Min 1hr" min="1" id="duration" required />
                    </div>
                </div>

                <br/>

                <div class="form-row">
                    <div class="col">
                        <label for="email">Email</label>
                        <input type="text" class="form-control form-control-lg" name="email" value={memberDetails.email} readOnly="readonly"/>
                    </div>

                    <div class="col">
                        <label for="time">Time</label>
                        <input type="time" class="form-control form-control-lg" name="time" step="3600" required/>
                    </div>
                </div>

                <br/>

                <div class="form-row">
                    <div class="col">
                        <label for="contact_num">Contact Number</label>
                        <input type="text" class="form-control form-control-lg" name="contact_num" value={memberDetails.contact_num} readOnly="readonly"/>
                    </div>

                    <div class="col">
                        <label for="date">Date</label>
                        <input type="date" class="form-control form-control-lg" name="date" min={today} required/>
                    </div>
                </div>

                <br/>

                <div class="form-row">
                    <div class="col">
                    </div>

                    <div class="col">
                        <label for="address">Address</label>
                        <textarea id="textareaInput" class="form-control" name="address" rows="5" required/>
                    </div>
                </div>

                <br/>

                <button type="submit" class="btn btn-dark btn-lg float-right" id="order-button">Submit</button>
            </form>
            </div>

            <script src="/orderDetails.js"></script>
            <script src="/sendEmail.js"></script>


        </MemberLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = OrderDetails;