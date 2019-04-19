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
        db.members.packages((err, results) => {
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

    const enterDetailsControllerCallback = (request, response) => {
        console.log(request.body);
        const input = request.body;
        if (input.games_id.length !== 4) {
            //alert("Please select 4 games");
            response.send("Please select 4 games");
        } else {
            response.send(request.body);
        }


    }  // end of entering details








  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    packages: packagesControllerCallback,
    rent: rentControllerCallback,
    chooseGames: chooseGamesControllerCallback,
    enterDetails: enterDetailsControllerCallback

  };

}