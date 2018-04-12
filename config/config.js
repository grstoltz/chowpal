module.exports = {
  "development": {
    "username": process.env.DEV_DB_USERNAME || 'root',
    "password": 'root',
    "port": process.env.DEV_DB_PORT || 3306,
    "database": 'chowpal_db',
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "port": 3308,
    "database": "chowpal_db_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
}
