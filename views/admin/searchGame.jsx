//  this is for searching game through BGG xml api
//  then i will generate the auto-fill form
//  i enter in into games database


var React = require('react');
var AdminLayout = require('./adminLayout');

class SearchGame extends React.Component {

    render () {

        return (<AdminLayout>

            <div class="new-header">
                <h1>Search Game</h1>
            </div>

           <div class="container" id="search-container">
                <form autocomplete="off">
                  <div class="form-group">
                    <input type="search" class="form-control form-control-lg" id="game-search" placeholder="Search for games..." name="search" />
                  </div>
                </form>

                <div class="submit-container">
                    <button type="button" class="btn btn btn-outline-dark btn-lg float-right" id="search-button">CLICK to Search</button>
                </div>
            </div>

            <script src="/searchScript.js"></script>

        </AdminLayout>)  // end of return

    }  // end of rendering
}  // end of class

module.exports = SearchGame;