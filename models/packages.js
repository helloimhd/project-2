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