var React = require('react');
var AdminLayout = require('./adminLayout');

class IndvGame extends React.Component {
    render () {

        const actionDelete = `/games/${this.props.id}?_method=delete`;
        const editLink = `/games/${this.props.id}/edit`;


        return (<AdminLayout>

            <div class="container">
                <div class="row">
                    <div class="col mx-auto">
                        <div class="game-header">
                            <img src={this.props.img} class="img-fluid" />
                        </div>

                        <div class="title-container">
                            <h1>{this.props.name}</h1>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        {this.props.description}
                    </div>

                    <div class="col">
                        <div class="row">
                            Players
                        </div>

                        <div class="row">
                            Time
                        </div>

                        <div class="row">
                            Complexity
                        </div>
                    </div>
                </div>
            </div>
                                <div class="row float-right">
                        <button class="btn btn-warning btn-lg"><a href={editLink} id="editLink">Edit</a></button>

                        <form method="POST" action={actionDelete}>
                            <button type="submit" class="btn btn-danger btn-lg" id="deleteButton">Delete</button>
                        </form>
                    </div>

        </AdminLayout>)  // end of return

    }  // end of rendering
} // end of class

module.exports = IndvGame;