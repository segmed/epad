module.exports = {
  env: 'development',
  dbServer: 'http://mycouchdb',
  db: 'epadlite',
  dbPort: process.env.PORT || 5984,
  auth: 'auth',
  dicomweb: 'dicomweb_none',
  logger: true,
  https: true,
};
