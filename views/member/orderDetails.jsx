var React = require('react');
var MemberLayout = require('./memberLayout');

class OrderDetails extends React.Component {

    render () {

        const gamesDetails = this.props.gamesDetails;
        // return the array of objects

        const memberDetails = this.props.memberDetails[0];

        let allGames= gamesDetails.map(obj => {
            return <div class="card" style={{width:'18rem'}}>
                      <img src={obj.img} class="card-img-top" alt={obj.name} />
                      <div class="card-body">
                        <h5 class="card-title">{obj.name}</h5>
                      </div>
                      <input name="games_id" value={obj.id} hidden />
                    </div>

        }) // end of map




        return (<MemberLayout>

            <h1>GameRun!</h1>

            <form method="POST" action="order">
                {allGames}
                <div class="form-row">
                    <div class="col">
                        <label for="username">Username</label>
                        <input type="text" class="form-control form-control-lg" name="username" value={memberDetails.username} readonly="readonly"/>
                    </div>

                    <div class="col">
                        <label for="duration">Duration</label>
                        <input type="number" class="form-control form-control-lg" name="duration" placeholder="$10 per hr" min="1" />
                    </div>
                </div>


                <div class="form-row">
                    <div class="col">
                        <label for="email">Email</label>
                        <input type="text" class="form-control form-control-lg" name="email" value={memberDetails.email} readonly="readonly"/>
                    </div>

                    <div class="col">
                        <label for="time">Time</label>
                        <input type="time" class="form-control form-control-lg" name="time" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="col">
                        <label for="contact_num">Contact Number</label>
                        <input type="text" class="form-control form-control-lg" name="contact_num" value={memberDetails.contact_num} readonly="readonly"/>
                    </div>

                    <div class="col">
                        <label for="date">Date</label>
                        <input type="date" class="form-control form-control-lg" name="date" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="col">
                    </div>

                    <div class="col">
                        <label for="address">Address</label>
                        <textarea class="form-control" name="address" rows="5" />
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-lg float-right">Submit</button>
            </form>

        </MemberLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = OrderDetails;