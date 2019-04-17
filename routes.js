module.exports = (app, allModels) => {



  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */


    const gameRunControllerCallbacks = require('./controllers/games')(allModels);

    app.get('/searchGame', gameRunControllerCallbacks.searchGame);
    //app.get('/searchGame/:id', gameRunControllerCallbacks.search);

    //app.get('/', gameRunControllerCallbacks.home);
    app.get('/games', gameRunControllerCallbacks.getGames);
    app.get('/games/:id', gameRunControllerCallbacks.getIndvGame);

    app.get('/addGames/:id', gameRunControllerCallbacks.addGameForm);
    //app.get('/addGames', gameRunControllerCallbacks.addGameForm);
    app.post('/add', gameRunControllerCallbacks.addGame);


};