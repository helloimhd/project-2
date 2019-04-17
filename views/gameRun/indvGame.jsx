var React = require('react');
var AdminLayout = require('./adminLayout');

class IndvGame extends React.Component {
    render () {

        const actionDelete = `/recipes/${this.props.id}?_method=delete`;
        const editLink = `/recipes/${this.props.id}/edit`;


        return (<AdminLayout>

            <div class="container">
                <div class="row">
                    <div class="col mx-auto">
                        <div class="recipe-header">
                            <img src={this.props.img} class="img-fluid" />
                        </div>

                        <div class="title-container">
                            <h1>{this.props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h2 class="h2-displayIndv">Ingredients</h2>
                        <p>{this.props.ingredients}</p>
                    </div>

                    <div class="col-sm-8">
                        <h2 class="h2-displayIndv">Instructions</h2>
                        <p>{this.props.instructions}</p>
                    </div>
                </div>

                <div class="button-container">
                    <div class="row float-right">
                        <button class="btn btn-warning btn-lg"><a href={editLink} id="editLink">Edit</a></button>

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