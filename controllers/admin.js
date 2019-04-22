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

                        response.render('admin/orders', {orders: results.rows})
                    }
                })  // end of db my games
            }  // end of if statement for error
        })  //  end of my orders
    };  // end of my orders


    const deleteOrderControllerCallback = (request, response) => {
        const orderId = request.params.id;

        // get the order details and change the games to avail first
        db.orders.getOrderById(orderId, (err, orderResults) => {
            if (err) {
                console.error(err.message);
                response.status(500).send("Error getting order rows")
            } else {
                //console.log(orderResults.rows)
                // change to avail
                // push details to array
                db.games.updateAvailTrue(orderResults.rows[0], (err, results) => {
                    if (err) {
                        console.error(err.message);
                        response.status(500).send("Error updating game availability");

                        // after update then delete it
                    } else {
                        db.orders.deleteOrder(orderId, (err, results) => {
                            if (err) {
                                console.error(err.message);
                                response.status(500).send("Error delete order");
                            } else {
                                response.redirect('/orders');
                            }
                        })  // end of delete order
                    }
                })  // end of update avail to true
            }
        })  // end of db get order by id



    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    viewOrders: viewOrdersControllerCallback,
    deleteOrder: deleteOrderControllerCallback

  };

}