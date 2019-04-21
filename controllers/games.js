const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const parser = require('xml2json');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   let searchGameControllerCallback = (request, response) => {
    response.render('admin/searchGame');
   };  // end of search game


   let searchControllerCallback = (request, response) => {
    let gameId = parseInt(request.params.id)
    console.log(gameId)

    response.render('admin/addGames', {id: gameId});
   }  // end of search


  let gamesControllerCallback = (request, response) => {
    const type = request.cookies.type;
    db.games.getGames((err, results) => {
        if (err) {
            console.error(err);
            response.status(500).send("Error getting games list")
        } else {
            //  check if admin or member
            if (type === "admin") {
                response.render('admin/games', {games:results.rows});
            } else {
                response.render('member/games', {games:results.rows});
            }

        }
    })  // end of db
  };  // end of get games


  let indvGameControllerCallback = (request, response) => {
    const type = request.cookies.type;

    db.games.getIndvGame(request.params.id, (err, results) => {
        if (err) {
            console.error(err);
            response.status(500).send("Error getting indv game")
        } else {
            // check cookie is admin or member
            if (type === "admin") {
                response.render('admin/indvGame', results.rows[0]);
            } else {
                response.render('member/indvGame', results.rows[0]);
            }

            //response.send(results.rows);

        }
    })
  }  // end of indv game details

  let editGameFormControllerCallback = (request, response) => {
    const id = request.params.id;

    db.games.getIndvGame(id, (err, results) => {
        if (err) {
            console.error(err);
            response.status(500).send("Error getting indv game")
        } else {
            response.render('admin/editGame', results.rows[0]);
        }
    })  // end of db get indv game
  }  // end of edit game form

  let editGameControllerCallback = (request, response) => {
        const id = request.params.id;
        const input = request.body;

        db.games.editGame(id, input, (err, results) => {
            if (err) {
                console.error(err);
                response.status(500).send("Error updating game");
            } else {
                //response.send("Game updated")
                response.redirect(`/games/${id}`)
            }
        })
  }  // end of edit game

  let deleteGameControllerCallback = (request, response) => {
    const id = request.params.id;

    db.games.deleteGame(id, (err, results) => {
        if (err) {
            console.error(err);
            response.status(500).send("Error deleting game")
        } else {
            //response.send("Game deleted")
            response.redirect('/games')
        }
    })
  }  // end of delete game


  let addGamesFormControllerCallback = (request, response) => {
    let gameId = parseInt(request.params.id)
    console.log(gameId);
    // get game details first
    var req = new XMLHttpRequest();
    req.open("GET", `https://www.boardgamegeek.com/xmlapi2/thing?id=${gameId}`, false);

    req.send(null);
    const json = JSON.parse(parser.toJson(req.responseText));
    //console.log(json);


    //response.send(json.items.item)
    ;
    //console.log(json.items.item);
    response.render('admin/addGames', {id: gameId, data: json.items.item});
  }  // end of add games form


  let addGamesControllerCallback = (request, response) => {
    // add availability
    request.body.availability = true;
    db.games.addGames(request.body, (err, results) => {
        if (err) {
            console.error(err);
            response.status(500).send("Query error for adding games.")
        } else {
            //response.send("Add Game - Successful")
            response.redirect('/games');
        }
    })
  }  // end of adding games


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    searchGame: searchGameControllerCallback,
    search: searchControllerCallback,

    getGames: gamesControllerCallback,
    getIndvGame: indvGameControllerCallback,

    editGameForm: editGameFormControllerCallback,
    editGame: editGameControllerCallback,

    deleteGame: deleteGameControllerCallback,

    addGameForm: addGamesFormControllerCallback,
    addGame: addGamesControllerCallback,
  };

}