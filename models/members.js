const sha256 = require('js-sha256');
const SALT = sha256("kebab");
module.exports = (dbPoolInstance) => {

    const packages = (callback) => {
        const packagesQuery = `SELECT * FROM packages`;

        dbPoolInstance.query(packagesQuery, (err, results) => {
            callback(err, results);
        })
    };  // end of packages


  return {
    packages
  };
};