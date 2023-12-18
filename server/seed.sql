-- CREATE TABLE commands(
--     id SERIAL  NOT NULL  PRIMARY KEY,
--     category_id INT NOT NULL,
--     command_syntax TEXT NOT NULL,
--     command_description TEXT NOT NULL
-- );
-- CREATE TABLE categories(
--     id SERIAL  NOT NULL  PRIMARY KEY,
--     category TEXT NOT NULL
-- );
-- ALTER TABLE
--     commands ADD CONSTRAINT commands_category_id_foreign FOREIGN KEY(category_id) REFERENCES categories(id);

INSERT INTO categories(category) VALUES 
('REACT'),
('GIT'),
('PSQL'),
('SQL'),
('NODE'),
('VIM'),
('HOMEBREW');


INSERT INTO commands( category_id,command_syntax,command_description) VALUES 
(1,'npm init react-app<react-app-name>','Creates a new react project with a default template'),
(1,'npm create vite@latest','Creates a new vite project with a slection of templates to choose from(useful if using vite)');

INSERT INTO commands( category_id,command_syntax,command_description) VALUES 
(2,'git init', 'create a local git repositroy'),
(2,'git clone <your url here>', 'copy a github repositroy that is public'),
(2,'git status', 'Displays what changes have been staged and the state of the current working directory'),
(2,'git add <file name>', 'Add a file to the staging area'),
(2,'git add .', 'Add all files to the staging area'),
(2,'git add -p', 'Add in chunks of code in interactive mode'),
(2,'git reset', 'clears local changes since last commit'),
(2,'git commit -m "your message here"', 'Commit staged changes with a message'),
(2,'git branch <branch name>', 'Create a new branch with the given branch name'),
(2,'git checkout <branch name>', 'Switch to your working branch to one entered'),
(2,'git checkout -b <branch name>', 'Create a new branch and switch your working branch to the one created'),
(2,'git checkout -', 'Switch branches to the last branch checked out'),
(2,'git merge <branch name>', 'Merges the entered branch into the active branch'),
(2,'git push','Pushes the commited changees to a remote repository'),
(2,'git pull','Update local repository to the newest commit'),
(2,'git log','View repository commit history'),
(2,'git stash',' temporarily saves uncommitted work.'),
(2,'git stash pop','Restores the most recently stashed changes and removes it from the stash list.'),
(2, 'git commit --amend', 'ammend additional code to the previous commit'),
(2, 'git rm <file>', 'Removes files from your index and working directory for Git.');

INSERT INTO commands( category_id,command_syntax,command_description) VALUES 
(3,'psql -d "database_name"','Connect to a specific database'),
(3,'\l','List all databases'),
(3,'\c database_name','Switch to the specified database'),
(3,'\dt','List all tables in the database'),
(3,'\?','List all psql commands'),
(3,'\q','Quit psql'),
(3, '/i <migration file path>', 'migrate db'),
(3, '/i  <seed file path>', 'seed db');

INSERT INTO commands( category_id,command_syntax,command_description) VALUES 
(4,'SELECT * FROM table_name','Gets all data from the table'),
(4,'SELECT column_name from table_name join on some_join_condition','Gets data from two different tables where a condition is true'),
(4,'SELECT column_name FROM table_name WHERE some_condition','Gets data from a table filtered by a given condition'),
(4,'SELECT column_name FROM table_name LIMIT number','Gets data from a table limited to the number of entries desired'),
(4,'SELECT MAX(column_name) FROM table_name','Gets the largest value from the desired column');

INSERT INTO commands( category_id,command_syntax,command_description) VALUES 
(5,'npm init','Creates a new Node Package Manager project and creates a package.json file'),
(5,'npm install','Installs all dependencies located in the package.json file'),
(5,'npm install <name of package>','Installs a specific package and adds it to the dependencies in the package.json.'),
(5,'npm update','Updates all packages in the package.json to latest version.'),
(5, 'node <name of file>', 'Runs a Node.js program from the specified file.');


INSERT INTO commands( category_id,command_syntax,command_description) VALUES 
(6, 'vi <filename>', 'opens file in vim.'),
(6, ':w', 'save the current file.'),
(6, ':q', 'quits vim.'),
(6, ':wq', 'save and quit.'),
(6, 'i', 'enter insert mode to start editing text.');

INSERT INTO commands( category_id,command_syntax,command_description) VALUES 
(7, 'brew doctor', 'diagnoses and reports problems in Homebrew installations'),
(7, 'brew upgrade && brew update', 'sequentially updates installed packages and then Homebrew itself with its package database.');
