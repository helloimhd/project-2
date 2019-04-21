const sha256 = require('js-sha256');
const SALT = sha256("kebab");

module.exports = (db) => {

    const viewOrdersControllerCallback = (request, response) => {
        db.orders.getAllOrders((err, results) => {
            if (err) {
                console.error(err);
                response.status(500).send("Error getting order list")
            } else {
                response.send(results.rows)
                //response.render('admin/orders', {orders: results.rows})
            }
        })
    };  // end of view all orders


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    viewOrders: viewOrdersControllerCallback

  };

}