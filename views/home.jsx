var React = require('react');
var Layout = require('./layout');

class Home extends React.Component {

    render () {

        const games = this.props.games;
        // return the array of objects

        let allGames = games.map(obj => {

            return <div class="games-container">
                        <div class="gameImg-container">
                            <img src={obj.img} alt={obj.name} />
                        </div>

                        <div class="gameName-container">
                            <h5>{obj.name}</h5>
                        </div>
                    </div>
        }) // end of map


        return (<Layout>

            <h1>GameRun!</h1>
            <div class="home-container">
                {allGames}
            </div>

        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Home;