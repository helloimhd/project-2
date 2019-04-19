const sha256 = require('js-sha256');
const SALT = sha256("kebab");

module.exports = (db) => {

    const packagesControllerCallback = (request, response) => {
        db.members.packages((err, results) => {
            if (err) {
                console.error(err);
                response.status(500).send("Error getting packages list")
            } else {
                //response.send(results.rows)
                response.render('member/packages', {packages: results.rows})
            }
        })
    };  // end of packages

    const rentControllerCallback = (request, response) => {
        db.packages.packages((err, results) => {
            if (err) {
                console.error(err);
                response.status(500).send("Error getting packages list to rent")
            } else {
                //response.send(results.rows)
                response.render('member/rent', {rentPackages: results.rows})
            }
        })
    };  // end of packages avail for rent

    const chooseGamesControllerCallback = (request, response) => {
        db.games.getGames((err, results) => {
            if (err) {
                console.error(err);
                response.status(500).send("Error getting games list to rent")
            } else {
                //response.send(results.rows)
                response.render('member/chooseGames', {rentGames: results.rows, packageId: request.params.id})
            }
        })
    };  // end of choosing games

    const orderDetailsControllerCallback = (request, response) => {
        const currentMember = request.cookies.username;
        const input = request.body;

        //  check if they select less or more than 4 games
        if (input.games_id.length !== 4) {
            //alert("Please select 4 games");
            response.send("Please select 4 games");
        } else {
            //  get the games they choose
            db.games.choosenGames(input.games_id, (err, results) => {
                if (err) {
                    console.error(err.message);
                    response.status(500).send("Error getting games details");
                } else {
                    // results.rows is an array of games obj

                    //  get current member details
                    db.users.viewCurrentMember(currentMember, (err, memberResults) => {
                        if (err) {
                            console.error(err);
                            response.status(500).send("Error getting member details");
                        } else {
                            // if manage to get member details

                            console.log(memberResults.rows);

                            response.render('member/orderDetails', {gamesDetails: results.rows, memberDetails: memberResults.rows})
                        }
                    })  // end of view members
                }
            })  // end of choosen games
        }
    }  // end of order details

    const orderControllerCallback = (request, response) => {
        const orderDetails = request.body;
        const packageId = request.params.id;

        const currentMember = request.cookies.username;

        // get total max game duration

        const gamesArray = orderDetails.games_id;
        console.log(gamesArray);
        db.games.choosenGames(gamesArray, (err, gameResults) => {
            if (err) {
                console.error(err.message);
                response.status(500).send("Error getting current user details");
            } else {
                //  take the max duration
                console.log(gameResults.rows);
                let totalDuration = 0;
                let allMaxDuration = gameResults.rows.map(obj => {
                    totalDuration = obj.max_duration + totalDuration;
                });  // end of map

                if (totalDuration > (orderDetails.duration * 40)) {
                    let html = `<div class="alert alert-danger">
  <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
</div> `
                    response.send(html);
                }

                console.log(totalDuration)
            }

        })  // end of checking games

        // get user id from cookie
        db.users.viewCurrentMember(currentMember, (err, results) => {
            if (err) {
                console.error(err.message);
                response.status(500).send("Error getting current user details");
            } else {
                const userId = results.rows[0].id

                db.orders.insertOrders(userId, packageId, orderDetails, (err, insertResults) => {
                    if (err) {
                        console.error(err.message);
                        response.status(500).send("Error inserting order details");
                    } else {
                        response.send("Order successful");
                    }
                })  // end of db orders
            }  // end of if else statement
        })  // end of db current member
        // insert details inside order table
    };  // end of order











  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    packages: packagesControllerCallback,
    rent: rentControllerCallback,
    chooseGames: chooseGamesControllerCallback,
    orderDetails: orderDetailsControllerCallback,
    order: orderControllerCallback

  };

}