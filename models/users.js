const sha256 = require('js-sha256');
const SALT = sha256("kebab");
module.exports = (dbPoolInstance) => {
    const checkUser = (input, callback) => {
        const checkUserQuery = `SELECT * FROM users WHERE username = '${input.username}'`;

        dbPoolInstance.query(checkUserQuery, (err, results) => {
            callback(err, results);
        })
    }

    const register = (input, callback) => {
        const password = sha256(input.password + SALT);

        const member = "member";
        const addUserQuery = `INSERT INTO users (username, password, type) VALUES ($1, $2, $3) RETURNING id`;

        const values = [input.username, password, member];

        dbPoolInstance.query(addUserQuery, values, (err, results) => {
            callback(err, results);
        })
    }  // end of register

    const login = (input, callback) => {
        const password = sha256(input.password + SALT)

        const getUserQuery = `SELECT * FROM users WHERE username = '${input.username}' AND password = '${password}'`;

        dbPoolInstance.query(getUserQuery, (err, results) => {
            callback(err, results);
        });
    };  // end of login

    const viewMembers = (callback) => {
        const getMembersQuery = `SELECT username FROM users WHERE type = 'member'`;

        dbPoolInstance.query(getMembersQuery, (err, results) => {
            callback(err, results)
        })
    }  // end of view members




  return {
    checkUser,
    register,
    login,
    viewMembers
  };
};