/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // let searchGame = (callback) => {

    // };  //end of search game

    let getGames = (callback) => {
        const listGameQuery = `SELECT * FROM games`;

        dbPoolInstance.query(listGameQuery, (err, results) => {
            callback(err, results);
        })  // end of db pool
    }  // end of games list

    let getIndvGame = (id, callback) => {
        console.log(id);
        const indvGameQuery = `SELECT * FROM games WHERE id = ${id}`;

        dbPoolInstance.query(indvGameQuery, (err, results) => {
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

  return {
    getGames,
    getIndvGame,
    addGames
  };
};