module.exports = {
  env: 'development',
  dbServer: 'http://mycouchdb',
  db: 'chronicle',
  dbPort: process.env.PORT || 5984,
  auth: 'none',
  logger: true,
};
