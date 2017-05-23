const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGOLAB_RED_URI || `mongodb://localhost/project-3-${env}`;
const secret = process.env.SECRET || 'I bet you never even look at this!';
const url = env === 'development' ? 'http://localhost:7000' : 'https://speak-easy-app.herokuapp.com/';

module.exports = { port, env, dbURI, secret, url };
