const sha256 = require('js-sha256');
const SALT = sha256("kebab");
module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   let registerFormControllerCallback = (request, response) => {
    response.render('registerForm');
   };  // end of register form

    const registerControllerCallback = (request, response) => {
        const input = request.body;
        // check if username exist in the table
        db.users.checkUser(input, (err, results) => {
            if (err) {
                console.error(err);
                response.status(500).send("Error checking user");
            }

            //console.log(results);

            if (results.rowCount >= 1) {
                response.send("You already registered. Please login.");

            } else {
                //  if rowcount = 0, means not registered
                //  so register new user
                db.users.register(input, (err, results) => {

                    if (err) {
                        console.error(err);
                        response.status(500).send("Error registering")

                    } else {
                        response.send("Register - Successful");
                        //response.redirect('/');
                    }
                })  // end of register db
            }
        })  // end of check user
    };  // end of

    const loginFormControllerCallback = (request, response) => {
        response.render('loginForm');
    }

    const loginControllerCallback = (request, response) => {
        const input = request.body;
        db.users.login(input, (err, results) => {
            // query syntax error
            if (err) {
                console.error(err);
                response.status(500).send("Error searching for user to login")
            }

            // check if there is such user
            //console.log(results);
            if (results.rowCount === 0) {
                response.status(403).send('Invalid username/password!');
                //response.send("Invalid username/password");
            } else {
                //console.log(results.rows[0])
                // set cookie
                if (request.cookies.loggedIn === "false" || request.cookies.loggedIn === undefined) {
                    response.cookie("loggedIn", true);

                    //let hashedUsername = sha256(results.rows[0].username);
                    response.cookie("user", results.rows[0].id);
                    response.cookie("type", results.rows[0].type)
                    //console.log(results.rows[0].username)
                    //response.redirect("/");

                    // check type of user, if admin - redirect to admin home, if member then redirect to member home
                    if (results.rows[0].type === "admin") {
                        //response.send("You are admin");
                        response.redirect('/games')
                    } else {
                        response.send("You are a member");
                    }
                }
            }
        })
    };  // end of login

    const logoutControllerCallback = (request, response) => {
        console.log(request.cookies.loggedIn);
        response.cookie("loggedIn", false);
        response.cookie("user", undefined);
        response.cookie("type", undefined);
        response.redirect('/');
    };  // end of logout


    const viewMembersControllerCallback = (request, response) => {
        db.users.viewMembers((err, results) => {
            if (err) {
                console.error(err);
                response.status(500).send("Error to display member list");
            } else {
                response.send(results.rows)
            }
        })
    }  // end of view members







  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    registerForm: registerFormControllerCallback,
    register: registerControllerCallback,

    loginForm: loginFormControllerCallback,
    login: loginControllerCallback,

    logout: logoutControllerCallback,

    viewMembers: viewMembersControllerCallback
  };

}