module.exports = (app, allModels) => {


    const gameRunControllerCallbacks = require('./controllers/games')(allModels);

    app.get('/searchGame', gameRunControllerCallbacks.searchGame);
    //app.get('/searchGame/:id', gameRunControllerCallbacks.search);

    //app.get('/', gameRunControllerCallbacks.home);
    app.get('/games', gameRunControllerCallbacks.getGames);
    app.get('/games/:id', gameRunControllerCallbacks.getIndvGame);

    app.get('/games/:id/edit', gameRunControllerCallbacks.editGameForm);
    app.put('/games/:id', gameRunControllerCallbacks.editGame)
    app.delete('/games/:id', gameRunControllerCallbacks.deleteGame);

    app.get('/addGames/:id', gameRunControllerCallbacks.addGameForm);
    //app.get('/addGames', gameRunControllerCallbacks.addGameForm);
    app.post('/add', gameRunControllerCallbacks.addGame);






};