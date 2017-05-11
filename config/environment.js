const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project-3-${env}`;
const secret = process.env.SECRET || 'I bet you never even look at this!';
const url = env === 'development' ? 'http://localhost:7000' : 'https://speak-easy-app.herokuapp.com/'; //My link before renaming

module.exports = { port, env, dbURI, secret, url };
