const sha256 = require('js-sha256');
const SALT = sha256("kebab");

module.exports = (db) => {

    const viewOrdersControllerCallback = (request, response) => {

        db.orders.getAllOrders((err, results) => {
            if (err) {
                console.error(err.message);
                response.status(500).send("Error getting orders list");
            } else {

                // get the games so can put in one td
                db.orders.getAllOrderGames((err, gameResults) => {
                    if (err) {
                        console.error(err.message);
                        response.status(500).send("Error getting games name");
                    } else {
                        //console.log(gameResults.rows)
                        const games = gameResults.rows

                        const gameName = [];
                        games.map(obj => {
                            gameName.push(obj.name)
                        })

                        const gameNameArray = [];
                        let n = 0;
                        // spit the game name array
                        var i, j, tempArray, chunk = 4;
                        for (i=0,j=gameName.length; i<j; i+=chunk) {
                            const gameNameObj = {};
                            tempArray = gameName.slice(i,i+chunk);

                            // put the array in the results rows obj
                            results.rows[n].games = tempArray;
                            n++;
                        }
                        console.log(results.rows);

                        response.render('admin/orders', {orders: results.rows})
                    }
                })  // end of db my games
            }  // end of if statement for error
        })  //  end of my orders
    };  // end of my orders


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    viewOrders: viewOrdersControllerCallback

  };

}