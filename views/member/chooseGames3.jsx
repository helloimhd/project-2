var React = require('react');
var MemberLayout = require('./memberLayout');

class Games extends React.Component {

    render () {
        const actionLink = `/rent/${this.props.packageId}/games`;

        const rentGames = this.props.rentGames;
        // return the array of objects

        let allGames = rentGames.map(obj => {

            return <div class="card">
                      <img src={obj.img} class="card-img-top" alt={obj.name} />
                      <div class="card-body">
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" name="games_id" value={obj.id}/>
                                    <label class="form-check-lable" for="gridCheck">{obj.name}</label>
                                </div>
                            </div>
{/*                        <h5 class="card-title"><a href={gameLink}>{obj.name}</a></h5>*/}
                      </div>
                    </div>


        }) // end of map




        return (<MemberLayout>

            <h1>GameRun!</h1>
            <form method="POST" action={actionLink}>
            <div class="card-columns">
                {allGames}
                </div>
                <button type="submit" class="btn btn-primary">Next</button>
            </form>

        </MemberLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Games;