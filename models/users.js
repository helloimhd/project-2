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
        const addUserQuery = `INSERT INTO users (username, password, type, email, contact_num) VALUES ($1, $2, $3, $4, $5) RETURNING id`;

        const values = [input.username, password, member, input.email, input.contact_num];

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
        const getMembersQuery = `SELECT username FROM users WHERE type = 'member' ORDER BY id`;

        dbPoolInstance.query(getMembersQuery, (err, results) => {
            callback(err, results)
        })
    }  // end of view members

    const viewCurrentMember = (currentMember, callback) => {
        //const
        const currentMemberQuery = `SELECT id, username, email, contact_num FROM users WHERE id = '${currentMember}'`;

        dbPoolInstance.query(currentMemberQuery, (err, results) => {
            callback(err, results);
        })
    };  // end of view current member




  return {
    checkUser,
    register,
    login,
    viewMembers,
    viewCurrentMember
  };
};