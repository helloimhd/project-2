var React = require('react');
var AdminLayout = require('./adminLayout');

class IndvGame extends React.Component {
    render () {

        const actionDelete = `/games/${this.props.id}?_method=delete`;
        const editLink = `/games/${this.props.id}/edit`;

        let playTime = `${this.props.min_duration} - ${this.props.max_duration} mins`;
        if (this.props.min_duration === this.props.max_duration) {
            playTime = `${this.props.min_duration} mins`;
        } else {
            playTime = playTime;
        }

        return (<AdminLayout>

            <div class="indvGameMain-container">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="game-header">
                                <img src={this.props.img} class="img-fluid" />
                            </div>

                            <div class="title-container">
                                <h1>{this.props.name}</h1>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-7">
                            <p>{this.props.description}</p>
                        </div>

                        <div class="col-3" id="gameDetails">
                            <div class="row">
                                Players:
                                <br/>
                                {this.props.min_players} - {this.props.max_players}
                            </div>

                            <br/>

                            <div class="row">
                                Time:
                                <br/>
                                {playTime}
                            </div>

                            <br/>

                            <div class="row">
                                Complexity:
                                <br/>
                                {this.props.complexity}
                            </div>
                        </div>
                    </div>

                    <div class="row float-right">
                        <button class="btn btn-warning btn-lg" id="editLink"><a href={editLink} style={{color:'black'}}>Edit</a></button>

                        <form method="POST" action={actionDelete}>
                            <button type="submit" class="btn btn-danger btn-lg" id="deleteButton">Delete</button>
                        </form>
                    </div>
                </div>
            </div>

        </AdminLayout>)  // end of return

    }  // end of rendering
} // end of class

module.exports = IndvGame;