### Rent it all out!

A CRUD app that allows you to rent board games for your events.

This project utilizes PostgreSQL to create a database and interact with the data. 
It runs using Node.js and uses React.js for the front-end. 
MVC is used for this project.

How the app works:
* Admin (The one who is renting out the board games)
	- Can log in and add the games that they will be renting out 
	- API is requested from BoardGameGeeks to get the details of the board games 
	- Can view, edit and delete the games  
	- Can view members and orders

* User (The one who will be renting the board games)
	- Can create account and log in 
	- Can view the games and rent the games 