# Full-Stack React Example

This repo contains an example of a full-stack application with an express backend and a React frontend.

It uses vite as the module bundler and dotenv for configuration. It's organized as a mono-repo using [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) which allows us to have our client and server in one repo.

> **Note**: When you run `npm install` at the root, it will install all dependencies listed in `package.json`, `server/package.json`, and `client/package.json`.

## Customizing the Template

1. Create new repo using this one as a template.
1. Pull that repo down.

## Development Setup

1. Install dependencies: `npm install`
1. Create your database: `createdb YOUR_DB`
1. Update `./server/migration.sql` to the schema for your application.
1. Run your migrations: `psql -f server/migration.sql YOUR_DB`
1. Create your `.env` file: `cp .env.template .env`
1. Add your info in `.env`
1. Run the app: `npm run dev`

## Scripts

**Root**

- `npm run dev` - Runs the API server and hosts your frontend assets.
- `npm run dev:server` - Runs the API server in watch mode.
- `npm run dev:client` - Hosts your frontend assets.

**/client**

- `npm run dev` - Hosts your assets.
- `npm run build` - Builds your assets (mainly used in CI/CD).

**/server**

- `npm run dev` - Runs the server in watch mode.
- `npm run start` - Starts the server (mainly used when deploying).

## Deployment

To deploy this project on Render, you'll need to do the following:

1. Provision a Postgres database instance (you can also create a new database in an existing Postgres instance).
1. Deploy your backend as a Web Service.
1. Deploy your frontend assets as a Static Site.

### Provision Postgres Instance

If you have previously provisioned a Postgres instance in Render, you won't be able to create a new one. However, you can create a new database within the existing Postgres instance by following these steps:

1. View your Postgres instance in Render.
1. Copy the `External Database URL`.
1. Run `psql <EXTERNAL_DATABASE_URL>`.
1. Create your database: `CREATE DATABASE my_db`.
1. Copy the `Internal Database URL` and replace the string after the final slash with the name of the database you created in the previous step. e.g. `postgres://my-user:lkf8ehg@f893hfg/my_postgres_5x9g` becomes `postgres://my-user:lkf8ehg@f893hfg/my_db`.
1. Save that URL for the next step.

### Create Web Service

To deploy your backend, create a new Web Service in Render with the following options:

![](images/server-settings.png)

> **Note**: The root directory is important since this is where our backend lives in this project structure.

When adding the `DATABASE_URL` environment variable, use the URL you saved from the previous step.

### Create Static Site

To deploy your frontend, create a new Static Site in Render with the following options:

![](images/client-settings.png)

There's one extra step which is to add a Redirect/Rewrite rule.

1. Set the `Source` field to `/api/*`.
1. For the `Destination` field, go to your Web Service and copy its public URL (e.g. `https://react-mvp-api-fthm.onrender.com`) and append `/api/*` to the end of it (e.g. `https://react-mvp-api-fthm.onrender.com/api/*`)
1. Set the `Action` to `Rewrite`.

![](images/rewrite-rule.png)

This rule handles proxying API requests to the Static Site over to the Web Service, circumventing any CORS issues.

### Deployment Debugging

To test your deployment, start with testing your backend APIs to ensure you can get data from your database. Once that is established, open up your Static Site and look for any errors in the console.
