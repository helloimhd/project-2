const sha256 = require('js-sha256');
const SALT = sha256("kebab");
module.exports = (dbPoolInstance) => {

    const insertOrders = (userId, packageId, orderDetails, callback) => {
        console.log(userId)

        const gamesArray = orderDetails.games_id
        const insertQuery = 'INSERT INTO orders (users_id, packages_id, one_games_id, two_games_id, three_games_id, four_games_id, duration, date, time, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id';

        const values = [userId, packageId, gamesArray[0], gamesArray[1], gamesArray[2], gamesArray[3], orderDetails.duration, orderDetails.date, orderDetails.time, orderDetails.address]

        dbPoolInstance.query(insertQuery, values, (err, results) => {
            callback(err, results);
        })
    };  // end of insert orders




  return {
    insertOrders
  };
};