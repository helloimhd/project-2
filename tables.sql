/*createdb DATABASE_NAME -U USERNAME
psql -d DATABASE_NAME -U USERNAME -f tables.sql*/

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT,
	type TEXT,
	email TEXT,
	contact_num TEXT
);


CREATE TABLE IF NOT EXISTS games (
	id SERIAL PRIMARY KEY,
	name TEXT,
	img TEXT,
	min_players INTEGER,
	max_players INTEGER,
	/*suggested_players	 INTEGER,*/
	min_duration INTEGER,
	max_duration INTEGER,
	-- duration TEXT,
	complexity FLOAT,
	description TEXT,
	availability BOOLEAN
);

CREATE TABLE IF NOT EXISTS packages (
	id SERIAL PRIMARY KEY,
	name TEXT,
	details TEXT,
	price float,
	img TEXT
);

CREATE TABLE IF NOT EXISTS orders (
	id SERIAL PRIMARY KEY,
	users_id INTEGER,
	packages_id INTEGER,
	one_games_id INTEGER,
	two_games_id INTEGER,
	three_games_id INTEGER,
	four_games_id INTEGER,
	duration INTEGER,
	date TEXT,
	time TEXT,
	address TEXT
);


SELECT orders.id, packages.name AS packageName, games.name AS gameName, orders.date, orders.time, orders.duration, orders.address
FROM orders
INNER JOIN packages
ON orders.packages_id = packages.id
INNER JOIN games
ON orders.one_games_id = games.id
OR orders.two_games_id = games.id
OR orders.three_games_id = games.id
OR four_games_id = games.id
GROUP BY orders.id
WHERE orders.users_id = '3'`