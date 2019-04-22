module.exports = (app, allModels) => {


////////////////////////////////////////////////////

    const adminControllerCallbacks = require('./controllers/admin')(allModels);

    app.get('/orders', adminControllerCallbacks.viewOrders);
    app.delete('/orders/:id/delete', adminControllerCallbacks.deleteOrder);

//////////////////////////////////////////////

    const gameRunControllerCallbacks = require('./controllers/games')(allModels);

    app.get('/searchGame', gameRunControllerCallbacks.searchGame);

    app.get('/games', gameRunControllerCallbacks.getGames);
    app.get('/games/:id', gameRunControllerCallbacks.getIndvGame);

    app.get('/games/:id/edit', gameRunControllerCallbacks.editGameForm);
    app.put('/games/:id', gameRunControllerCallbacks.editGame)
    app.delete('/games/:id', gameRunControllerCallbacks.deleteGame);

    app.get('/addGames/:id', gameRunControllerCallbacks.addGameForm);
    app.post('/add', gameRunControllerCallbacks.addGame);


    /////////////////////////////////////////////////////

    const usersControllerCallbacks = require('./controllers/users')(allModels);

    app.get('/', usersControllerCallbacks.home);

    app.get('/register', usersControllerCallbacks.registerForm);
    app.post('/register', usersControllerCallbacks.register);

    app.get('/login', usersControllerCallbacks.loginForm);
    app.post('/login', usersControllerCallbacks.login);

    app.get('/logout', usersControllerCallbacks.logout);

    app.get('/viewMembers', usersControllerCallbacks.viewMembers);

    app.get('/test', usersControllerCallbacks.test);



    //////////////////////////////////////////////////////////

    const membersControllerCallbacks = require('./controllers/members')(allModels);

    app.get('/packages', membersControllerCallbacks.packages);

    app.get('/rent', membersControllerCallbacks.rent);
    app.get('/rent/:id', membersControllerCallbacks.chooseGames);
    app.post('/rent/:id/games', membersControllerCallbacks.orderDetails);
    app.post('/rent/:id/order', membersControllerCallbacks.order);

    app.get('/myOrders', membersControllerCallbacks.myOrders);












};