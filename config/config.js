module.exports = {
  "development": {
    "username": process.env.DEV_DB_USERNAME || "root",
    "password": null,
    "port": process.env.DEV_DB_PORT || 3306,
    "database": "chowpal_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
<<<<<<< HEAD
    "port": 3308,
    "database": "chowpal_db_test",
=======
    "port": 3306,
    "database": "database_test",
>>>>>>> 1515ba46a970f13bde58ce0667f7fb9dd7c7c0a6
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
}
