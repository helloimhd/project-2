/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // let searchGame = (callback) => {

    // };  //end of search game

    let getGames = (callback) => {
        const listGameQuery = `SELECT * FROM games ORDER BY id`;

        dbPoolInstance.query(listGameQuery, (err, results) => {
            callback(err, results);
        })  // end of db pool
    }  // end of games list

    let getIndvGame = (id, callback) => {
        //console.log(id);
        const indvGameQuery = `SELECT * FROM games WHERE id = ${id}`;

        dbPoolInstance.query(indvGameQuery, (err, results) => {
            callback(err, results);
        })
    }

    let editGame = (id, input, callback) => {

        const editQuery = `UPDATE games SET name = $1, img = $2, min_players = $3, max_players = $4, min_duration = $5, max_duration = $6, complexity = $7, description = $8, availability = $9 WHERE id = '${id}'`;

        const values = [input.name, input.img, input.min_players, input.max_players, input.min_duration, input.max_duration, input.complexity, input.description, input.availability];

        dbPoolInstance.query(editQuery, values, (err, results) => {
            callback(err, results);
        })
    }  // end of edit game

    let deleteGame = (id, callback) => {
        const deleteQuery = `DELETE FROM games WHERE id = '${id}'`;

        dbPoolInstance.query(deleteQuery, (err, results) => {
            callback(err, results);
        })
    }

    let addGames = (games, callback) => {
        //console.log(games);
        const addGameQuery = `INSERT INTO games (name, img, min_players, max_players, min_duration, max_duration, complexity, description, availability)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`;

        const values = [games.name, games.img, games.min_players, games.max_players, games.min_duration, games.max_duration, games.complexity, games.description, games.availability];

        dbPoolInstance.query(addGameQuery, values, (err, results) => {
            callback(err, results);
        })
    }  // end of addGames

    let choosenGames = (gamesArray, callback) => {
        //console.log(gamesArray.join())

        const getGameQuery = `SELECT * FROM games WHERE id IN (${gamesArray.join()})`;

        dbPoolInstance.query(getGameQuery, (err, results) => {
            callback(err, results);
        })
    };   // end of choosen games

    let totalGameDuration = (gamesArray, callback) => {



    }



  return {
    getGames,
    getIndvGame,
    editGame,
    deleteGame,
    addGames,

    choosenGames,
    totalGameDuration
  };
};