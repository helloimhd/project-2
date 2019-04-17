var React = require('react');
var AdminLayout = require('./adminLayout');

class Games extends React.Component {

    render () {

        const games = this.props.games;
        // return the array of objects

        let allGames = games.map(obj => {
            const gameLink = `/games/${obj.id}`
            return <div class="card" style={{width:'18rem'}}>
                      <img src={obj.img} class="card-img-top" alt={obj.name} />
                      <div class="card-body">
                        <h5 class="card-title"><a href={gameLink}>{obj.name}</a></h5>
                      </div>
                    </div>
        }) // end of map


        return (<AdminLayout>

            <h1>GameRun!</h1>
            {allGames}

        </AdminLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Games;