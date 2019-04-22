var React = require('react');
var MemberLayout = require('./memberLayout');

class Games extends React.Component {

    render () {

        const games = this.props.games;
        // return the array of objects

        let allGames = games.map(obj => {
            const gameLink = `games/${obj.id}`

            let availability = "";
            if (obj.availability === true) {
                availability = "Available";
            } else {
                availability = "Not Available";
            }

            return <div class="games-container">
                        <div class="gameImg-container" id="memberGames">
                            <img src={obj.img} alt={obj.name} />

                            <div class="bottom-right">
                                <p>{availability}</p>
                            </div>
                        </div>

                        <div class="title-container">
                            <h5><a href={gameLink}>{obj.name}</a></h5>
                        </div>

                    </div>
        }) // end of map


        return (<MemberLayout>

            <h1>GameRun!</h1>
            <div class="home-container">
                {allGames}
            </div>

        </MemberLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Games;