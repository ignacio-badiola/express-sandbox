# Simple project using express.js

This is a project created as sandbox from scratch with:
- Node.js
- Express.js
- nodemon
- views as html

## Steps to create a project from scratch:

- Create app.js file
- npm init
- npm i express
- npm i nodemon
- Edit package.json to add new script "start": nodemon app.js
- Fill app.js creating a server by `app = express()` and then `app.listen(port)`
- create `routes` folder and place router js files under it
- start using new routes in app.js
- create `views` folder and place html files under it
- return pages as routes match response by `res.sendFile`
- create `public` folder to expose to users without security by app.use(express.static(path.join(__dirname, 'public')))
- place all extra js and css files under public folder and use them in the app