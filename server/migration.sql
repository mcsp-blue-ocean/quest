DROP TABLE IF EXISTS commands;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS chat_history;
DROP TABLE IF EXISTS users;  

CREATE TABLE commands(
    id SERIAL  NOT NULL  PRIMARY KEY,
    category_id INT NOT NULL,
    command_syntax TEXT NOT NULL,
    command_description TEXT NOT NULL
);
CREATE TABLE categories(
    id SERIAL  NOT NULL  PRIMARY KEY,
    category TEXT NOT NULL,
    parent_category TEXT NOT NULL

);
ALTER TABLE
    commands ADD CONSTRAINT commands_category_id_foreign FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE CASCADE;


CREATE TABLE chat_history(
    id SERIAL NOT NULL PRIMARY KEY,
    user_id SERIAL NOT NULL ,
    user_message TEXT NOT NULL,
    ai_message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL);

CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(75) UNIQUE NOT NULL,
    password_hash VARCHAR(75) NOT NULL);