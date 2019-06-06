var React = require('react');
var MemberLayout = require('./memberLayout');

class IndvGame extends React.Component {
    render () {
        const backLink = `/games`;

        let playTime = `${this.props.min_duration} - ${this.props.max_duration} mins`;
        if (this.props.min_duration === this.props.max_duration) {
            playTime = `${this.props.min_duration} mins`;
        } else {
            playTime = playTime;
        }

        return (<MemberLayout>

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
                            <p id="gameDescription">{this.props.description}</p>
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
                        <button class="btn btn-dark btn-lg" id="backButton"><a href={backLink} style={{color:'white'}}>Back</a>
                    </button>
                    </div>
                </div>
            </div>

            <script src="/changeText.js"></script>

        </MemberLayout>)  // end of return

    }  // end of rendering
} // end of class

module.exports = IndvGame;