# Task-manager/Todo-list App

This is a `Node.js / Express` project. <small>You can view the [documentaion](https://github.com/remy01gh/task-manager-node/blob/main/DOCUMENTATION.md) to this project [Here](https://github.com/remy01gh/task-manager-node/blob/main/DOCUMENTATION.md).</small> 

## Getting Started

First, use npm to install package dependencies.

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

If everything went well, the following log message should be displayed in your console output:

```bash
Server is listening at port 3000...
```

> Note!! if you haven't added your db connection url in your .env file you might likely get this error: `MongooseError: The 'uri' parameter to 'openUri()' must be a string, got "undefined". Make sure the first parameter to 'mongoose.connect()' or 'mongoose.createConnection()' is a string.`

## Environmental Variable

Rename the file `env.text` to `.env`. The file should include the following content:

```bash
DATABASE_URL='databaseConnectionUrl'
```

> Note!! in other for the app to work properly, you need to create the database `'Task-Manager'` yourself in your `'MongoDB Atlas'` cluster before performing any other action within the app.

## Contributions

`Task Manager` is open to contributions, but I recommend creating an issue before making `pull requests`, that way you can link the pull request to that issue.
[Here](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) is a guidline if you aren't familiar with how it works.

### Contribution Guidelines

1. Fork the repo `https://github.com/remy01gh/task-manager-node/fork`.
2. Create a new branch for the issue you are willing to fix, eg : `semver`
3. After making changes, commit your changes with a descriptive commit message, eg : `Changed semver verion in package-lock.json`.
4. Create a pull request to the `dev` branch not `main`.
5. Ensure to describe your pull request and preferably link it to an issue.