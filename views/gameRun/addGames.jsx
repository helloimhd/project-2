var React = require('react');
var AdminLayout = require('./adminLayout');

class AddGames extends React.Component {

    render () {

        // let artistName = this.props.artistName;
        // let allArtist = artistName.map(obj => {


        // return <option value={obj.id}>{obj.name}</option>


        // }) // end of map

        console.log(this.props.id)

        return (<AdminLayout>

            <div class="new-header">
                <h1>Add Game</h1>
            </div>

            <p>{this.props.id}</p>

            <div class="container">
                <form method="POST" action="/add">

                    <div class="form-row">
                        <div class="col">
                            <label for="gameName">Name</label>
                            <input type="text" class="form-control form-control-lg" name="name" />
                        </div>

                        <div class="col">
                            <label for="gameImg">Image</label>
                            <input type="text" class="form-control form-control-lg" name="img" />
                        </div>
                    </div>

                    <br />

                    <div class="form-row">
                        <div class="col">
                            <label for="minNumOfPlayers"></label>Min. Players
                            <input type="number" class="form-control form-control-lg" name="min_players" min="1" />
                        </div>

                        <div class="col">
                            <label for="maxNumOfPlayers"></label>Max. Players
                            <input type="number" class="form-control form-control-lg" name="max_players" min="1" />
                        </div>

{/*                        <div class="col">
                            <label for="suggestedNoOfPlayers"></label>Suggested Players
                            <input type="number" class="form-control form-control-lg" name="suggested_players" />
                        </div>
*/}
                        <div class="col">
                            <label for="minDuration"></label>Min. Duration
                            <input type="number" class="form-control form-control-lg" name="min_duration" />
                        </div>

                        <div class="col">
                            <label for="maxDuration"></label>Max. Duration
                            <input type="number" class="form-control form-control-lg" name="max_duration" />
                        </div>

                        <div class="col">
                            <label for="complexity"></label>Complexity
                            <input type="text" class="form-control form-control-lg" name="complexity" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col">
                            <label for="description">Description</label>
                            <textarea class="form-control" name="description" rows="5"></textarea>
                        </div>

                    </div>

                    <br />

                    <button type="submit" class="btn btn-primary btn-lg float-right">Submit</button>

                </form>
            </div>

        </AdminLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = AddGames;