var React = require('react');
var Layout = require('./layout');

class Home extends React.Component {

    render () {

        const games = this.props.games;
        // return the array of objects

        let allGames = games.map(obj => {
/*            const gameLink = `games/${obj.id}`*/
            return <div class="card" style={{width:'18rem'}}>
                      <img src={obj.img} class="card-img-top" alt={obj.name} />
                      <div class="card-body">
{/*                        <h5 class="card-title"><a href={gameLink}>{obj.name}</a></h5>*/}

                            <h5 class="card-title">{obj.name}</h5>
                      </div>
                    </div>
        }) // end of map


        return (<Layout>

            <h1>GameRun!</h1>
            {allGames}

        </Layout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = Home;