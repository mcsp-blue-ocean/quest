CREATE TABLE "vanilla_css"(
    "id" BIGINT NOT NULL,
    "syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "vanilla_css" ADD PRIMARY KEY("id");
CREATE TABLE "git_commands"(
    "id" SERIAL NOT NULL,
    "staging_id" INTEGER NOT NULL,
    "branching_id" INTEGER NOT NULL
);
ALTER TABLE
    "git_commands" ADD PRIMARY KEY("id");
CREATE TABLE "cheatsheets"(
    "id" SERIAL NOT NULL,
    "cheatsheet_id" INTEGER NOT NULL
);
ALTER TABLE
    "cheatsheets" ADD PRIMARY KEY("id");
CREATE TABLE "node"(
    "id" BIGINT NOT NULL,
    "syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "node" ADD PRIMARY KEY("id");
CREATE TABLE "git_staging"(
    "id" BIGINT NOT NULL,
    "command syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "git_staging" ADD PRIMARY KEY("id");
CREATE TABLE "psql_commands"(
    "id" SERIAL NOT NULL,
    "cli_id" INTEGER NOT NULL,
    "psql_db_commands_id" INTEGER NOT NULL,
    "psql_data_types_id" INTEGER NOT NULL
);
ALTER TABLE
    "psql_commands" ADD PRIMARY KEY("id");
CREATE TABLE "dom_manipulation"(
    "id" SERIAL NOT NULL,
    "syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "dom_manipulation" ADD PRIMARY KEY("id");
CREATE TABLE "external_libraries"(
    "id" BIGINT NOT NULL,
    "library_url" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "external_libraries" ADD PRIMARY KEY("id");
CREATE TABLE "psql_cli"(
    "id" SERIAL NOT NULL,
    "command syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "psql_cli" ADD PRIMARY KEY("id");
CREATE TABLE "css_shortcuts"(
    "id" SERIAL NOT NULL,
    "libraries_id" INTEGER NOT NULL,
    "vanilla_css_id" INTEGER NOT NULL
);
ALTER TABLE
    "css_shortcuts" ADD PRIMARY KEY("id");
CREATE TABLE "npm"(
    "id" INTEGER NOT NULL,
    "syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "npm" ADD PRIMARY KEY("id");
CREATE TABLE "node_commands"(
    "id" SERIAL NOT NULL,
    "npm_id" INTEGER NOT NULL,
    "node_id" INTEGER NOT NULL
);
ALTER TABLE
    "node_commands" ADD PRIMARY KEY("id");
CREATE TABLE "git_branching"(
    "id" BIGINT NOT NULL,
    "command syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "git_branching" ADD PRIMARY KEY("id");
CREATE TABLE "terminal_cli"(
    "id" SERIAL NOT NULL,
    "syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "terminal_cli" ADD PRIMARY KEY("id");
CREATE TABLE "psql_db_commands"(
    "id" SERIAL NOT NULL,
    "command syntax" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "psql_db_commands" ADD PRIMARY KEY("id");
ALTER TABLE
    "css_shortcuts" ADD CONSTRAINT "css_shortcuts_libraries_id_foreign" FOREIGN KEY("libraries_id") REFERENCES "external_libraries"("id");
ALTER TABLE
    "psql_commands" ADD CONSTRAINT "psql_commands_psql_db_commands_id_foreign" FOREIGN KEY("psql_db_commands_id") REFERENCES "psql_db_commands"("id");
ALTER TABLE
    "cheatsheets" ADD CONSTRAINT "cheatsheets_cheatsheet_id_foreign" FOREIGN KEY("cheatsheet_id") REFERENCES "terminal_cli"("id");
ALTER TABLE
    "node_commands" ADD CONSTRAINT "node_commands_npm_id_foreign" FOREIGN KEY("npm_id") REFERENCES "npm"("id");
ALTER TABLE
    "node_commands" ADD CONSTRAINT "node_commands_node_id_foreign" FOREIGN KEY("node_id") REFERENCES "node"("id");
ALTER TABLE
    "cheatsheets" ADD CONSTRAINT "cheatsheets_cheatsheet_id_foreign" FOREIGN KEY("cheatsheet_id") REFERENCES "git_commands"("id");
ALTER TABLE
    "git_commands" ADD CONSTRAINT "git_commands_branching_id_foreign" FOREIGN KEY("branching_id") REFERENCES "git_branching"("id");
ALTER TABLE
    "psql_commands" ADD CONSTRAINT "psql_commands_cli_id_foreign" FOREIGN KEY("cli_id") REFERENCES "psql_cli"("id");
ALTER TABLE
    "cheatsheets" ADD CONSTRAINT "cheatsheets_cheatsheet_id_foreign" FOREIGN KEY("cheatsheet_id") REFERENCES "node_commands"("id");
ALTER TABLE
    "cheatsheets" ADD CONSTRAINT "cheatsheets_cheatsheet_id_foreign" FOREIGN KEY("cheatsheet_id") REFERENCES "css_shortcuts"("id");
ALTER TABLE
    "css_shortcuts" ADD CONSTRAINT "css_shortcuts_vanilla_css_id_foreign" FOREIGN KEY("vanilla_css_id") REFERENCES "vanilla_css"("id");
ALTER TABLE
    "cheatsheets" ADD CONSTRAINT "cheatsheets_cheatsheet_id_foreign" FOREIGN KEY("cheatsheet_id") REFERENCES "dom_manipulation"("id");
ALTER TABLE
    "cheatsheets" ADD CONSTRAINT "cheatsheets_cheatsheet_id_foreign" FOREIGN KEY("cheatsheet_id") REFERENCES "psql_commands"("id");
ALTER TABLE
    "git_commands" ADD CONSTRAINT "git_commands_staging_id_foreign" FOREIGN KEY("staging_id") REFERENCES "git_staging"("id");