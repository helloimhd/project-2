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
        const currentMember = request.cookies.user;
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

        const userId = request.cookies.user;

        db.orders.insertOrders(userId, packageId, orderDetails, (err, insertResults) => {
            if (err) {
                console.error(err.message);
                response.status(500).send("Error inserting order details");
            } else {
                response.send("Order successful");
            }
        })  // end of db orders
    };  // end of order

    const myOrdersControllerCallback = (request, response) => {
        // get user id
        const userId = request.cookies.user;

        db.orders.myOrders(userId, (err, results) => {
            if (err) {
                console.error(err.message);
                response.status(500).send("Error getting my own orders");
            } else {
                //console.log(results.rows)
                //response.render('member/myOrders', {myOrders: results.rows})

                // get the games so can put in one td
                db.orders.getMyGames(userId, (err, gameResults) => {
                    if (err) {
                        console.error(err.message);
                        response.status(500).send("Error getting my own orders");
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

                        response.render('member/myOrders', {myOrders: results.rows})
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
    packages: packagesControllerCallback,
    rent: rentControllerCallback,
    chooseGames: chooseGamesControllerCallback,
    orderDetails: orderDetailsControllerCallback,
    order: orderControllerCallback,
    myOrders: myOrdersControllerCallback

  };

}