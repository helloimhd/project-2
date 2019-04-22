const sha256 = require('js-sha256');
const SALT = sha256("kebab");
module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    const homeControllerCallback = (request, response) => {

        const userId = request.cookies.user;
        db.games.getGames((err, results) => {
            if (err) {
                console.log(err.message)
                response.status(500).send("Error getting games list");

            } else {
                // //  if no error, render and set cookies

                // set cookie
                // means not logged in
                console.log(request.cookies.loggedIn);
                if (request.cookies.loggedIn !== "true") {
                    console.log("pass this")
                    response.cookie("loggedIn", false)
                    // render non-user homepage
                    // can bring straight to loginform page
                    response.render('home', {games:results.rows});

                } else {
                    // means user is already logged in
                    const currentLog = request.cookies.loggedIn;
                    request.cookies.loggedIn = currentLog;

                    response.redirect('/games')

/*                    // check type of user, if admin - redirect to admin home, if member then redirect to member home
                    if (request.cookies.type === "admin") {
                        response.redirect('/games')
                    } else {
                        response.send("You are a member");
                    }*/
                }
            }
        });
    }  // end of home

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
                //response.send("You already registered. Please login.");
                response.render('failed/alreadyExist')

            } else {
                //  if rowcount = 0, means not registered
                //  so register new user
                db.users.register(input, (err, results) => {

                    if (err) {
                        console.error(err);
                        response.status(500).send("Error registering")

                    } else {
                        //response.send("Register - Successful");
                        response.redirect('/login');
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
                //response.status(403).send('Invalid username/password!');
                response.status(403).render('failed/invalidUser');
            } else {
                //console.log(results.rows[0])
                // set cookie
                if (request.cookies.loggedIn === "false" || request.cookies.loggedIn === undefined) {
                    response.cookie("loggedIn", true);

                    //let hashedUsername = sha256(results.rows[0].username);
                    response.cookie("user", results.rows[0].id);
                    response.cookie("type", results.rows[0].type)

                    response.redirect("/");
/*
                    // check type of user, if admin - redirect to admin home, if member then redirect to member home
                    if (results.rows[0].type === "admin") {
                        //response.send("You are admin");
                        response.redirect('/games')
                    } else {
                        //response.send("You are a member");
                    }*/
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
    home: homeControllerCallback,

    registerForm: registerFormControllerCallback,
    register: registerControllerCallback,

    loginForm: loginFormControllerCallback,
    login: loginControllerCallback,

    logout: logoutControllerCallback,

    viewMembers: viewMembersControllerCallback
  };

}