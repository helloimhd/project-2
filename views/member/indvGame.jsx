var React = require('react');
var MemberLayout = require('./memberLayout');

class IndvGame extends React.Component {
    render () {
        const backLink = `/games`;


        return (<MemberLayout>

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
                <button class="btn btn-warning btn-lg"><a href={backLink} >Back</a></button>
            </div>

        </MemberLayout>)  // end of return

    }  // end of rendering
} // end of class

module.exports = IndvGame;