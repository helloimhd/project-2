var React = require('react');
var MemberLayout = require('./memberLayout');

class Games extends React.Component {

    render () {
        const actionLink = `/rent/${this.props.packageId}/games`;

        const rentGames = this.props.rentGames;
        // return the array of objects

        let allGames = rentGames.map(obj => {

            return <div class="games-container">
                        <div class="gameImg-container">
                            <img src={obj.img} alt={obj.name} />
                        </div>

                        <div class="title-container">
                            <div class="form-group" name="gameSelection">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" name="games_id" value={obj.id}/>
                                    <label class="form-check-lable" for="gridCheck">{obj.name}</label>
                                </div>
                            </div>
                        </div>
                    </div>
        }) // end of map




        return (<MemberLayout>

            <h1>GameRun!</h1>
            <form method="POST" action={actionLink}>
            <div class="home-container">
                {allGames}
            </div>

            <div class="row float-right">
                <button type="submit" class="btn btn-dark btn-lg" id="backButton">Next
                </button>
            </div>
            </form>

        </MemberLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Games;