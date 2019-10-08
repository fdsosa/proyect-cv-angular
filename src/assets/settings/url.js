let env = process.env.ENV || 'DEV';
let UrlApi =  env == 'PROD' ? process.env.URL_PROD : 'http://localhost:3000/api/';

module.exports = UrlApi;