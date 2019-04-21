module.exports = (dbPoolInstance) => {

    const packages = (callback) => {
        const packagesQuery = `SELECT * FROM packages`;

        dbPoolInstance.query(packagesQuery, (err, results) => {
            callback(err, results);
        })
    };  // end of packages

    const indvPackage = (packageId, callback) => {
        const indvPackage = `SELECT * FROM packages WHERE id = '${packageId}'`;

        dbPoolInstance.query(indvPackage, (err, results) => {
            callback(err, results);
        })
    }  // end of indv package




  return {
    packages,
    indvPackage
  };
};