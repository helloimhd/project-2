const nodemailer = require('nodemailer');

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
        const packageId = request.params.id;
        //console.log(packageId)

        //  check if they select less or more than 4 games
        if (input.games_id.length !== 4) {
            response.redirect(`/rent/${packageId}`);

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

                            //console.log(memberResults.rows);

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

        //  get games id to change the availability on games tables
        const gamesIdArray = orderDetails.games_id;
        //console.log(gamesIdArray);

        db.games.updateAvailFalse(gamesIdArray, (err, results) => {
            if (err) {
                console.error(err.message);
                response.status(500).send("Error updating availability");

            } else {
                //  continue inserting orders
                db.orders.insertOrders(userId, packageId, orderDetails, (err, insertResults) => {
                    if (err) {
                        console.error(err.message);
                        response.status(500).send("Error inserting order details");
                    } else {
                        //response.send("Order successful");
                        //  get email from user id
                        db.users.viewCurrentMember(userId, (err, userResults) => {
                            const userEmail = userResults.rows[0].email
                            // send out email
                            var transporter = nodemailer.createTransport({
                                  service: 'gmail',
                                  auth: {
                                    user: 'herda58@gmail.com',
                                    pass: 'herda12345'
                                  }
                                });

                                var mailOptions = {
                                  from: 'herda58@gmail.com',
                                  to: `${userEmail}`,
                                  subject: 'GameRun Rental Confirmation',
                                  text: `Your order is Confirmed!
                                         Kindly make your payment when we deliver the games!`
                                };

                                transporter.sendMail(mailOptions, function(error, info){
                                  if (error) {
                                    console.log(error);
                                  } else {
                                    console.log('Email sent: ' + info.response);
                                  }
                                });   // end of sending out email
                            })  // end of current member details

                        response.redirect('/myOrders');
                    }
                })  // end of db orders
            }
        });
    };  // end of order

    const myOrdersControllerCallback = (request, response) => {
        // get user id
        const userId = request.cookies.user;

        db.orders.myOrders(userId, (err, results) => {
            if (err) {
                console.error(err.message);
                response.status(500).send("Error getting my own orders");
            } else {
                // means havent order yet
                if (results.rows.length < 1) {
                    response.render('failed/noOrder')

                    // if theres orderx
                } else {
                    // get the games so can put in one td
                    db.orders.getMyGames(userId, (err, gameResults) => {
                        if (err) {
                            console.error(err.message);
                            response.status(500).send("Error getting games");
                        } else {
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

                            response.render('member/myOrders', {myOrders: results.rows})
                        }
                    })  // end of db my games
                }
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