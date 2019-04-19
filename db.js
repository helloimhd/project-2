/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'herda',
    host: '127.0.0.1',
    database: 'projecttwo',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const gameRunGamesModel = require('./models/games');
const gameRunModelObject = gameRunGamesModel(pool);

const usersModel = require('./models/users');
const usersModelObject = usersModel(pool);

const membersModel = require('./models/members');
const membersModelObject = membersModel(pool);

const packagesModel = require('./models/packages');
const packagesModelObject = packagesModel(pool);

const ordersModel = require('./models/orders');
const ordersModelObject = ordersModel(pool);


/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */

  // users: userModelsObject,
  games: gameRunModelObject,
  users: usersModelObject,
  members: membersModelObject,
  packages: packagesModelObject,
  orders: ordersModelObject
};