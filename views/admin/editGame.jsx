var React = require('react');
var AdminLayout = require('./adminLayout');

class EditGame extends React.Component {

    render () {

        const actionLink = `/games/${this.props.id}?_method=put`

        return (<AdminLayout>

            <div class="new-header">
                <h1>Edit Game</h1>
            </div>

            <div class="container">
                <form method="POST" action={actionLink}>

                    <div class="form-row">
                        <div class="col">
                            <label for="gameName">Name</label>
                            <input type="text" class="form-control form-control-lg" name="name" value={this.props.name} />
                        </div>

                        <div class="col">
                            <label for="gameImg">Image</label>
                            <input type="text" class="form-control form-control-lg" name="img" value={this.props.img}/>
                        </div>
                    </div>

                    <br />

                    <div class="form-row">
                        <div class="col">
                            <label for="minNumOfPlayers">Min. Players</label>
                            <input type="number" class="form-control form-control-lg" name="min_players" min="1" value={this.props.min_players}/>
                        </div>

                        <div class="col">
                            <label for="maxNumOfPlayers">Max. Players</label>
                            <input type="number" class="form-control form-control-lg" name="max_players" min="1" value={this.props.max_players}/>
                        </div>
                    </div>

{/*                        <div class="col">
                            <label for="suggestedNoOfPlayers"></label>Suggested Players
                            <input type="number" class="form-control form-control-lg" name="suggested_players" />
                        </div>
*/}

                    <div class="form-row">
                        <div class="col">
                            <label for="minDuration">Min. Duration</label>
                            <input type="number" class="form-control form-control-lg" name="min_duration" value={this.props.min_duration} />
                        </div>

                        <div class="col">
                            <label for="maxDuration">Max. Duration</label>
                            <input type="number" class="form-control form-control-lg" name="max_duration" value={this.props.max_duration}/>
                        </div>
                    </div>

                    <div class="form-row">

                        <div class="col">
                            <label for="complexity">Complexity</label>
                            <input type="text" class="form-control form-control-lg" name="complexity" value={this.props.complexity} />
                        </div>

                        <div class="col">
                            <label for="availability">Availability</label>
                            <select class="form-control form-control-lg" name="availability">
                                <option value="true">Available</option>
                                <option value="false">Not Available</option>
                            </select>
{/*                            <input type="text" class="form-control form-control-lg" name="availability" value={this.props.availability} />
*/}                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col">
                            <label for="description">Description</label>
                            <textarea class="form-control" name="description" rows="5" value={this.props.description} ></textarea>
                        </div>

                    </div>

                    <br />

                    <button type="submit" class="btn btn-primary btn-lg float-right">Submit</button>

                </form>
            </div>

        </AdminLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = EditGame;