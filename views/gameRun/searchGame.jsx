//  this is for searching game through BGG xml api
//  then i will generate the auto-fill form
//  i enter in into games database


var React = require('react');
var AdminLayout = require('./adminLayout');

class SearchGame extends React.Component {

    render () {

        // let artistName = this.props.artistName;
        // let allArtist = artistName.map(obj => {


        // return <option value={obj.id}>{obj.name}</option>


        // }) // end of map


        return (<AdminLayout>

            <div class="new-header">
                <h1>Search Game</h1>
            </div>

           <div class="container">
                <form>
                  <div class="form-group">
                    <input type="search" class="form-control form-control-lg" id="game-search" placeholder="Search for games..." name="search" />
                  </div>
                </form>

                <div class="submit-container">
                    <button type="button" class="btn btn-light btn-lg" id="search-button">Search</button>
                </div>
            </div>

        </AdminLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = SearchGame;